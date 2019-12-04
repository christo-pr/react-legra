import React from 'react'

import { Polygon } from 'react-legra'

export default function PolygonBasic() {

  const points = [[3, 3], [12, 3], [3, 12], [12, 12]]

  return (
    <Polygon points={points} options={{ color: 'red' }} />
  )

}
