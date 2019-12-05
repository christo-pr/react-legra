import React from 'react'

import Board, { Polygon } from 'react-legra'

export default function PolygonExample() {

  const vertices = [
    [0, 0],
    [0, 7],
    [7, 0],
    [7, 7]
 ]

  return (
    <Board>
      <Polygon vertices={vertices} options={{ color: 'yellow' }} />
    </Board>
  )

}
