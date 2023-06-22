import { CARD_DATA } from "../lib/card-data"
import Card from "./Card"

const Deck = () => {
  return (
    <Card card={CARD_DATA[0]} flipped />
  )
}

export default Deck
