import { createSlice } from "@reduxjs/toolkit";

export const openSettingsButtonSlice = createSlice({
  name: "settingsCard",
  initialState: {
    showSettings: false,
    shouldAutoUpdate: false,
    nextUpdateAtTime: null,
    lastUpdateTime: null,
    currentTime: null,
  },
  reducers: {
    toggleAutoUpdates: (state) => {
      state.shouldAutoUpdate = !state.shouldAutoUpdate;
    },
    setLastUpdateTime: (state) => {
      state.lastUpdateTime = Date.now();
    },
    // true enables this, false disables and turns the nextUpdateAtTime to null
    setNextUpdateTime: (state, action) => {
      state.nextUpdateAtTime = action.payload
        ? state.lastUpdateTime + 1200000
        : null;
    },
    setCurrentTime: (state) => {
      state.currentTime = Date.now();
    },
    toggleShowSettings: (state) => {
      state.showSettings = !state.showSettings;
    },
  },
});

export const {
  toggleAutoUpdates,
  setLastUpdateTime,
  setNextUpdateTime,
  setCurrentTime,
  toggleShowSettings,
} = openSettingsButtonSlice.actions;

export default openSettingsButtonSlice.reducer;
