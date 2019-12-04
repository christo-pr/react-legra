import React from 'react'

import LineBasic from './examples/LineBasic'
import LineRefRender from './examples/LineRefRender'
import LineBoard from './examples/LineBoard'
import ImageBasic from './examples/ImageBasic'
import RectangleBasic from './examples/Rectangle'
import LinearPathBasic from './examples/LinearPathBasic'

export default function App() {

  return (
    <div style={{ display: 'flex', flexWrap: 'wrap'}}>
      <div>
        <LineBasic />
      </div>
      <div>
        <LineRefRender />
      </div>
      <div>
        <LineBoard />
      </div>
      <div>
        <LinearPathBasic />
      </div>
    </div>
  );
}
