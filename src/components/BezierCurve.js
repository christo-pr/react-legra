import { useEffect } from 'react'
import Legra from 'legra'

export function BezierCurve (props) {
  const { from, to, controlPointX, controlPointY, options = {}, bs = 24, c = null } = props

  useEffect(() => {
    if (!c) return

    const ctx = c.getContext('2d')
    const legra = new Legra(ctx, bs)

    // Draw the blizer curve
    legra.bezierCurve(...from, ...controlPointX, ...controlPointY, ...to, options)
  }, [from, controlPointX, controlPointY, to, options, bs, c])

  return null
}
