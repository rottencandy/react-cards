import { CardType, CardColor, CARD_DATA } from '../lib/card-data'
import './Card.css'

const MAX = CARD_DATA.length;

type CardProps = {
  card: CardType & { flipped: boolean },
  idx: number,
  onClick: (id: number) => void,
}

const Card = ({ card, idx, onClick }: CardProps) => {
  const flipped = card.flipped ? 'flipped' : ''
  const color = card.color === CardColor.Black ? 'black' : 'red'

  return (
    <div
      className={`card ${flipped}`}
      style={{ zIndex: card.flipped ? MAX - idx : idx }}
      onClick={() => onClick(idx)}
    >
      <div className={`front ${color} ${flipped}`}>
        {card.code}
      </div>
      <div className={`back ${flipped}`}/>
    </div>
  )
}

export default Card
