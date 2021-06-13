import { createSlice } from "@reduxjs/toolkit";
export const addCardSlice = createSlice({
    name: "addCard",
    initialState: {
        addingFeed: false,
    },
    reducers: {
        // self explanatory setters, used by the add button and the add dialogue's
        // exit button
        openAddDialogue: (state) => {
            state.addingFeed = true
        },
        closeAddDialogue: (state) => {
            state.addingFeed = false
        },
    },

})

export const { openAddDialogue, closeAddDialogue } = addCardSlice.actions

export default addCardSlice.reducer
