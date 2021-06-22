import "../index.css";
import { AddCard } from "./features/addCard/addCard";
import { AddDialogue } from "./features/addDialogue/addDialogue";
import { Provider } from "react-redux";
import { CardGen } from "./features/cardGen/cardGen";
import store from "./store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import React from "react";

import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import "@fontsource/roboto";
import makeStyles from "@material-ui/core/styles/makeStyles";

const useStyles = makeStyles({
  addPos: {
    position: "fixed",
    bottom: 0,
    left: "100px",
    marginRight: 10,
    marginBottom: 10,
  },
});

function App() {
  const classes = useStyles();
  let persistor = persistStore(store);
  // useSelector((state) => state.addingFeed)

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <AddDialogue />
        <Box m={"15px"} height="100%">
          <Grid container spacing={3} justify="center" alignItems="center">
            <CardGen />
          </Grid>
          <AddCard />
        </Box>
      </PersistGate>
    </Provider>
  );
}

export default App;
