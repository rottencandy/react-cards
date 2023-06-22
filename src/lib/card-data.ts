export const enum CardColor {
  Red,
  Black,
}

export type CardType = {
  id: number,
  code: string,
  color: CardColor,
}

const unicode_cards = [
  // spades
  '🂡', '🂢', '🂣', '🂤', '🂥', '🂦', '🂧', '🂨', '🂩', '🂪', '🂫', '🂭', '🂮',
  // hearts
  '🂱', '🂲', '🂳', '🂴', '🂵', '🂶', '🂷', '🂸', '🂹', '🂺', '🂻', '🂽', '🂾',
  // diamonds
  '🃁', '🃂', '🃃', '🃄', '🃅', '🃆', '🃇', '🃈', '🃉', '🃊', '🃋', '🃍', '🃎',
  // clubs
  '🃑', '🃒', '🃓', '🃔', '🃕', '🃖', '🃗', '🃘', '🃙', '🃚', '🃛', '🃝', '🃞',
]

export const CARD_DATA: CardType[] = unicode_cards.map((code, id) => ({
  id,
  code,
  color: id < 13 || id > 38 ? CardColor.Black : CardColor.Red,
}))
