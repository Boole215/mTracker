import "../index.css";

// Core dependencies
import React from "react";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import store from "./store";

// Custom Components
import { AddCard } from "./features/addCard/addCard";
import { AddDialogue } from "./features/addDialogue/addDialogue";
import { CardGen } from "./features/cardGen/cardGen";
import { LoadingScreen } from "./features/loadingScreen/loadingScreen";
import { UpdateChaptersButton } from "./features/updateChaptersButton/updateChaptersButton.js";
//import Notification from "react-web-notification/src/components/Notification";

// Material UI
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "@fontsource/roboto";

function App() {
  let persistor = persistStore(store);

  return (
    <Provider store={store}>
      <PersistGate loading={<LoadingScreen />} persistor={persistor}>
        <AddDialogue />
        <Box m={"15px"} height="100%">
          <Grid container spacing={3} justify="center" alignItems="center">
            <CardGen />
          </Grid>
          <AddCard />
          <UpdateChaptersButton />
        </Box>
      </PersistGate>
    </Provider>
  );
}

export default App;
