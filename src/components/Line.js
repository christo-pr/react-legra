import React, { useEffect, useRef } from 'react'
import Legra from 'legra'

export function Line (props) {
  const { from, to, options = {}, bs = 24, ctx = null } = props
  const canvasRef = useRef(null)
  const width = (from[0] + to[0] + 1) * bs
  const height = (from[1] * bs) + (to[1] * bs) + bs

  useEffect(() => {
    const cnvs = ctx ? ctx : canvasRef.current ? canvasRef.current : null

    if (cnvs) {
      const ctx = cnvs.getContext('2d');
      const legra = new Legra(ctx, bs);

      // Reset canvas only on basic render
      if (!ctx) {
        ctx.clearRect(0, 0, cnvs.width, cnvs.height);
      }

      // Draw the line
      legra.line(...from, ...to, options)
    }
  }, [canvasRef, props])


  if (ctx) return null

  return (
    <canvas ref={canvasRef} width={width} height={height} style={{ border: '1px solid black'}}></canvas>
    // <canvas ref={canvasRef} width='1000' height='1000' style={{ border: '1px solid black'}}></canvas>
  )
}
