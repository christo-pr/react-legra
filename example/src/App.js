import React from 'react'

import LineExample from './examples/LineExample'
import LinearPathExample from './examples/LinearPathExample'
import CircleExample from './examples/CircleExample'
import ImageExample from './examples/ImageExample'
import RectangleExample from './examples/RectangleExample'
import PolygonExample from './examples/PolygonExample'

export default function App() {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      <LineExample />
      <LinearPathExample />
      <CircleExample />
      <ImageExample />
      <RectangleExample />
      <PolygonExample />
      {/* <div>
      </div>
      <div>
      </div>
      <div>
        <PolygonBasic />
      </div>  */}
    </div>
  );
}
