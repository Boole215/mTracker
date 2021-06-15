import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  myListItem: {
    paddingLeft: "15%",
  },
  chapterEntry: {
    fontFamily: "Roboto",
    fontSize: "12px",
    marginTop: "-17px",
    color: "White",
  },
  myTypography: {
    fontSize: "9px",
    color: "White",
    fontFamily: "Roboto",
  },
});

export function ChapterEntry(props) {
  const classes = useStyles();

  return (
    <ListItem className={classes.myListItem}>
      <ListItemText
        primaryTypographyProps={{ classes: classes.myTypograpy }}
        secondaryTypographyProps={{ className: classes.myTypography }}
        classes={{ primary: classes.chapterEntry }}
        primary={`Chapter ${props.chapterNum}`}
        secondary={props.chapterTitle}
      />
    </ListItem>
  );
}
