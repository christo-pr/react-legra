import { useEffect, useRef } from 'react'
import Legra from 'legra'

export function LinearPath (props) {
  const { points, options = {}, bs = 24, c = null } = props
  const canvasRef = useRef(null)

  useEffect(() => {
    if (!c) return

    const ctx = c.getContext('2d')
    const legra = new Legra(ctx, bs)

    // Draw the linear path
    legra.linearPath(points, options)

  }, [canvasRef, props])

  return null

}
