
import React from 'react'

import Board, { Circle } from 'react-legra'

export default function CircleExample() {

  const center = [20, 20]

  return (
    <Board width={1000} height={1000}>
      <Circle center={center} vAxis={12} hAxis={12} start={Math.PI} stop={Math.PI * 1.5} closed={false} options={{ color: 'yellow' }}/>
      <Circle center={center} radius={5} />
      <Circle center={center} vAxis={7} hAxis={10} options={{ color: 'red' }}/>
      <Circle center={center} vAxis={12} hAxis={12} start={0} stop={Math.PI * .5} closed={false} options={{ color: 'green' }}/>
    </Board>
  )
}
