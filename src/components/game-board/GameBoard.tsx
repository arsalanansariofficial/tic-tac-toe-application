import { Type_Board } from '../../utils/types'

export default function GameBoard({ gameBoard, togglePlayer }: Type_Board) {
  return (
    <ol id="game-board">
      {gameBoard.map(function (row, rowIndex) {
        return (
          <li key={rowIndex}>
            <ol>
              {row.map(function (symbol, colIndex) {
                return (
                  <li key={colIndex}>
                    <button
                      onClick={togglePlayer.bind(null, rowIndex, colIndex)}
                      disabled={Boolean(symbol)}
                    >
                      {symbol}
                    </button>
                  </li>
                )
              })}
            </ol>
          </li>
        )
      })}
    </ol>
  )
}
