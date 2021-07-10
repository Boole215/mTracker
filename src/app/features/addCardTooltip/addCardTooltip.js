import React from "react";
import { Tooltip, IconButton, Typography, makeStyles } from "@material-ui/core";
import HelpIcon from "@material-ui/icons/Help";

const useStyle = makeStyles({
  myTypography: {
    fontFamily: "Roboto",
    fontSize: "1.5vh",
  },
  mySubTypography: {
    fontFamily: "Roboto",
    fontSize: "1.2vh",
  },
});

export function AddCardTooltip() {
  const classes = useStyle();
  return (
    <Tooltip
      title={
        <React.Fragment>
          <Typography className={classes.myTypography}>
            What series ID?
          </Typography>
          <Typography className={classes.mySubTypography}>
            {
              "A Series' ID can be found in the URL of a Mangadex series page after '/title/'."
            }
            <br />
            {"For example, Ijiranaide Nagatoro's ID is: "}
            <br />
            {"d86cf65b-5f6c-437d-a0af-19a31f94ec55"}
          </Typography>
        </React.Fragment>
      }
      placement="top"
      enterTouchDelay={0}
      arrow
    >
      <IconButton aria-label="help-tooltip">
        <HelpIcon fontSize={"small"} />
      </IconButton>
    </Tooltip>
  );
}