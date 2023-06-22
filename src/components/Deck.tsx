import { useState } from 'react'
import { CARD_DATA } from '../lib/card-data'
import Card from './Card'
import './Deck.css'

const Deck = () => {
  const [cards, setCards] = useState(
    CARD_DATA.map(c => ({ ...c, flipped: false })).reverse()
  )

  const onCardClick = (idx: number) => {
    const card = cards[idx];
    card.flipped = !card.flipped
    setCards([...cards])
  }

  return (
    <div className="deck">
      {cards.map((card, i) => (
        <Card
          key={card.id}
          card={card}
          idx={i}
          onClick={onCardClick}
        />
      ))}
    </div>
  )
}

export default Deck
