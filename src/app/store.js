import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import feedCardReducer from "./features/card/cardSlice";
import addCardReducer from "./features/addCard/addCardSlice";
import addDialogueReducer from "./features/addDialogue/addDialogueSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  FeedCard: feedCardReducer,
  AddCard: addCardReducer,
  addDialogue: addDialogueReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["FeedCard"],
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducers,
});

export default store;

/*
 * Because each component manages the state of itself
 * and of other instances of itself, my previous notion
 * of the way one might organize the state tree is likely
 * mistaken, assuming that we're going to be using initialState.
 * So the "list" representing our cards and their order will be under
 * FeedCard, so it should keep track of all of them
 */
