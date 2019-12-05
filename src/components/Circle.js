import { useEffect } from 'react'
import Legra from 'legra'

export function Circle (props) {
  const { center, radius = 10, options = {}, bs = 24, c = null } = props

  useEffect(() => {
    if (!c) return

    const ctx = c.getContext('2d')
    const legra = new Legra(ctx, bs)

    // Draw the circle
    legra.circle(...center, radius, options)
  }, [center, radius, options, bs, c])

  return null
}
