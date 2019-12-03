import React, { useState, useRef, useEffect } from 'react'

import { Line } from 'react-legra'

function LineRefRender() {
  const cnvsRef = useRef(null)
  const [customCanvas, setCustomCanvas] = useState(null)
  const A = [[5, 5], [0, 0]]
  const B = [[0, 5], [5, 0]]

  useEffect(() => {
    if (cnvsRef.current) {
      setCustomCanvas(cnvsRef.current)
    }
  }, [cnvsRef])

  return (
    <div>
      <div className="canvas">
        <h3>Here's the canvas</h3>
        <canvas ref={cnvsRef} style={{ 'border': '1px dotted black'}}></canvas>
      </div>
      <Line
        ctx={customCanvas}
        from={A[0]}
        to={A[1]}
        options={{ color: 'red' }}
      />
      <Line
        ctx={customCanvas}
        from={B[0]}
        to={B[1]}
        options={{ color: 'yellow' }}
      />
    </div>
  )
}

export default LineRefRender
