import React, { useRef, useEffect } from 'react'

import Legra from 'legra'

export function RLImage(props) {
  const { src, ctx = null, bs = 15 } = props;
  const canvasRef = useRef(null);

  useEffect(() => {
    if (canvasRef.current) {
      const cnvs = ctx ? ctx : canvasRef.current ? canvasRef.current : null
      const img = new Image(700, 700)
      img.src = src

      if (cnvs) {
        const ctx = cnvs.getContext('2d');
        const legra = new Legra(ctx, bs);

        // Reset canvas only on basic render
        if (!ctx) {
          ctx.clearRect(0, 0, cnvs.width, cnvs.height);
        }

        img.onload = function(){
          // Draw the line
          legra.drawImage(img, [0, 0])
        }
      }
    }
  }, []);

  return (
    <canvas ref={canvasRef} width={1000} height={1000} style={{ border: '1px solid black'}}></canvas>
  );
}
