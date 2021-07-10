import "../index.css";

// Core dependencies
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store";

// Custom Components
import { AddDialogue } from "./features/addDialogue/addDialogue";
import { CardGen } from "./features/cardGen/cardGen";
import { LoadingScreen } from "./features/loadingScreen/loadingScreen";
import { SettingsCard } from "./features/settingsCard/settingsCard";
import { ButtonSpeedDial } from "./features/buttonSpeedDial/buttonSpeedDial";
import { Timekeeper } from "./features/timekeeper/timekeeper";
import { RemoveCardDialogue } from "./features/removeCardDialogue/removeCardDialogue";

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
  let persistor = persistStore(store);
  const classes = useStyles();

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <Timekeeper />
        <SettingsCard />
        <RemoveCardDialogue />
        <AddDialogue />
        <Box m={"15"} height="100%" className={classes.cardContainer}>
          <Grid container spacing={2} justify="center" alignItems="center">
            <CardGen />
          </Grid>
          <ButtonSpeedDial />
        </Box>
      </PersistGate>
    </Provider>
  );
}

export default App;
