import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import feedCardReducer from "./features/card/cardSlice";
import addCardReducer from "./features/addCard/addCardSlice";
import addDialogueReducer from "./features/addDialogue/addDialogueSlice";
import settingsCardReducer from "./features/settingsCard/settingsCardSlice";
import buttonSpeedDialReducer from "./features/buttonSpeedDial/buttonSpeedDialSlice";
import removeCardDialogueReducer from "./features/removeCardDialogue/removeCardDialogueSlice";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const reducers = combineReducers({
  FeedCard: feedCardReducer,
  AddCard: addCardReducer,
  AddDialogue: addDialogueReducer,
  Settings: settingsCardReducer,
  actionSpeedDial: buttonSpeedDialReducer,
  RemoveDialogue: removeCardDialogueReducer,
});

const persistConfig = {
  key: "root",
  storage,
  whitelist: ["FeedCard", "Settings"],
};

const persistedReducers = persistReducer(persistConfig, reducers);

const store = configureStore({
  reducer: persistedReducers,
});

export default store;
