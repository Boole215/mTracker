import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MangadexAPI from "../../services/MangadexAPI";
import { getIdealFontSize } from "../../services/UtilityFunctions";

// TODO: Add conditionals for if the series has already added
//       as in, only make the chapter and cover calls.
export const fetchManga = createAsyncThunk(
  "feedcard/fetchByIDStatus",
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
    //65163395-201c-4f5a-b303-706f32bf2df4
    return mangaResponse;
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
  },
});

export const {
  mouseInside,
  mouseOutside,
  mouseOverChapter,
  mouseNoLongerOverChapter,
} = feedCardSlice.actions;

export default feedCardSlice.reducer;
