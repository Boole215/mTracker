import React from "react";

import { useSelector, useDispatch } from "react-redux";

import {
  makeStyles,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  Dialog,
  DialogTitle,
  DialogContentText,
} from "@material-ui/core";

import {
  toggleAutoUpdates,
  setNextUpdateTime,
  setLastUpdateTime,
  setCurrentTime,
  toggleShowSettings,
} from "./settingsCardSlice";
import { formatTime } from "../../services/UtilityFunctions";
import { updateChapterList } from "../card/cardSlice";

const useStyles = makeStyles({
  root: { zIndex: 15, position: "fixed", width: "flex", top: "10vh" },
  innerContainer: { margin: ".3vh" },
  title: { textDecoration: "underline", textAlign: "center" },
});

export function SettingsCard() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const autoUpdatesEnabled = useSelector(
    (state) => state.Settings.shouldAutoUpdate
  );
  const lastUpdateTime = useSelector((state) => state.Settings.lastUpdateTime);

  const currentSeriesIds = Object.keys(
    useSelector((state) => state.FeedCard.cards)
  );

  const showSettings = useSelector((state) => state.Settings.showSettings);

  const handleToggleAutoUpdates = () => {
    if (!autoUpdatesEnabled) {
      currentSeriesIds.map((key) => dispatch(updateChapterList(key)));
      dispatch(setLastUpdateTime());
      dispatch(setCurrentTime());
      dispatch(setNextUpdateTime(true));
    } else {
      dispatch(setNextUpdateTime(false));
    }
    dispatch(toggleAutoUpdates());
  };

  const handleToggleShowSettings = () => dispatch(toggleShowSettings());

  const lastUpdateString = formatTime(lastUpdateTime);
  return (
    <Dialog open={showSettings} onClose={handleToggleShowSettings}>
      <DialogTitle>Settings</DialogTitle>
      <DialogContentText>
        <List>
          <ListItem>
            <ListItemText
              primary={"Enable auto-updates"}
              secondary={`Last Update: ${lastUpdateString}`}
            />
            <ListItemIcon>
              <Checkbox
                checked={autoUpdatesEnabled}
                onChange={handleToggleAutoUpdates}
              />
            </ListItemIcon>
          </ListItem>
        </List>
      </DialogContentText>
    </Dialog>
  );

  /*
  // TODO experiment with onClickAway listener sometime
  return (
    <Collapse in={showSettings}>
      <Card className={classes.root} elevation={10}>
        <Typography variant={"h6"} align="center" gutterBottom={true}>
          Settings
        </Typography>
        <List>
          <ListItem>
            <ListItemText
              primary={"Enable auto-updates"}
              checked={autoUpdatesEnabled}
              onChange={handleToggleAutoUpdates}
            />
            <ListItemIcon>
              <Checkbox
                checked={autoUpdatesEnabled}
                onChange={handleToggleAutoUpdates}
              />
            </ListItemIcon>
          </ListItem>
        </List>
      </Card>
    </Collapse>
  );
*/
}
