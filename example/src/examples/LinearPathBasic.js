import React from 'react'

import { LinearPath } from 'react-legra'

export default function LinearPathBasic() {

  const points = [[3, 3], [12, 3], [3, 12], [12, 12]]

  return (
    <LinearPath points={points} />
  )

}
