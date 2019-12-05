import React from 'react'

import Board, { Rectangle } from 'react-legra'

export default function RectangleExample() {

  return (
    <Board>
      <Rectangle start={[.2, 3]} width={8} height={2}/>
    </Board>
  )

}
