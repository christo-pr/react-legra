import React from 'react'

import Board, { Image } from 'react-legra'

export default function ImageExample() {

  return (
    <Board>
      <Image src="/spong.jpg" bs={8} />
    </Board>
  )
}
