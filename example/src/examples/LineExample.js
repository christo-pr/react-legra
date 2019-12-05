import React from 'react'

import Board, { Line } from 'react-legra'

function LineBasicExample () {

  return (
    <Board>
      <Line from={[1, 1]} to={[3, 3]} options={{ color: 'green' }} />
    </Board>
  )
}

export default LineBasicExample
