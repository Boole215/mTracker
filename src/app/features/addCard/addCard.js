import React from "react";
import { useDispatch } from 'react-redux'
import { openAddDialogue } from "./addCardSlice";
import AddIcon from '@material-ui/icons/Add';
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";


const useStyles = makeStyles({
    addPos:{
        position:"fixed",
        bottom:"1vw",
        left:"95vw",
        marginRight: 10,
        marginBottom: 10,

    }
});

export function AddCard(){
    const dispatch = useDispatch()
    const classes = useStyles()

    return(
        <IconButton size="medium" color="black" onClick={() => {dispatch(openAddDialogue())}} className={ classes.addPos }>
            <AddIcon fontSize="large" />
        </IconButton>
    )

}

