import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MangadexAPI from "../../services/MangadexAPI";
import { getIdealFontSize } from "../../services/UtilityFunctions";
import myIcon from "../../../assets/favicon.ico";

// TODO: Add conditionals for if the series has already added
//       as in, only make the chapter and cover calls.
export const fetchManga = createAsyncThunk(
  "feedcard/fetchManga",
  async (seriesId) => {
    let mangaResponse = await MangadexAPI.fetchMangaById(seriesId);
    const chapterResponse = await MangadexAPI.fetchChapter(seriesId);

    const coverResponse = await MangadexAPI.fetchCover(
      mangaResponse["relationships"]["2"]["id"]
    );

    mangaResponse["data"][
      "coverURL"
    ] = `https://uploads.mangadex.org/covers/${mangaResponse["data"]["id"]}/${coverResponse["data"]["attributes"]["fileName"]}.512.jpg`;
    mangaResponse["data"]["chapterList"] = chapterResponse.results;
    mangaResponse["data"]["chapterList"] = mangaResponse["data"][
      "chapterList"
    ].map((x) => ({
      ...x,
      highlight: false,
    }));

    // The following lines will be used for testing the update function
    // They will remove the most recent entry, then move everything else up by one
    //const chapOne = mangaResponse["data"]["chapterList"]["1"];
    //mangaResponse["data"]["chapterList"]["0"] = chapOne;
    //65163395-201c-4f5a-b303-706f32bf2df4
    return mangaResponse;
  }
);

export const updateChapterList = createAsyncThunk(
  "feedcard/updateChapterList",
  async (seriesId, { getState }) => {
    const state = getState();
    const currentSeriesLatestChapter =
      state.FeedCard.cards[seriesId].mostRecentChapter;

    const currentSeriesTitle = state.FeedCard.cards[seriesId].seriesTitle;

    const updatedChapterList = await MangadexAPI.fetchChapter(seriesId);
    const retChapList = updatedChapterList.results.map((x) => ({
      ...x,
      highlight: false,
    }));
    // If the length of the list of chapters is non zero, then get the latest chapter's number
    const latestChapter =
      updatedChapterList.results.length !== 0
        ? updatedChapterList.results["0"].data.attributes.chapter
        : null;
    if (latestChapter != null) {
      if (latestChapter !== currentSeriesLatestChapter) {
        const latestTitle = retChapList["0"].data.attributes.title;
        console.log("Sending notification");
        const title = `New Chapter for ${currentSeriesTitle}!`;
        const body = `Chapter ${latestChapter}, ${latestTitle}`;

        // eslint-disable-next-line no-unused-vars
        const myNotif = new Notification(title, { body, myIcon });
        console.log("Notification sent");
      }
    }
    return {
      seriesId: seriesId,
      chapterList: retChapList,
      latest: latestChapter,
    };
  }
);

export const feedCardSlice = createSlice({
  name: "feedcard",
  initialState: {
    /*
        title:'placeholder',
        chapters:[
            "something"
        ],
        seriesID:"0",
        showInfo:false,
        */
    cards: {},
    cardCount: 0,
    loading: false,
  },
  reducers: {
    // mouse actions receive the card's ID as the payload in order to determine
    // which specific card to blur
    mouseInside: (state, action) => {
      state.cards[action.payload].showInfo = true;
    },
    mouseOutside: (state, action) => {
      state.cards[action.payload].showInfo = false;
    },

    mouseOverChapter: (state, action) => {
      state.cards[action.payload.seriesID].chapters[
        action.payload.chapterID
      ].highlight = true;
    },
    mouseNoLongerOverChapter: (state, action) => {
      state.cards[action.payload.seriesID].chapters[
        action.payload.chapterID
      ].highlight = false;
    },
  },
  extraReducers: {
    [fetchManga.fulfilled]: (state, action) => {
      // Pull things from action.payload to config
      state.cards[action.payload["data"]["id"]] = {
        seriesTitle: action.payload["data"]["attributes"]["title"]["en"],
        coverLoc: action.payload["data"]["coverURL"],
        seriesDesc: action.payload["data"]["attributes"]["description"]["en"],
        chapters: action.payload["data"]["chapterList"],
        mostRecentChapter:
          action.payload["data"]["chapterList"].length !== 0
            ? action.payload.data.chapterList["0"].data.attributes.chapter
            : null,
        titleSize: getIdealFontSize(
          action.payload["data"]["attributes"]["title"]["en"].length
        ),
      };

      state.cardCount += 1;
    },
    [fetchManga.rejected]: (state, action) => {
      console.log("series failed");
      // TODO Do something here
    },
    [updateChapterList.fulfilled]: (state, action) => {
      state.cards[action.payload.seriesId].chapters =
        action.payload.chapterList;
      state.cards[action.payload.seriesId].mostRecentChapter =
        action.payload.latest;
    },
  },
});

export const {
  mouseInside,
  mouseOutside,
  mouseOverChapter,
  mouseNoLongerOverChapter,
} = feedCardSlice.actions;

export default feedCardSlice.reducer;
