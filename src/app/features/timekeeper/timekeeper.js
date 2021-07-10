import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateChapterList } from "../card/cardSlice";
import {
  setLastUpdateTime,
  setNextUpdateTime,
  setCurrentTime,
} from "../settingsCard/settingsCardSlice";

export function Timekeeper() {
  const dispatch = useDispatch();

  const nextUpdateTime = useSelector(
    (state) => state.Settings.nextUpdateAtTime
  );
  const currentTime = useSelector((state) => state.Settings.currentTime);

  const autoUpdateOn = useSelector((state) => state.Settings.shouldAutoUpdate);
  const handleUpdateCurrentTime = () => dispatch(setCurrentTime());

  const currentSeriesIds = Object.keys(
    useSelector((state) => state.FeedCard.cards)
  );

  if (autoUpdateOn) {
    if (currentTime > nextUpdateTime) {
      currentSeriesIds.map((key) => dispatch(updateChapterList(key)));
      dispatch(setLastUpdateTime());
      dispatch(setNextUpdateTime(true));
    }
    // Theoretically, by updating currentTime, the selector for currentTime will trigger this
    // component to re-render and thereby executing this again?
    setTimeout(handleUpdateCurrentTime, 60000);
  }

  /*
  useEffect(() => {
    if (autoUpdateOn && nextUpdateTime != null) {
      console.log(`Next Update Time: ${nextUpdateTime}`);
      console.log(`Current time: ${Date.now()}`);
      if (nextUpdateTime < Date.now()) {
        currentSeriesIds.forEach((key) => {
          dispatch(updateChapterList(key));
        });
        dispatch(setLastUpdateTime());
      }
    }
  });
*/
  return <div id="Timekeeper dummy"></div>;
}
