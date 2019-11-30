import React, { useState } from 'react'

import { Line } from 'react-legra'

export default function App() {

  const [options, setOptions] = useState([[5, 5], [10, 7]])

  const click = () => {
    setOptions([[0, 0], [3, 3]])
  }

  console.log('options', options)

  return (
    <div>
      <button onClick={click}>Change</button>
      <Line from={options[0]} to={options[1]} options={{ color: 'green' }} />
    </div>
  );
}
