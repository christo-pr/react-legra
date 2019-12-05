import React from 'react'

import Board, { LinearPath } from 'react-legra'

export default function LinearPathBasic() {

  const points = [[1, 1], [4, 1], [1, 4], [4, 4]]

  return (
    <Board>
      <LinearPath points={points} />
    </Board>
  )

}
