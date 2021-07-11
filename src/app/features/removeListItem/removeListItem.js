import React from "react";
import { useSelector, useDispatch } from "react-redux";

import {
  ListItem,
  ListItemText,
  ListItemIcon,
  Checkbox,
} from "@material-ui/core";

import { toggleRemoval } from "../card/cardSlice";

export function RemoveListItem({ seriesId }) {
  const dispatch = useDispatch();

  const seriesTitle = useSelector(
    (state) => state.FeedCard.cards[seriesId].seriesTitle
  );
  const shouldRemove = useSelector(
    (state) => state.FeedCard.cards[seriesId].remove
  );

  const handleToggleRemoval = () => dispatch(toggleRemoval(seriesId));

  return (
    <ListItem>
      <ListItemText primary={seriesTitle} />
      <ListItemIcon>
        <Checkbox checked={shouldRemove} onChange={handleToggleRemoval} />
      </ListItemIcon>
    </ListItem>
  );
}
