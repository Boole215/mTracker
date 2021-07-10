// React / Redux imports
import React from "react";
import { useSelector, useDispatch } from "react-redux";

// Material-ui imports
import {
  makeStyles,
  Button,
  List,
  ListItem,
  Dialog,
  DialogActions,
  DialogContentText,
  DialogTitle,
  Fade,
  Typography,
} from "@material-ui/core";

import { RemoveListItem } from "../removeListItem/removeListItem";
import { removeSeries } from "../card/cardSlice";
import { toggleRemoveDialogue } from "./removeCardDialogueSlice";
import { clearRemove } from "../card/cardSlice";

export function RemoveCardDialogue() {
  const dispatch = useDispatch();

  const handleRemoveCards = () => dispatch(removeSeries());

  const currentCards = Object.keys(
    useSelector((state) => state.FeedCard.cards)
  );
  const remove = useSelector((state) => state.FeedCard.remove);

  const showDialogue = useSelector((state) => state.RemoveDialogue.shouldShow);

  const handleToggleDialogue = () => {
    if (showDialogue) {
      dispatch(clearRemove());
    }
    dispatch(toggleRemoveDialogue());
  };
  return (
    <Dialog open={showDialogue} onClose={handleToggleDialogue}>
      <DialogTitle>Remove Card</DialogTitle>
      <DialogContentText>
        <List>
          {currentCards.map((key) => (
            <RemoveListItem seriesId={key} />
          ))}
          {currentCards.length === 0 && (
            <ListItem>
              <Fade in={true}>
                <Typography> Nothing to remove...</Typography>
              </Fade>
            </ListItem>
          )}
        </List>
      </DialogContentText>
      <DialogActions>
        <Button disabled={remove.length === 0} onClick={handleRemoveCards}>
          Remove
        </Button>
      </DialogActions>
    </Dialog>
  );
}
