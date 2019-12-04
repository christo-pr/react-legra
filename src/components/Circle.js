
import React, { useEffect, useRef } from 'react'

import Legra from 'legra'

export function Circle (props) {
  const { center, radius, options = {}, bs = 24, ctx = null } = props
  const canvasRef = useRef(null)

  useEffect(() => {
    const cnvs = ctx ? ctx : canvasRef.current ? canvasRef.current : null

    if (cnvs) {
      const ctx = cnvs.getContext('2d');
      const legra = new Legra(ctx, bs);

      // Reset canvas only on basic render
      if (!ctx) {
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
      }

      // Draw the circle
      legra.circle(...center, radius, options)
    }
  }, [canvasRef, props])


  if (ctx) return null

  return (
    <canvas ref={canvasRef} width='500' height='400' style={{ border: '1px solid black'}}></canvas>
  )
}
