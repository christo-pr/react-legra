import React from 'react'
import Board, { QuadraticCurve } from 'react-legra'

export default function QuadraticCurveExample() {
  return (
    <Board>
      <QuadraticCurve
       from={[3,3]}
       to={[22, 14]}
       controlPoint={[8, 30, 18, 1]}
       bs={8} />
    </Board>
  )
}

