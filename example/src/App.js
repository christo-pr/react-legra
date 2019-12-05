import React from 'react'

import LineExample from './examples/LineExample'
import LinearPathExample from './examples/LinearPathExample'
// import LineRefRender from './examples/LineRefRender'
// import LineBoard from './examples/LineBoard'
// import ImageBasic from './examples/ImageBasic'
// import RectangleBasic from './examples/Rectangle'
// import Circle from './examples/Circle'
// import PolygonBasic from './examples/PolygonBasic'

export default function App() {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      <LineExample />
      <LinearPathExample />
      {/* <div>
      </div>
      <div>
        <Circle />
      </div>
      <div>
        <PolygonBasic />
      </div>  */}
    </div>
  );
}
