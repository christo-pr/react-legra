import React from 'react'
import Board, { BezierCurve } from 'react-legra'

export default function BezierCurveExample() {
  return (
    <Board>
      <BezierCurve
       from={[3,3]}
       to={[22, 14]}
       controlPointX={[8, 30]}
       controlPointY={[18, 1]}
       bs={8} />
    </Board>
  )
}
