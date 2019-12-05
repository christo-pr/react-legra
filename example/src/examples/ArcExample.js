import React from 'react'
import Board from 'react-legra'

export default function ArcExample() {

  return (
    <Board>
      <Board.Arc center={[5, 3]} vAxis={4} hAxis={5} start={Math.PI} stop={Math.PI * .5} />
      <Board.Arc
        center={[8, 0]}
        options={{ color: 'pink'}}
        vAxis={5}
        hAxis={5}
        start={Math.PI}
        stop={-Math.PI * .5} />
    </Board>
  )
}
