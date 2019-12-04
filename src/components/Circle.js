
import React, { useEffect, useRef } from 'react'

import Legra from 'legra'

export function Circle (props) {
  const {
    center,
    radius = 10,
    vAxis = null,
    hAxis = null,
    start = null,
    stop = null,
    closed = null,
    options = {},
    bs = 24,
    ctx = null
  } = props
  const canvasRef = useRef(null)
  const functions = { circle: Legra.prototype.circle, arc: Legra.prototype.arc, ellipse: Legra.prototype.ellipse }

  useEffect(() => {
    const cnvs = ctx ? ctx : canvasRef.current ? canvasRef.current : null

    if (cnvs) {
      const ctx = cnvs.getContext('2d');
      const legra = new Legra(ctx, bs);

      // Reset canvas only on basic render
      if (!ctx) {
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
      }

      let fn = 'circle'
      let params = [...center, radius]

      if (vAxis !== null) {
        fn = 'ellipse'
        params = [...center, hAxis, vAxis]
      }

      if (start !== null) {
        fn = 'arc'
        params.push(start, stop, closed)
      }

      params.push(options)

      // Draw the component
      functions[fn].apply(legra, params)
    }
  }, [canvasRef, props])


  if (ctx) return null

  return (
    <canvas ref={canvasRef} width='500' height='400' style={{ border: '1px solid black'}}></canvas>
  )
}
