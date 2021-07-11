import { createSlice } from "@reduxjs/toolkit";
export const addDialogueSlice = createSlice({
  name: "AddDialogue",
  initialState: {
    dialogueField: "",
  },
  reducers: {
    updateField: (state, action) => {
      state.dialogueField = action.payload;
    },
    clearTextfield: (state) => {
      state.dialogueField = "";
    },
    // pushes the submitted ID to be processed with API calls, and for an entry under 'cards'
    // to be created for the data that will (/should) be received
  },
});

export const { updateField, clearTextfield } = addDialogueSlice.actions;

export default addDialogueSlice.reducer;
