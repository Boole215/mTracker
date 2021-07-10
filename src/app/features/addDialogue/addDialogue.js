import React from "react";

// Redux/Reducer imports
import { useSelector, useDispatch } from "react-redux";
import { updateField, clearTextfield } from "./addDialogueSlice";
import { closeAddDialogue } from "../addCard/addCardSlice";
import { fetchManga, clearAddingResult } from "../card/cardSlice";
import { AddCardTooltip } from "../addCardTooltip/addCardTooltip";

// material-ui imports
import {
  TextField,
  Button,
  makeStyles,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from "@material-ui/core";

const useStyles = makeStyles({
  font: {
    fontFamily: "Roboto",
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
  let currentValue = useSelector((state) => state.AddDialogue.dialogueField);
  const classes = useStyles();

  // It seems like you need to dispatch reducers in an anonymous function in order
  // to prevent them from being dispatched upon component rendering
  const handleFetchManga = (e) => {
    e.preventDefault();
    dispatch(fetchManga(currentValue));
    dispatch(closeAddDialogue);
  };
  const handleUpdateField = (e) => dispatch(updateField(e.target.value));
  const handleCloseAddDialogue = () => {
    dispatch(closeAddDialogue());
    dispatch(clearTextfield());
    dispatch(clearAddingResult());
  };

  const addingResult = useSelector((state) => state.FeedCard.addingResult);

  return (
    <Dialog open={showThis} onClose={handleCloseAddDialogue}>
      <DialogTitle>
        Add Manga
        <AddCardTooltip />
      </DialogTitle>
      <form onSubmit={handleFetchManga}>
        <DialogContent>
          <DialogContentText>
            Please provide the ID of the series that you'd like to add
          </DialogContentText>
          <TextField
            onChange={handleUpdateField}
            valueid="inputID"
            variant="outlined"
            label="Series ID"
            helperText={addingResult}
            error={addingResult === "API Error"}
            fullWidth
          />
        </DialogContent>
        <DialogActions>
          <Button
            //variant="contained"
            type="submit"
            //onClick={handleFetchManga}
            className={classes.font}
          >
            Add it!
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
}
