import { Type_Game } from '../../utils/types'

export default function GameOver({ winner, hasDraw, resetGame }: Type_Game) {
  return (
    <div id="game-over">
      <h2>Game Over!</h2>
      {winner && <p>{winner} won!</p>}
      {hasDraw && <p>It's a draw</p>}
      <p>
        <button onClick={resetGame}>Rematch</button>
      </p>
    </div>
  )
}
