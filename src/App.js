import React from 'react'

import { FeedCard } from "./features/card/card"
import { AddCard } from "./features/addCard/addCard"
import {useSelector, useDispatch} from 'react-redux'
import {Provider} from "react-redux";
import store from "./app/store"

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import '@fontsource/roboto'
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
   addPos:{
       position:"fixed",
       bottom:0,
       left:"100px",
       marginRight: 10,
       marginBottom: 10,

   }
});



function App() {
    const classes = useStyles()

    // useSelector((state) => state.addingFeed)


    return (
        <Provider store={store}>
                <Box m={"15px"} height="90vh">
                    <Grid container spacing={3}>
                        {
                            //TODO: Figure out how to generate each card uniquely
                            //      Such that they don't all blur when you hover
                            //      over one card.
                        }

                        <FeedCard/>


                    </Grid>
                </Box>
                <AddCard />

        </Provider>
    );
}

export default App;


