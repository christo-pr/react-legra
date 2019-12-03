import React, { useRef, useEffect } from 'react'

import Legra from 'legra'

export function Rectangle (props) {
  const { start, width, height, bs = 24, ctx = null } = props
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

      // Draw the rectangle
      legra.rectangle(...start, width, height)
    }
  }, [canvasRef, props])


  if (ctx) return null

  return (
    <canvas ref={canvasRef} width={width * 100} height={height * 100} style={{ border: '1px solid black'}}></canvas>
    // <canvas ref={canvasRef} width='1000' height='1000' style={{ border: '1px solid black'}}></canvas>
  )
}
