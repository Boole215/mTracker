import React from "react"
// Redux import
import { useSelector, useDispatch } from 'react-redux'
import { updateField, pushID } from "./addDialogueSlice";


// material-ui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import Card, {Typography, CardActionArea,
              CardContent, TextField, IconButton} from "@material-ui/core";
import {addCardSlice} from "../addCard/addCardSlice";
import CloseIcon from '@material-ui/icons/Close';

const useStyles = makeStyles({
    font:{
        fontFamily:"Roboto",
        color:"black",

    },
})

export function AddDialogue(){

    const dispatch = useDispatch()
    const currentValue = useSelector((state => state.dialogField))
    return(
        <Card elevation={4}>
            <IconButton size="medium">

            </IconButton>
            <CardActionArea>
                <CardContent>
                    <Typography>
                        What is the series' ID?
                    </Typography>
                    <form noValidate autoComplete="off">
                        <TextField onChange={dispatch(updateField())} value={currentValue} valueid="inputID" variant="outlined" label="Series ID"/>
                        <Button onClick={dispatch(pushID(currentValue))}>Add it!</Button>
                    </form>
                </CardContent>

            </CardActionArea>

        </Card>

    )
}