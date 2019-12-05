import { useEffect } from 'react'
import Legra from 'legra'

export function Line (props) {
  const { from, to, options = {}, bs = 24, c = null } = props

  useEffect(() => {
    if (!c) return

    const ctx = c.getContext('2d')
    const legra = new Legra(ctx, bs)

    // Draw the line
    legra.line(...from, ...to, options)
  }, [from, to, c])

  return null
}
