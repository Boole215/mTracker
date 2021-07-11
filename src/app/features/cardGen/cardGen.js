import React from "react";
import { FeedCard } from "../card/card";
import { useSelector } from "react-redux";

export function CardGen() {
  const currentCards = Object.keys(
    useSelector((state) => state.FeedCard.cards)
  );
  // This is moot since map won't generate anything if there's nothing in Cards
  // const cardLen = useSelector((state) => state.FeedCard.cardCount);

  return (
    // If there's a nonzero amount of cards, then render them
    currentCards.map((key) => <FeedCard id={key} />)
  );
}
