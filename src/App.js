import React from 'react'
import "./index.css"
import { AddCard } from "./features/addCard/addCard"
import { AddDialogue } from "./features/addDialogue/addDialogue"
import { Provider } from "react-redux";
import { CardGen } from "./features/cardGen/cardGen"
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

    },



});



function App() {
    const classes = useStyles()

    // useSelector((state) => state.addingFeed)


    return (
        <Provider store={store} >

            <AddDialogue />
            <Box m={"15px"} height="100%">

                <Grid container spacing={3}>

                    <CardGen/>

                </Grid>

                <AddCard />

            </Box>
        </Provider>
    )
}

export default App;


