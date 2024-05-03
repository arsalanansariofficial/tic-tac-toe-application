import { useState } from 'react'
import Log from './components/log/Log'
import Player from './components/player/Player'
import GameOver from './components/game-over/GameOver'
import { Type_Players, Type_Turn } from './utils/types'
import GameBoard from './components/game-board/GameBoard'
import { PLAYERS, getActivePlayer, getBoard, getWinner } from './utils/Utils'

export default function App() {
  const [turns, setTurns] = useState<Type_Turn[]>([])
  const [players, setPlayers] = useState<Type_Players>(PLAYERS)

  const gameBoard = getBoard(turns)
  const activePlayer = getActivePlayer(turns)
  const winner = getWinner(gameBoard, players)
  const hasDraw = turns.length === 9 && !winner

  function resetGame() {
    setTurns([])
  }

  function savePlayers(name: string, symbol: string) {
    setPlayers(function (players) {
      return {
        ...players,
        [symbol]: name
      }
    })
  }

  function togglePlayer(rowIndex: number, colIndex: number) {
    setTurns(function (previousTurns) {
      return [
        {
          square: {
            row: rowIndex,
            col: colIndex
          },
          player: getActivePlayer(previousTurns)
        },
        ...previousTurns
      ]
    })
  }

  return (
    <main>
      <div id="game-container">
        <ol id="players" className="highlight-player">
          <Player
            name="Player 1"
            symbol="X"
            isActive={activePlayer === 'X'}
            savePlayers={savePlayers}
          />
          <Player
            name="Player 2"
            symbol="O"
            isActive={activePlayer === 'O'}
            savePlayers={savePlayers}
          />
        </ol>
        {(winner || hasDraw) && (
          <GameOver winner={winner} hasDraw={hasDraw} resetGame={resetGame} />
        )}
        <GameBoard togglePlayer={togglePlayer} gameBoard={gameBoard} />
      </div>
      <Log turns={turns} />
    </main>
  )
}
