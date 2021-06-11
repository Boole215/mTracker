import React from "react"
// Redux import
import { useSelector, useDispatch } from 'react-redux'
import { updateField} from "./addDialogueSlice";
import { closeAddDialogue } from "../addCard/addCardSlice";
import { pushID } from "../card/cardSlice"


// material-ui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import {Paper, Typography, CardActionArea,
              CardContent, TextField, IconButton} from "@material-ui/core";
import {addCardSlice} from "../addCard/addCardSlice";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    font:{
        fontFamily:"Roboto",
        color:"black",

    },
    addDia:{
        position:"absolute",
        left:"40vw",
        top:"40vh",
        padding:10,
        zIndex:4,
    },
    exit:{
        position:"absolute",
        marginLeft:"80%",
        top:0,
    }

})

export function AddDialogue(){

    const dispatch = useDispatch()
    const showThis = useSelector((state) => state.AddCard.addingFeed)
    let currentValue = useSelector((state) => state.dialogueField)
    const classes = useStyles()

    // It seems like you need to dispatch reducers in an anonymous function in order
    // to prevent them from being dispatched upon component rendering

    return(
        showThis ?
        <Paper elevation={4} className={classes.addDia}>
            <IconButton size="medium" onClick={()=>{dispatch(closeAddDialogue())}} className={classes.exit}>
                <CloseIcon fontSize="medium"/>
            </IconButton>

                    <Typography className={classes.font}>
                        What is the series' ID?
                    </Typography>

                    <form autoComplete="off">
                        <TextField onChange={() => {dispatch(updateField(currentValue))}} value={currentValue} valueid="inputID" variant="outlined" label="Series ID"/>
                        <Button onClick={()=>{dispatch(pushID(currentValue))}}>Add it!</Button>
                    </form>


        </Paper> : null

    )
}