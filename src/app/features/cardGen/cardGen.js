import React from "react"
import { FeedCard } from "../card/card"
import { useSelector } from "react-redux";

export function CardGen(){
    const currentCards = Object.keys(useSelector((state) => state.FeedCard.cards))
    const cardLen = useSelector((state) => state.FeedCard.cardCount)

    return(
        // If there's a nonzero amount of cards, then render them
        cardLen > 0 ?
            currentCards.map(key =>
                <FeedCard id={key}/>) : null


    )
}