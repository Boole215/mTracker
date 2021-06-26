import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, makeStyles, ListItemText, ListItem } from "@material-ui/core";
import { mouseOverChapter, mouseNoLongerOverChapter } from "../card/cardSlice";

const useStyles = makeStyles({
  myListItem: {
    paddingLeft: "1.5vw",
    marginTop: "-15px",
    marginBottom: "0vh",
    marginRight: "-1.25vw",
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
  highlight: {
    color: "#7393B3!important",
  },
});
// Link for each chapter looks like: https://mangadex.org/chapter/CHAPTERID/1
// Where the number on the end is the page number
export function ChapterEntry(props) {
  const classes = useStyles();
  const dispatch = useDispatch();
  const chapterKeys = { seriesID: props.seriesID, chapterID: props.iter };
  const isHighlighted = useSelector(
    (state) =>
      state.FeedCard.cards[props.seriesID].chapters[props.iter].highlight
  );
  const handleHoveringChapter = () => {
    dispatch(mouseOverChapter(chapterKeys));
  };
  const handleStoppedHoveringChapter = () => {
    dispatch(mouseNoLongerOverChapter(chapterKeys));
  };

  return (
    <Link
      underline={"None"}
      href={`https://mangadex.org/chapter/${props.chapterID}/1`}
      TypographyClasses={classes.myTypography}
      onMouseEnter={handleHoveringChapter}
      onMouseLeave={handleStoppedHoveringChapter}
    >
      <ListItem className={classes.myListItem}>
        <ListItemText
          // If isHighlighted is true, then the highlight class is added to Typography styling
          primaryTypographyProps={{
            className: `${classes.myTypography} ${
              isHighlighted ? classes.highlight : ""
            }`,
          }}
          secondaryTypographyProps={{
            className: `${classes.myTypography} ${
              isHighlighted ? classes.highlight : ""
            }`,
          }}
          primary={`Chapter ${props.chapterNum}`}
          secondary={props.chapterTitle}
        />
      </ListItem>
    </Link>
  );
}
