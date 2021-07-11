import React from "react";
import { useDispatch } from "react-redux";
import { openAddDialogue } from "./addCardSlice";
import AddIcon from "@material-ui/icons/Add";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Fab } from "@material-ui/core";

const useStyles = makeStyles({
  addPos: {
    position: "fixed",
    right: "1vw",
    bottom: "4vh",
  },
});

export function AddCard() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleOpenAddDialogue = () => {
    dispatch(openAddDialogue());
  };

  return (
    <Fab
      size="medium"
      color="black"
      onClick={handleOpenAddDialogue}
      className={classes.addPos}
    >
      <AddIcon fontSize="large" />
    </Fab>
  );
}
