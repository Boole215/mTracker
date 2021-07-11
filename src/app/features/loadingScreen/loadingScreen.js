import React from "react";
import { CircularProgress } from "@material-ui/core";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  loading: {
    position: "absolute",
    left: "45vw",
    top: "45vh",
    padding: 10,
    zIndex: 4,
  },
});

export function LoadingScreen() {
  const classes = useStyles();
  return <CircularProgress className={classes.loading} />;
}
