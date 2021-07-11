import { createSlice } from "@reduxjs/toolkit";

export const buttonSpeedDialSlice = createSlice({
  name: "actionSpeedDial",
  initialState: {
    shouldShowActions: false,
  },
  reducers: {
    toggleShowActions: (state) => {
      state.shouldShowActions = !state.shouldShowActions;
    },
  },
});

export const { toggleShowActions } = buttonSpeedDialSlice.actions;

export default buttonSpeedDialSlice.reducer;
