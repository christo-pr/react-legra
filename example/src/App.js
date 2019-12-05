import React from 'react'

import LineExample from './examples/LineExample'
import LinearPathExample from './examples/LinearPathExample'
import CircleExample from './examples/CircleExample'
import ImageExample from './examples/ImageExample'
// import RectangleBasic from './examples/Rectangle'
// import PolygonBasic from './examples/PolygonBasic'

export default function App() {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      <LineExample />
      <LinearPathExample />
      <CircleExample />
      <ImageExample />
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
