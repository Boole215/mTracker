import React from "react";

// assets
import rotundCat from "../../../assets/rotundCat.jpg";
// material-ui imports
import makeStyles from "@material-ui/core/styles/makeStyles";
import { Fade, Grid, Typography, Paper } from "@material-ui/core";

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

    MuiButtonBase: { disableRipple: true },
    "&:hover": {
      pointerEvents: "none",
    },
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
  backgroundImg: {
    height: "100%",
    width: "100%",
    position: "absolute",
    backgroundSize: "cover",
    backgroundImage: `url(${rotundCat})`,
    filter: "blur(2px) brightness(80%)",
    zIndex: 0,
  },

  seriesTitle: {
    marginLeft: "2vw",
    paddingTop: "4vh",
    paddingRight: "2.5vw",
    position: "relative",
    fontSize: "2vh",
    color: "white",
    fontFamily: "Roboto",
    zIndex: 1,
  },
  seriesDesc: {
    width: "auto",
    marginLeft: "1vw",
    marginRight: "1vw",
    //marginLeft: "5.25vw",
    paddingTop: "4vh",
    //marginRight: "8.5vw",
    position: "relative",
    fontSize: "1.5vh",
    color: "white",
    fontFamily: "Roboto",
    zIndex: 2,
    userSelect: "text",
  },
  myList: {
    zIndex: 2,
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
export function TutorialCard() {
  const titleSize = "1.2vh";

  const classes = useStyles();
  const innerFont = makeStyles({
    dynamicTitle: {
      fontSize: `${titleSize}vh!important`,
    },
  });
  const innerClasses = innerFont();

  return (
    <Grid item={true} xs={4} sm={3} md={3} lg={2} xl={2}>
      <Fade in={true} timeout={{ enter: 600 }}>
        <Paper elevation={6} className={classes.root}>
          <div className={classes.backgroundImg}></div>
          <Typography
            className={`${classes.seriesTitle} ${innerClasses.dynamicTitle}`}
            variant="h5"
            component="h5"
            align="center"
          >
            Get Started
          </Typography>
          <Typography align="center" className={classes.seriesDesc}>
            Use the button on the bottom right to use the app. Series ID's can
            be found in Mangadex manga entry URL's.
            <br />
            Here's a series ID to start you off: <br />
            f8e294c0-7c11-4c66-bdd7-4e25df52bf69
          </Typography>
        </Paper>
      </Fade>
    </Grid>
  );
}
