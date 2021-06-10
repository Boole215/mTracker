import { createSlice } from'@reduxjs/toolkit'

// For a component that's going to be recycled very often like this one,
// is it even worth giving it an initialState?

// When I hover over card zero, how does it know that it's the zeroth card?
// How will it know to blur itself and not say, card one?
export const feedCardSlice = createSlice({
    name:"feedcard",
    initialState: {
        title:'placeholder',
        chapters:[
            "something"
        ],
        seriesID:"0",
        showInfo:false,

    },
    reducers: {
        mouseInside: (state) => {
            state.showInfo = true
        },
        mouseOutside: (state) => {
            state.showInfo = false
        },

    },
})

export const { mouseInside, mouseOutside } = feedCardSlice.actions

export default feedCardSlice.reducer