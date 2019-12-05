import React from 'react'

import Board, { Circle } from 'react-legra'

export default function CircleExample() {

  return (
    <Board>
      <Circle center={[3, 3]} radius={2} />
    </Board>
  )
}
