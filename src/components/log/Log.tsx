import { Type_Turn } from '../../utils/types'

export default function Log({ turns }: { turns: Type_Turn[] }) {
  return (
    <ol id="log">
      {turns.map(function (turn) {
        const { row, col } = turn.square
        return (
          <li key={`${row}${col}`}>
            {turn.player} selected {row}, {col}
          </li>
        )
      })}
    </ol>
  )
}
