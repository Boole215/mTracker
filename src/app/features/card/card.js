import React from "react";
// Redux import
import { useSelector, useDispatch } from "react-redux";
import { mouseInside, mouseOutside, touchToggleBlur } from "./cardSlice";

// component import
import { ChapterEntry } from "../chapterEntry/chapterEntry";
// asset import
//import rotundCat from '../../assets/rotundCat.jpg'

// material-ui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import {
  Fade,
  Grid,
  CardMedia,
  CardActionArea,
  Typography,
  List,
  ListSubheader,
  Card,
} from "@material-ui/core";

const useStyles = makeStyles({
  // TODO: Figure out how to make then rectangular cards,
  //       that are taller than they are wide. While
  //       maintaining image scale (clipping is ok)

  // For some reason setting a minWidth and a minHeight rather than width/heights made the cards become
  // smaller as you added more. Like, first card is normal sized, second card is a bit smaller, third card is
  // even smaller etc. Like a matryoshka doll.
  root: {
    position: "relative",
    // maxWidth looks good at 345
    //maxWidth: 345,
    minWidth: "10vw",
    height: "40vh",
    maxWidth: "50vw",
    maxHeight: "53.33vh",
    objectFit: "fill",
    MuiButtonBase: { disableRipple: true },
  },
  media: {
    //height: "40vh",
    //width: "15vw",
    minWidth: "15vw",
    minHeight: "40vh",
    maxWidth: "50vw",
    maxHeight: "53.33vh",
    objectFit: "cover",
  },
  blurImg: {
    filter: "blur(3px) brightness(50%)",
  },
  seriesTitle: {
    paddingLeft: "3.25vw",
    paddingTop: "4vh",
    paddingRight: "2.5vw",
    position: "absolute",
    fontSize: "2vh",
    color: "white",
    fontFamily: "Roboto",
    zIndex: 1,
  },
  myList: {
    zIndex: 1,
    position: "absolute",
    background: "none",
    paddingTop: "13vh",
    paddingLeft: "3vw",
  },
  listHeader: {
    color: "White",
    fontFamily: "Roboto",
    fontSize: "1.5vh",
  },
});

// add props to be access stuff
export function FeedCard({ id }) {
  const dispatch = useDispatch();
  const crntTitle = useSelector(
    (state) => state.FeedCard.cards[id].seriesTitle
  );
  const imageURL = useSelector((state) => state.FeedCard.cards[id].coverLoc);
  const titleSize = useSelector((state) => state.FeedCard.cards[id].titleSize);

  const handleMouseEnter = () => dispatch(mouseInside(id));
  const handleMouseExit = () => dispatch(mouseOutside(id));
  const handleTouchToggle = () => dispatch(touchToggleBlur(id));
  /*const desc = useSelector(
    (state) => state.FeedCard.cards[props.id].seriesDesc
  );*/
  let iterCount = 0;
  const classes = useStyles();
  const innerFont = makeStyles({
    dynamicTitle: {
      fontSize: `${titleSize}vh!important`,
    },
  });
  const innerClasses = innerFont();

  const doBlur = useSelector((state) =>
    state.FeedCard.cards[id].showInfo ? classes.blurImg : null
  );

  const chapters = useSelector((state) => state.FeedCard.cards[id].chapters);

  return (
    <Grid item={true} xs={4} sm={3} md={3} lg={2} xl={2}>
      <Fade in={true} timeout={{ enter: 600 }}>
        <Card elevation={6} className={classes.root}>
          <CardActionArea disableRipple>
            <div
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseExit}
              onTouchStart={handleTouchToggle}
            >
              {doBlur ? (
                // TODO: The Manga title and chapter list might look better if a Grid/GridItems are used rather than divs, look into this
                <div>
                  <Typography
                    gutterBottom
                    className={`${classes.seriesTitle} ${innerClasses.dynamicTitle}`}
                    variant="h5"
                    component="h5"
                  >
                    {crntTitle}
                  </Typography>
                  <List
                    className={classes.myList}
                    dense={true}
                    disablePadding
                    subheader={
                      <ListSubheader
                        component="div"
                        id="nested-list-subheader"
                        className={`${classes.listHeader} `}
                      >
                        Chapters
                      </ListSubheader>
                    }
                  >
                    {Object.keys(chapters)
                      .slice(0, 5)
                      .map((key) => (
                        <ChapterEntry
                          chapterTitle={chapters[key].data.attributes.title}
                          chapterNum={chapters[key].data.attributes.chapter}
                          chapterID={chapters[key].data.id}
                          seriesID={id}
                          iter={iterCount++}
                        />
                      ))}
                  </List>
                </div>
              ) : null}
              {/*<CardMedia component="img" image={rotundCat} title="Large Cat" className={`${classes.media} ${doBlur ? classes.blurImg : null}`}/>*/}
              <CardMedia
                component="img"
                image={imageURL}
                title="Cover Image"
                className={`${classes.media} ${
                  doBlur ? classes.blurImg : null
                }`}
              />
            </div>
          </CardActionArea>
        </Card>
      </Fade>
    </Grid>
  );
}
