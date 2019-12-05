import React, { useRef, useEffect, useState, Fragment } from 'react'

function Board (props) {
  const { height = 200, width = 200, canvas = null } = props
  const canvasRef = useRef(null)
  const [canvasBoard, setCanvasBoard] = useState(canvas)

  useEffect(() => {
    if (canvasBoard) return
    setCanvasBoard({ ...canvasRef }.current)
  }, [canvasRef])

  return (
    <Fragment>
      {
        !canvas ? (
          <canvas
            ref={canvasRef}
            style={{ border: '2px dotted red', margin: '10px 10px' }}
            height={height}
            width={width}
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
