import { ChangeEvent, useState } from 'react'
import { Type_Player } from '../../utils/types'

export default function Player({
  name,
  symbol,
  isActive,
  savePlayers
}: Type_Player) {
  const [isEditing, setIsEditing] = useState(false)
  const [playerName, setPlayerName] = useState(name)

  function handleEdit(event: ChangeEvent<HTMLInputElement>) {
    event.preventDefault()
    setPlayerName(event.target.value)
  }

  function toggleEdit() {
    setIsEditing(function (state) {
      return !state
    })
    if (isEditing) savePlayers(playerName, symbol)
  }

  return (
    <li className={isActive ? 'active' : undefined}>
      <span className="player">
        {!isEditing && <span className="player-name">{playerName}</span>}
        {isEditing && (
          <input
            type="text"
            name="player-name"
            value={playerName}
            onChange={handleEdit}
            required
          />
        )}
        <span className="player-symbol">{symbol}</span>
      </span>
      <button onClick={toggleEdit}>{isEditing ? 'Save' : 'Edit'}</button>
    </li>
  )
}
