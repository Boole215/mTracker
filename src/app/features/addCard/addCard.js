import React from "react";
import { useDispatch } from "react-redux";
import { openAddDialogue } from "./addCardSlice";
import AddCircleRoundedIcon from "@material-ui/icons/AddCircleRounded";
import IconButton from "@material-ui/core/IconButton";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  addPos: {
    position: "fixed",
    bottom: "1vw",
    left: "95vw",
    marginRight: 10,
    marginBottom: 10,
  },
});

export function AddCard() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const handleOpenAddDialogue = () => {
    dispatch(openAddDialogue());
  };

  return (
    <IconButton
      size="medium"
      color="black"
      onClick={handleOpenAddDialogue}
      className={classes.addPos}
    >
      <AddCircleRoundedIcon fontSize="large" />
    </IconButton>
  );
}
