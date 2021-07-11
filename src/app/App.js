import "../index.css";

// Core dependencies
import React from "react";
import { useSelector } from "react-redux";

// Custom Components
import { AddDialogue } from "./features/addDialogue/addDialogue";
import { CardGen } from "./features/cardGen/cardGen";
import { SettingsCard } from "./features/settingsCard/settingsCard";
import { ButtonSpeedDial } from "./features/buttonSpeedDial/buttonSpeedDial";
import { Timekeeper } from "./features/timekeeper/timekeeper";
import { RemoveCardDialogue } from "./features/removeCardDialogue/removeCardDialogue";
import { TutorialCard } from "./features/tutorialCard/tutorialCard";

// Material UI
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core";
import "@fontsource/roboto";

const useStyles = makeStyles({
  cardContainer: {
    zIndex: 0,
  },
});

function App() {
  const classes = useStyles();
  const showTutorial = useSelector((state) => state.FeedCard.showTutorial);

  return (
    <div>
      <Timekeeper />
      <SettingsCard />
      <RemoveCardDialogue />
      <AddDialogue />
      <Box m={"15"} height="100%" className={classes.cardContainer}>
        <Grid container spacing={2} justify="center" alignItems="center">
          {showTutorial && <TutorialCard />}
          <CardGen />
        </Grid>
        <ButtonSpeedDial />
      </Box>
    </div>
  );
}

export default App;
