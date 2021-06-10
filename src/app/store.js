import { configureStore } from "@reduxjs/toolkit";
import feedCardReducer from "../features/card/cardSlice"
import addCardReducer from "../features/addCard/addCardSlice"

// It seems like adding an initialState is a moot point
export default configureStore({
    initialState:{
        cards:{},
        cardCount:0,
        addingFeed: false,
        formValue: "",
        dialogField:null,

    },
    reducer: {
        FeedCard:feedCardReducer,
        AddCard:addCardReducer,
    },
})

/*
* Because each component manages the state of itself
* and of other instances of itself, my previous notion
* of the way one might organize the state tree is likely
* mistaken, assuming that we're going to be using initialState.
* So the "list" representing our cards and their order will be under
* FeedCard, so it should keep track of all of them
*/