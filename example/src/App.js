import React, { useState } from 'react'

import { Line } from 'react-legra'

export default function App() {

  const [options, setOptions] = useState([[5, 5], [10, 7]])

  const randomPoint = () => {
    return [Math.floor(Math.random() * 20), Math.floor(Math.random() * 20)]
  }

  const click = () => {
    setOptions([randomPoint(), randomPoint()])
  }

  console.log('options', options)

  return (
    <div>
      <button onClick={click}>Change</button>
      <Line from={options[0]} to={options[1]} options={{ color: 'green' }} />
    </div>
  );
}
