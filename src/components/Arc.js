import { useEffect } from 'react'
import Legra from 'legra'

export function Arc (props) {
  const { center, vAxis, hAxis, start, stop, closed = false, options = {}, bs = 24, c = null } = props

  useEffect(() => {
    if (!c) return

    const ctx = c.getContext('2d')
    const legra = new Legra(ctx, bs)

    // Draw the circle
    legra.arc(...center, hAxis, vAxis, start, stop, closed, options)
  }, [center, vAxis, hAxis, start, stop, options, bs, c])

  return null
}
