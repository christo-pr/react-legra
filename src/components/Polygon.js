import { useEffect } from 'react'
import Legra from 'legra'

export function Polygon (props) {
  const { vertices, options = {}, bs = 24, c = null } = props

  useEffect(() => {
    if (!c) return

    const ctx = c.getContext('2d')
    const legra = new Legra(ctx, bs)

    // Draw the polygon
    legra.polygon(vertices, {...options, filled: true})

  }, [vertices, options, bs, c])

  return null
}
