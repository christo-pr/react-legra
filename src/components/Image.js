import { useEffect } from 'react'
import Legra from 'legra'

export function Image (props) {
  const { src, width = 200, height = 200, bs = 15, c = null } = props

  useEffect(() => {
    if (!c) return

    const ctx = c.getContext('2d')
    const legra = new Legra(ctx, bs)
    const img = new window.Image(width, height)

    img.src = src
    img.onload = function () {
      // Draw the image once loaded
      legra.drawImage(img, [0, 0])
    }
  }, [src, width, height, bs, c])

  return null
}
