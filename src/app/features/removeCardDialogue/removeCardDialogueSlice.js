import { createSlice } from "@reduxjs/toolkit";

export const removeCardDialogueSlice = createSlice({
  name: "RemoveDialogue",
  initialState: {
    shouldShow: false,
  },
  reducers: {
    toggleRemoveDialogue: (state) => {
      state.shouldShow = !state.shouldShow;
    },
  },
});

export const { toggleRemoveDialogue } = removeCardDialogueSlice.actions;

export default removeCardDialogueSlice.reducer;
