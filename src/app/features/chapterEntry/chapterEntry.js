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

/* Props passed to component are:
 * chapterTitle={chapters[key].data.attributes.title}
 * chapterNum={chapters[key].data.attributes.chapter}
 * chapterID={chapters[key].data.id}
 * seriesID={id}
 * iter={iterCount++}
 */
export function ChapterEntry({
  chapterTitle,
  chapterNum,
  chapterID,
  seriesID,
  iter,
}) {
  const classes = useStyles();
  const dispatch = useDispatch();
  // TODO: Rename chapterID used in chapter keys to localChapterID, as that's the ID that's used
  //       within the object, not the actual identifying ID for the chapter in the API
  const chapterKeys = { seriesID: seriesID, chapterID: iter };
  const isHighlighted = useSelector(
    (state) => state.FeedCard.cards[seriesID].chapters[iter].highlight
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
      href={`https://mangadex.org/chapter/${chapterID}/1`}
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
          primary={`Chapter ${chapterNum}`}
          secondary={chapterTitle}
        />
      </ListItem>
    </Link>
  );
}
