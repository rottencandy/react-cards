import { useState, useMemo } from 'react'
import { CARD_DATA } from '../lib/card-data'
import { shuffleArray, sleep } from '../lib/utils'
import Card from './Card'
import './Deck.css'

// duration of flip animation for each card during reset (in ms)
const FLIP_DURATION = 50

const Deck = () => {
  const [cards, setCards] = useState(
    CARD_DATA.map(c => ({ ...c, flipped: false })).reverse()
  )

  const onCardClick = (idx: number) => {
    const card = cards[idx]
    card.flipped = !card.flipped
    setCards([...cards])
  }

  const hideCards = async () => {
    for (let i = 0; i < cards.length; i++) {
      const card = cards[i]
      if (card.flipped) {
        await sleep(FLIP_DURATION)
        card.flipped = false
        setCards([...cards])
      }
    }
  }

  const shuffleCards = async () => {
    await hideCards()
    setCards(c => {
      shuffleArray(c)
      return [...c]
    })
  }

  const sortCards = async () => {
    await hideCards()
    setCards(c => {
      c.sort((c1, c2) => c2.id - c1.id)
      return [...c]
    })
  }

  const openCount = useMemo(
    () => cards.reduce(
      (acc, card) => card.flipped ? acc + 1 : acc, 0
    ), [cards]
  )

  return (
    <>
      <p>{openCount} / {cards.length}</p>

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

      <div className="buttons">
        <button onClick={shuffleCards}>
          Shuffle
        </button>

        <button onClick={sortCards}>
          Sort
        </button>
      </div>
    </>
  )
}

export default Deck
