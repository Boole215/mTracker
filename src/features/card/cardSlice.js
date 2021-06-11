import { createSlice } from'@reduxjs/toolkit'

// For a component that's going to be recycled very often like this one,
// is it even worth giving it an initialState?

// When I hover over card zero, how does it know that it's the zeroth card?
// How will it know to blur itself and not say, card one?
export const feedCardSlice = createSlice({
    name:"feedcard",
    initialState: {
        /*
        title:'placeholder',
        chapters:[
            "something"
        ],
        seriesID:"0",
        showInfo:false,
        */
        cards:{},
        cardCount: 0,
    },
    reducers: {
        // mouse actions receive the card's ID as the payload in order to determine
        // which specific card to blur
        mouseInside: (state, action) => {
            state.cards[action.payload].showInfo = true
        },
        mouseOutside: (state, action) => {
            state.cards[action.payload].showInfo = false
        },

        // function receives series ID as payload to use for api calls
        // TODO set up mangadex API calls
        pushID:  (state, action) => {


            state.cards[state.cardCount] = {}
            state.cards[state.cardCount].seriesID = action.payload
            state.cards[state.cardCount].seriesTitle = "Placeholder Title"
            state.cards[state.cardCount].chapters = {}
            state.cards[state.cardCount].showInfo = false
            state.cardCount += 1

        },

    },
})

export const { mouseInside, mouseOutside, pushID } = feedCardSlice.actions

export default feedCardSlice.reducer