import { CARD_DATA } from "../lib/card-data"
import Card from "./Card"

const Deck = () => {
  return (
    <>
      {CARD_DATA.map((c, i) => (
        <Card card={c} idx={i} flipped />
      ))}
    </>
  )
}

export default Deck
