import { useState } from "react"
import { CARD_DATA } from "../lib/card-data"
import Card from "./Card"
import './Deck.css'

const Deck = () => {
  const [cards] = useState(
    CARD_DATA.map(c => ({ ...c })).reverse()
  )

  return (
    <>
      {cards.map((c, i) => (
        <Card key={c.id} card={c} idx={i} flipped />
      ))}
    </>
  )
}

export default Deck
