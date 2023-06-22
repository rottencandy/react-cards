import { useState } from 'react';
import { CardType, CardColor } from '../lib/card-data';
import './Card.css'

const Card = ({ card, idx }: { card: CardType, idx: number, flipped?: boolean }) => {
  const [flip, setFlip] = useState(false);
  const flipped = flip ? 'flipped' : '';
  const color = card.color === CardColor.Black ? 'black' : 'red';

  return (
    <div className={`card ${flipped}`} style={{ zIndex: flip ? 52 - idx : idx }} onClick={() => setFlip(x => !x)}>
      <div className={`front ${color} ${flipped}`}>
        {card.code}
      </div>
      <div className={`back ${flipped}`}/>
    </div>
  )
}

export default Card
