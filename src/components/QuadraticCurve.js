import { useEffect } from 'react'
import Legra from 'legra'

export function QuadraticCurve (props) {
  const { from, to, controlPoint, options = {}, bs = 24, c = null } = props

  useEffect(() => {
    if (!c) return

    const ctx = c.getContext('2d')
    const legra = new Legra(ctx, bs)

    // Draw the quadratic curve
    legra.quadraticCurve(...from, ...controlPoint, ...to, options)
  }, [from, controlPoint, to, options, bs, c])

  return null
}

