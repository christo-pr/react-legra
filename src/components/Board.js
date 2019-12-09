import React, { useRef, useEffect, useState, Fragment } from 'react'

import utils from '../utils'

function Board (props) {
  const { canvas = null, width = 200, height = 200, ...canvasProps } = props
  const canvasRef = useRef(null)
  const [canvasBoard, setCanvasBoard] = useState(canvas)

  if (canvasBoard) {
    utils.cleanBoard(canvasBoard)
  }

  useEffect(() => {
    if (canvasBoard) return
    setCanvasBoard({ ...canvasRef }.current)
  }, [props])

  return (
    <Fragment>
      {
        !canvas ? (
          <canvas
            ref={canvasRef}
            width={width}
            height={height}
            {...canvasProps}
          ></canvas>
        ) : null
      }
      {
        React.Children.map(props.children, children => {
          return React.cloneElement(children, { c: canvasBoard })
        })
      }
    </Fragment>
  )
}

export default Board
