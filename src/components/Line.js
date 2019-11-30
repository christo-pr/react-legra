import React, { useEffect, useRef } from 'react'
import Legra from 'legra'

export function Line (props) {
  const { from, to, options = {}, bs = 24 } = props
  const canvas = useRef(null)
  const width = (from[0] + to[0] + 1) * bs
  const height = (from[1] * bs) + (to[1] * bs) + bs

  useEffect(() => {
    if (canvas.current) {
      const ctx = canvas.current.getContext('2d');
      const legra = new Legra(ctx, bs);

      legra.line(...from, ...to, options);
    }
  }, [canvas, props])

  return (
    // <canvas ref={canvas} width={width} height={height} style={{ border: '1px solid black'}}></canvas>
    <canvas ref={canvas} width={1000} height={1000} style={{ border: '1px solid black'}}></canvas>
  )
}
