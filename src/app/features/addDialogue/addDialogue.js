import React from "react";
// Redux import
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "./addDialogueSlice";
import { closeAddDialogue } from "../addCard/addCardSlice";
import { fetchManga } from "../card/cardSlice";

// material-ui imports
import {
  Paper,
  Typography,
  TextField,
  IconButton,
  Button,
  makeStyles,
  Fade,
} from "@material-ui/core";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles({
  font: {
    fontFamily: "Roboto",
    color: "black",
  },
  addDia: {
    position: "absolute",
    left: "40vw",
    top: "40vh",
    padding: 10,
    zIndex: 4,
  },
  exit: {
    position: "absolute",
    marginLeft: "80%",
    top: 0,
  },
  addButton: {
    marginTop: "2.5%",
  },
});

export function AddDialogue() {
  const dispatch = useDispatch();
  const showThis = useSelector((state) => state.AddCard.addingFeed);
  let currentValue = useSelector((state) => state.addDialogue.dialogueField);
  const classes = useStyles();

  // It seems like you need to dispatch reducers in an anonymous function in order
  // to prevent them from being dispatched upon component rendering
  const handleFetchManga = () => dispatch(fetchManga(currentValue));
  const handleUpdateField = (e) => dispatch(updateField(e.target.value));

  return (
    <Fade in={showThis}>
      <Paper elevation={12} className={classes.addDia}>
        <IconButton
          size="medium"
          onClick={() => {
            dispatch(closeAddDialogue());
          }}
          className={classes.exit}
        >
          <CloseIcon fontSize="medium" />
        </IconButton>

        <Typography className={classes.font}>
          What is the series' ID?
        </Typography>

        <form autoComplete="off">
          <TextField
            onChange={handleUpdateField}
            valueid="inputID"
            variant="outlined"
            label="Series ID"
          />
          <Button
            variant="contained"
            onClick={handleFetchManga}
            className={classes.addButton}
          >
            Add it!
          </Button>
        </form>
      </Paper>
    </Fade>
  );
}
