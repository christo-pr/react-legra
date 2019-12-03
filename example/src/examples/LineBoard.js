import React from 'react'
import Board, { Line } from 'react-legra'

function LineBoard() {

  return (
    <div>
      <Board>
        <Line from={[5, 5]} to={[0, 0]} options={{ color: 'yellow' }}/>
        <Line from={[0, 5]} to={[5, 0]} options={{ color: 'red' }}/>
        <Line from={[0, 7]} to={[7, 7]} options={{ color: 'pink' }}/>
      </Board>
    </div>
  )
}

export default LineBoard
