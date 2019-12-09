import React from 'react'

import LineExample from './examples/LineExample'
import LinearPathExample from './examples/LinearPathExample'
import CircleExample from './examples/CircleExample'
import ImageExample from './examples/ImageExample'
import RectangleExample from './examples/RectangleExample'
import PolygonExample from './examples/PolygonExample'
import EllipseExample from './examples/EllipseExample'
import ArcExample from './examples/ArcExample'
import BezierCurveExample from './examples/BezierCurveExample'
import QuadraticCurveExample from './examples/QuadraticCurveExample'

export default function App() {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      <LineExample />
      <LinearPathExample />
      <CircleExample />
      <ImageExample />
      <RectangleExample />
      <PolygonExample />
      <EllipseExample />
      <ArcExample />
      <BezierCurveExample />
      <QuadraticCurveExample />
    </div>
  )
}
