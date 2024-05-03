import { Type_Players, Type_Turn } from './types'

export const PLAYERS: Type_Players = {
  X: 'Player 1',
  O: 'Player 2'
}

export const board: (string | null)[][] = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

export const WINNING_COMBINATIONS = [
  [
    { row: 0, column: 0 },
    { row: 0, column: 1 },
    { row: 0, column: 2 }
  ],
  [
    { row: 1, column: 0 },
    { row: 1, column: 1 },
    { row: 1, column: 2 }
  ],
  [
    { row: 2, column: 0 },
    { row: 2, column: 1 },
    { row: 2, column: 2 }
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 0 },
    { row: 2, column: 0 }
  ],
  [
    { row: 0, column: 1 },
    { row: 1, column: 1 },
    { row: 2, column: 1 }
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 2 },
    { row: 2, column: 2 }
  ],
  [
    { row: 0, column: 0 },
    { row: 1, column: 1 },
    { row: 2, column: 2 }
  ],
  [
    { row: 0, column: 2 },
    { row: 1, column: 1 },
    { row: 2, column: 0 }
  ]
]

export function getActivePlayer(turns: Type_Turn[]) {
  return turns.length > 0 && turns[0].player === 'X' ? 'O' : 'X'
}

export function getBoard(turns: Type_Turn[]) {
  const gameBoard = [
    ...board.map(function (row) {
      return [...row]
    })
  ]
  for (const turn of turns) {
    const { square, player } = turn
    const { row, col } = square
    gameBoard[row][col] = player
  }
  return gameBoard
}

export function getWinner(
  gameBoard: (string | null)[][],
  players: { [key: string]: string }
) {
  for (const combination of WINNING_COMBINATIONS) {
    const firstSquare = gameBoard[combination[0].row][combination[0].column]
    const secondSquare = gameBoard[combination[1].row][combination[1].column]
    const thirdSquare = gameBoard[combination[2].row][combination[2].column]
    if (
      firstSquare &&
      firstSquare === secondSquare &&
      firstSquare === thirdSquare
    )
      return players[firstSquare]
  }
}
