import { useState } from 'react';
import { CardType, CardColor, CARD_DATA } from '../lib/card-data';
import './Card.css'

const MAX = CARD_DATA.length;

type CardProps = {
  card: CardType,
  idx: number,
  flipped?: boolean 
}

const Card = ({ card, idx }: CardProps) => {
  const [flip, setFlip] = useState(false)
  const flipped = flip ? 'flipped' : ''
  const color = card.color === CardColor.Black ? 'black' : 'red'

  return (
    <div
      className={`card ${flipped}`}
      style={{ zIndex: flip ? MAX - idx : idx }}
      onClick={() => setFlip(x => !x)}
    >
      <div className={`front ${color} ${flipped}`}>
        {card.code}
      </div>
      <div className={`back ${flipped}`}/>
    </div>
  )
}

export default Card
