// React/Redux imports
import React from "react";
import { useDispatch, useSelector } from "react-redux";

//Custom Component imports
import { toggleShowActions } from "./buttonSpeedDialSlice";
import { openAddDialogue } from "../addCard/addCardSlice";
import { toggleShowSettings } from "../settingsCard/settingsCardSlice.js";
import { updateChapterList } from "../card/cardSlice";
import { setLastUpdateTime } from "../settingsCard/settingsCardSlice";
import { toggleRemoveDialogue } from "../removeCardDialogue/removeCardDialogueSlice";

// Material-ui imports
import { makeStyles } from "@material-ui/core";
import SpeedDial from "@material-ui/lab/SpeedDial";
import SpeedDialIcon from "@material-ui/lab/SpeedDialIcon";
import SpeedDialAction from "@material-ui/lab/SpeedDialAction";
import AddIcon from "@material-ui/icons/Add";
import SettingsIcon from "@material-ui/icons/Settings";
import CachedIcon from "@material-ui/icons/Cached";
import GitHubIcon from "@material-ui/icons/GitHub";
import DeleteIcon from "@material-ui/icons/Delete";

const useStyles = makeStyles({
  speedDial: {
    position: "fixed",
    right: "1vw",
    bottom: "4vh",
  },
});

export function ButtonSpeedDial() {
  const classes = useStyles();
  const dispatch = useDispatch();

  const toggleHandler = () => dispatch(toggleShowActions());
  const shouldBeOpen = useSelector(
    (state) => state.actionSpeedDial.shouldShowActions
  );

  const handleShowSettings = () => {
    dispatch(toggleShowSettings());
  };
  const handleShowAddCard = () => {
    dispatch(openAddDialogue());
  };

  const handleUpdateChapters = () => {
    dispatch(updateChapterList());
    dispatch(setLastUpdateTime());
  };

  const handleGitClick = () =>
    (window.location.href = "https://github.com/Boole215/mTracker");

  const handleShowRemoveDialogue = () => {
    dispatch(toggleRemoveDialogue());
  };

  return (
    <div className={classes.speedDial}>
      <SpeedDial
        ariaLabel="SpeedDial"
        icon={<SpeedDialIcon />}
        open={shouldBeOpen}
        onOpen={toggleHandler}
        onClose={toggleHandler}
        hidden={false}
      >
        <SpeedDialAction
          icon={<GitHubIcon />}
          tooltipTitle="Check Out The mTracker Repo"
          onClick={handleGitClick}
        />
        <SpeedDialAction
          icon={<SettingsIcon />}
          tooltipTitle="Configure Settings"
          onClick={handleShowSettings}
        />
        <SpeedDialAction
          icon={<DeleteIcon />}
          tooltipTitle="Remove Card"
          onClick={handleShowRemoveDialogue}
        />
        <SpeedDialAction
          icon={<AddIcon />}
          tooltipTitle="Add Card"
          onClick={handleShowAddCard}
        />

        <SpeedDialAction
          icon={<CachedIcon />}
          tooltipTitle="Update Chapters"
          onClick={handleUpdateChapters}
        />
      </SpeedDial>
    </div>
  );
}
