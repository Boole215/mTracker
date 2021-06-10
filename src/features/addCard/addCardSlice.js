import { createSlice} from "@reduxjs/toolkit";
export const addCardSlice = createSlice({
    name: "addCard",
    initialState: {},
    reducers: {
        toggleAddWind: (state) => {
            state.addingFeed = !state.addingFeed
        },
    },
})

export const { toggleAddWind } = addCardSlice.actions

export default addCardSlice.reducer
