
import React from 'react'

import Board, { Circle, Ellipse } from 'react-legra'

export default function CircleEllipse() {

  const center = [20, 20]

  return (
    <Board width={1000} height={1000}>
      <Circle center={center} radius={5} />
      <Ellipse center={[20, 20]} vAxis={10} hAxis={15} options={{ color: 'red'}} />
    </Board>
  )
}
