import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { IconButton, makeStyles } from "@material-ui/core";
import CachedIcon from "@material-ui/icons/Cached";
import { updateChapterList } from "../card/cardSlice";

const useStyles = makeStyles({
  updatePos: {
    position: "fixed",
    top: "1vw",
    left: "95vw",
    marginRight: 10,
    marginTop: 10,
  },
});

export function UpdateChaptersButton() {
  const dispatch = useDispatch();
  const currentSeriesIds = Object.keys(
    useSelector((state) => state.FeedCard.cards)
  );
  const classes = useStyles();
  const handleUpdateChapters = () => {
    currentSeriesIds.forEach((key) => dispatch(updateChapterList(key)));
  };

  return (
    <IconButton
      size="medium"
      color="black"
      className={classes.updatePos}
      onClick={handleUpdateChapters}
    >
      <CachedIcon />
    </IconButton>
  );
}
