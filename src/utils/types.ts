export type Type_Players = {
  [key: string]: string
}

export type Type_Board = {
  gameBoard: (string | null)[][]
  togglePlayer: (row: number, col: number) => void
}

export type Type_Game = {
  winner: string | undefined
  hasDraw: boolean | undefined
  resetGame: () => void
}

export type Type_Player = {
  name: string
  symbol: string
  isActive: boolean
  savePlayers: (name: string, symbol: string) => void
}

export type Type_Turn = {
  square: {
    row: number
    col: number
  }
  player: string
}
