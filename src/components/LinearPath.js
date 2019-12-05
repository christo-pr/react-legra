import { useEffect } from 'react'
import Legra from 'legra'

export function LinearPath (props) {
  const { points, options = {}, bs = 24, c = null } = props

  useEffect(() => {
    if (!c) return

    const ctx = c.getContext('2d')
    const legra = new Legra(ctx, bs)

    // Draw the linear path
    legra.linearPath(points, options)

  }, [points, options, bs, c])

  return null

}
