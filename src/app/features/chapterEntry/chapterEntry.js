import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Link } from "@material-ui/core";

const useStyles = makeStyles({
  myListItem: {
    paddingLeft: "1.5vw",
    marginTop: "-15px",
    marginBottom: "0vh",
    marginRight: "-1.25vw",
    "&:hover": {
      color: "#7393B3!important",
    },
  },

  chapterEntry: {
    fontFamily: "Roboto",
    fontSize: "1.1vh",
    color: "White",
  },
  myTypography: {
    fontSize: ".9vh",
    color: "White",
    fontFamily: "Roboto",
    "&:hover": {
      color: "#7393B3!important",
    },
  },
});
// Link for each chapter looks like: https://mangadex.org/chapter/CHAPTERID/1
// Where the number on the end is the page number
export function ChapterEntry(props) {
  const classes = useStyles();

  return (
    <Link
      underline={"None"}
      href={`https://mangadex.org/chapter/${props.chapterID}/1`}
      TypographyClasses={classes.myTypography}
    >
      <ListItem className={`${classes.myListItem} ${classes.myTypography}`}>
        <ListItemText
          primaryTypographyProps={{ className: classes.myTypography }}
          secondaryTypographyProps={{ className: classes.myTypography }}
          primary={`Chapter ${props.chapterNum}`}
          secondary={props.chapterTitle}
        />
      </ListItem>
    </Link>
  );
}
