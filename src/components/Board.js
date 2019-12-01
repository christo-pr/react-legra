import React, { useRef, useEffect, useState } from 'react'

function Board(props) {
  const { height = 500, width = 1000 } = props;
  const canvasRef = useRef(null);
  const [elements, setElements] = useState(null);

  useEffect(() => {
    if (canvasRef.current) {
      const childs = React.Children.map(props.children, children => {
        return React.cloneElement(children, { ctx: canvasRef.current });
      });

      setElements(childs);
    }
  }, []);

  return (
    <div>
      <canvas
        ref={canvasRef}
        style={{ border: "2px dotted red" }}
        height={height}
        width={width}
      ></canvas>
      {elements}
    </div>
  );
}

export default Board
