import React from 'react'
import Board from 'react-legra'

export default function EllipseExample() {

  return (
    <Board>
      <Board.Ellipse center={[3.6, 3.6]} vAxis={2} hAxis={3} />
    </Board>
  )
}
