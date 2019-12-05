import React from 'react'

import LineExample from './examples/LineExample'
import LinearPathExample from './examples/LinearPathExample'
import CircleExample from './examples/CircleExample'
// import LineRefRender from './examples/LineRefRender'
// import LineBoard from './examples/LineBoard'
// import ImageBasic from './examples/ImageBasic'
// import RectangleBasic from './examples/Rectangle'
// import PolygonBasic from './examples/PolygonBasic'

export default function App() {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      <LineExample />
      <LinearPathExample />
      <CircleExample />
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
