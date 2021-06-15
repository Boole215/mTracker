import React from "react";
// Redux import
import { useSelector, useDispatch } from "react-redux";
import { mouseInside, mouseOutside } from "./cardSlice";

// component import
import { ChapterEntry } from "../chapterEntry/chapterEntry";
// asset import
//import rotundCat from '../../assets/rotundCat.jpg'

// material-ui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListSubheader from "@material-ui/core/ListSubheader";

const useStyles = makeStyles({
  // TODO: Figure out how to make then rectangular cards,
  //       that are taller than they are wide. While
  //       maintaining image scale (clipping is ok)
  root: {
    position: "relative",
    maxWidth: 345,
    width: "15vw",
    height: "40vh",
    objectFit: "fill",
  },
  media: {
    height: "40vh",
    width: "15vw",
    objectFit: "fill",
  },
  blurImg: {
    filter: "blur(3px) brightness(50%)",
  },
  font: {
    paddingLeft: "15%",
    top: "10%",
    paddingRight: "15%",
    position: "absolute",
    fontSize: "140%",
    color: "white",
    fontFamily: "Roboto",
    zIndex: 1,
  },
  myList: {
    zIndex: 1,
    position: "absolute",
    fontColor: "black",
    background: "none",
    paddingTop: "40%",
    paddingLeft: "10%",
  },
  listHeader: {
    color: "White",
    fontFamily: "Roboto",
    fontSize: "18px",
  },
});

// add props to be access stuff
export function FeedCard(props) {
  const dispatch = useDispatch();
  const crntTitle = useSelector(
    (state) => state.FeedCard.cards[props.id].seriesTitle
  );
  const imageURL = useSelector(
    (state) => state.FeedCard.cards[props.id].coverLoc
  );

  /*const desc = useSelector(
    (state) => state.FeedCard.cards[props.id].seriesDesc
  );*/

  const classes = useStyles();

  const doBlur = useSelector((state) =>
    state.FeedCard.cards[props.id].showInfo ? classes.blurImg : null
  );

  const chapters = useSelector(
    (state) => state.FeedCard.cards[props.id].chapters
  );

  return (
    <Grid item xs={2}>
      <Card elevation={3} className={classes.root}>
        <CardActionArea>
          <div
            onMouseEnter={() => dispatch(mouseInside(props.id))}
            onMouseLeave={() => dispatch(mouseOutside(props.id))}
          >
            {doBlur ? (
              <div>
                <Typography
                  gutterBottom
                  className={classes.font}
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
                      className={classes.listHeader}
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
              className={`${classes.media} ${doBlur ? classes.blurImg : null}`}
            />
            {/* TODO Add chapter list here */}
            {/* Keep in mind, you'll likely have to do an API call just to get the link of a chapter
                            NEVERMIND: Chapter links are in the form:
                            https://mangadex.org/chapter/CHAPTERID

                            EZ PZ
                            */}
          </div>
        </CardActionArea>
      </Card>
    </Grid>
  );
}
