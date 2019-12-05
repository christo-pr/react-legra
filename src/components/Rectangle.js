import React, { useEffect } from 'react'
import Legra from 'legra'

export function Rectangle (props) {
  const { start, width, height, bs = 24, options = {}, c = null } = props

  useEffect(() => {
    if (!c) return

    const ctx = c.getContext('2d')
    const legra = new Legra(ctx, bs)

    // Draw the rectangle
    legra.rectangle(...start, width, height, options)

  }, [start, width, height, options, bs, c])

  return null
}
