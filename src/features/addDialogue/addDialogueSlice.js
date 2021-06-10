import { createSlice } from '@reduxjs/toolkit'
export const addDialogueSlice = createSlice({
    name:"AddDialogue",
    initialState:{},
    reducers:{
        updateField: (state, action) => {
            state.dialogField = action.payload
        },
        // pushes the submitted ID to be processed with API calls, and for an entry under 'cards'
        // to be created for the data that will (/should) be received
        pushID:  (state, action) => {
            // Add some kind of logic that makes an entry under cards, and keeps all the initial state
            // stuff except for the series ID

            state.cards[state.cardCount].seriesID = action.payload
            state.cardCount += 1
            state.showInfo = !state.showInfo
        }
    },
})

export const {updateField} = addDialogueSlice.actions

export default addDialogueSlice.reducer