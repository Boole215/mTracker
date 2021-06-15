import React from "react";
// Redux import
import { useSelector, useDispatch } from "react-redux";
import { updateField } from "./addDialogueSlice";
import { closeAddDialogue } from "../addCard/addCardSlice";
import { fetchMangaById } from "../card/cardSlice";

// material-ui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Button from "@material-ui/core/Button";
import { Paper, Typography, TextField, IconButton } from "@material-ui/core";
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
  //const currentValue = useSelector((state) => state.dialogueField)
  let currentValue = useSelector((state) => state.addDialogue.dialogueField);
  console.log("currentValue in addDialogue");
  console.log(currentValue);
  const classes = useStyles();

  // It seems like you need to dispatch reducers in an anonymous function in order
  // to prevent them from being dispatched upon component rendering
  const handleFetchManga = () => dispatch(fetchMangaById(currentValue));

  return showThis ? (
    <Paper elevation={4} className={classes.addDia}>
      <IconButton
        size="medium"
        onClick={() => {
          dispatch(closeAddDialogue());
        }}
        className={classes.exit}
      >
        <CloseIcon fontSize="medium" />
      </IconButton>

      <Typography className={classes.font}>What is the series' ID?</Typography>

      <form autoComplete="off">
        <TextField
          onChange={(e) => dispatch(updateField(e.target.value))}
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
  ) : null;
}
