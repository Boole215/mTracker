import React from "react";
// Redux import
import { useSelector, useDispatch } from "react-redux";
import { mouseInside, mouseOutside } from "./cardSlice";

// asset import
//import rotundCat from '../../assets/rotundCat.jpg'

// material-ui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";
import CardActionArea from "@material-ui/core/CardActionArea";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles({
  // TODO: Figure out how to make then rectangular cards,
  //       that are taller than they are wide. While
  //       maintaining image scale (clipping is ok)
  root: {
    position: "relative",
    maxWidth: 345,
    width: "15vw",
    height: "40vh",
    objectFit: "fill"
  },
  media: {
    height: "40vh",
    width: "15vw",
    objectFit: "fill"
  },
  blurImg: {
    filter: "blur(3px)"
  },
  font: {
    left: "20%",
    top: "10%",
    position: "absolute",
    fontSize: "larger",
    color: "white",
    fontFamily: "Roboto",
    zIndex: 1
  }
});

// add props to be access stuff
export function FeedCard(props) {
  const dispatch = useDispatch();
  const crntTitle = useSelector(
    state => state.FeedCard.cards[props.id].seriesTitle
  );
  const imageURL = useSelector(
    state => state.FeedCard.cards[props.id].coverLoc
  );
  const desc = useSelector(state => state.FeedCard.cards[props.id].seriesDesc);
  const classes = useStyles();

  const doBlur = useSelector(state =>
    state.FeedCard.cards[props.id].showInfo ? classes.blurImg : null
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
              <Typography
                gutterBottom
                className={classes.font}
                variant="h5"
                component="h5"
              >
                {crntTitle}
              </Typography>
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
