import { useEffect } from 'react'
import Legra from 'legra'

export function Ellipse (props) {
  const { center, vAxis, hAxis, options = {}, bs = 24, c = null } = props

  useEffect(() => {
    if (!c) return

    const ctx = c.getContext('2d')
    const legra = new Legra(ctx, bs)

    // Draw the ellipse
    legra.ellipse(...center, hAxis, vAxis, options)

  }, [center, vAxis, hAxis, bs, c])

  return null
}
