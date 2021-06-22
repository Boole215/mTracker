import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import MangadexAPI from "../../services/MangadexAPI";
// For a component that's going to be recycled very often like this one,
// is it even worth giving it an initialState?

// When I hover over card zero, how does it know that it's the zeroth card?
// How will it know to blur itself and not say, card one?

export const fetchManga = createAsyncThunk(
  "feedcard/fetchByIDStatus",
  async (seriesId) => {
    console.log("requesting series info");

    let mangaResponse = await MangadexAPI.fetchMangaById(seriesId);

    console.log("requesting chapter info");
    const chapterResponse = await MangadexAPI.fetchChapter(seriesId);
    //console.log("requesting chapter info")
    //const chapterResponse = await mangadexAPI.fetchChapters(seriesID)
    //const mangaResponseHard = await mangadexAPI.fetchManga("eb26ab13-148d-48e1-bff4-dcf59c4986a0")
    console.log("requesting cover info");
    const coverResponse = await MangadexAPI.fetchCover(
      mangaResponse["relationships"]["2"]["id"]
    );

    console.log("request response: ");
    console.log(mangaResponse);
    console.log(coverResponse);
    console.log(chapterResponse);
    //mangaResponse["data"]["chapterList"] = chapterResponse.results
    mangaResponse["data"][
      "coverURL"
    ] = `https://uploads.mangadex.org/covers/${mangaResponse["data"]["id"]}/${coverResponse["data"]["attributes"]["fileName"]}.512.jpg`;
    mangaResponse["data"]["chapterList"] = chapterResponse.results;
    //65163395-201c-4f5a-b303-706f32bf2df4
    return mangaResponse;
  }
);
/*
export const fetchChaptersByID = createAsyncThunk(
    'feedcard/fetchChaptersByIDStatus',
    async (seriesID, thunkAPI) =>{
        const response = await mangadexAPI.fetchChapters(seriesID)
        return response.data
    }
)*/
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

    // function receives series ID as payload to use for api calls
    // TODO set up mangadex API calls
    pushID: (state, action) => {
      console.log(action.payload);
      state.cards[action.payload] = {
        seriesTitle: "Placeholder Title",
        seriesDesc: "Placeholder Description",
        coverLoc: "n/a",
        chapters: {},
        showInfo: false,
      };
      //   status: 'idle' | 'loading' | 'succeeded' | 'failed',
      //   error: string | null
      state.cardCount += 1;
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
      };

      state.cardCount += 1;
    },
    [fetchManga.rejected]: (state, action) => {
      console.log("series failed");
      // TODO Do something here
    },
    /*
        [fetchChaptersByID.fulfilled]: (state, action) => {


        }*/
  },
});

export const { mouseInside, mouseOutside, pushID } = feedCardSlice.actions;

export default feedCardSlice.reducer;
