import React from 'react'

import Board from 'react-legra'

function LineBasicExample () {

  return (
    <Board>
      <Board.Line from={[1, 1]} to={[3, 3]} options={{ color: 'green' }} />
    </Board>
  )
}

export default LineBasicExample
