# react-legra

> Draw LEGO like brik shapes using [legrajs](https://github.com/pshihn/legra) and Reactjs

[![NPM](https://img.shields.io/npm/v/react-legra.svg)](https://www.npmjs.com/package/react-legra) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

React-legra provides a wrap around the common components of legraJS

## Install

```bash
npm install --save react-legra

// or

yarn add react-legra
```

## Usage

All components recieve an optional `options` prop as a configuration object:

```js
{
  color?: string;
  filled?: boolean;
}
```

There are 3 ways to render all components

**Basic Render:**

The basic render will create a canvas for each component you want to render

Example:
```js
import React from 'react'
import { Line } from 'react-legra'

function MyComponent() {

  const p1 = [3, 3]
  const p2 = [10, 10]

  const p3 = [5, 0]
  const p4 = [10, 10]

  return (
    <>
      // Each components have it's own <canvas> element
      <Line from={p1} to={p2} />
      <Line from={p3} to={p4} />
    </>
  )
}
```


**Referenced Render:**

You can use the `ctx` prop (which is available for all components) to reference it to a canvas element

```js
import React, { useRef, useEffect } from 'react'
import { Line } from 'react-legra'

function MyComponent() {
  const canvasRef = useRef(null)
  const [customCtx, setContext] = useState(null)

  const p1 = [3, 3]
  const p2 = [10, 10]
  const p3 = [5, 0]
  const p4 = [10, 10]

  useEffect(() => {
    if (canvasRef.current) {
      setContext(canvasRef.current)
    }
  })

  return (
    <>
      <canvas ref={canvasRef}></canvas>
      <Line from={p1} to={p2} ctx={customCtx} />
      <Line from={p3} to={p4} ctx={customCtx} />
    </>
  )
}
```

**Using `<Board />` Component:**

This works pretty much the same as the Referenced Render, but you can avoid the use of multiple `ctx` prop on all of your components

```js
import React from 'react'
import Board, { Line } from 'react-legra'

function MyComponent() {

  const p1 = [3, 3]
  const p2 = [10, 10]
  const p3 = [5, 0]
  const p4 = [10, 10]

  return (
    <Board>
      <Line from={p1} to={p2} />
      <Line from={p3} to={p4} />
    </Board>
  )
}
```

### Components
----------------

#### `<Line />`

Draw a line from `(x1, y1)` to `(x2, y2)`

|         prop        |  type   | default |
|:-------------------:|:-------:|:-------:|
| from (**required**) | Array[x1, y1] |    -    |
| to (**required**)   | Array[x2, y2] |    -    |


```js
import { Line } from 'react-legra'

function MyComponent() {

  const p1 = [3, 3]
  const p2 = [10, 10]

  return (
    <Line from={p1} to={p2}>
  )
}
```
-----------------------------------------------------------

#### `<Rectangle />`

Draw a rectangle given the top-left coordenates [x, y], width and height

|         prop        |      type     | default |
|:-------------------:|:-------------:|:-------:|
| start (**required**)  | Array[x, y] |    -    |
| width (**required**)  | Integer     |    -    |
| height (**required**) | Integer     |    -    |

```js
import { Rectangle } from 'react-legra'

function MyComponent() {

  const start = [3, 3]

  return (
    <Rectangle start={start} width={10} height={15} />
  )
}
```
-----------------------------------------------------------

#### `<LinearPath />`

Draws a set of lines connecting the specified points. points is an array of points.
Each point is an array with 2 values - [x, y]

|         prop        |                     type                        | default |
|:-------------------:|:-----------------------------------------------:|:-------:|
| points (**required**) | Array[[x1, y1], [x2, y2], [x3, y3], [x4, y4]] |    -    |

```js
import { LinearPath } from 'react-legra'

function MyComponent() {

  const points = [[3, 3], [12, 3], [3, 12], [12, 12]]

  return (
    <LinearPath points={points} />
  )
}
```

-----------------------------------------------------------

#### `<Image />`

Draw a line from `(x1, y1)` to `(x2, y2)`

|         prop        |  type   | default |
|:-------------------:|:-------:|:-------:|
| src **required**) | String |    -    |

```js
import { Image } from 'react-letgra'

function MyComponent() {

  return (
    <Image src="https://image.redbull.com/rbcom/010/2016-08-31/1331815085727_1/0100/0/1/leroy-bellet-behind-the-lens-1.jpg" />
}
```
-----------------------------------------------------------

#### `<Circle />`

Draws a circle from the `center` point and with the given `radius`

|         prop        |        type     | default |
|:-------------------:|:---------------:|:-------:|
| center (**required**) | Array[xc, yc] |    -    |
| radius (**required**) | Integer |    -    |

```js
import { Circle } from 'react-legra'

function MyComponent() {

  const center = [5, 5]
  const radius = 10

  return (
    <Circle center={center} radius={radius} />
  )
}
```
-----------------------------------------------------------

#### `<Ellipse />`

Draws an ellipse from the `center` propm, with `v-axis` and `h-axis` for the vertical and horizontal axis lenght

|         prop        |        type     | default |
|:-------------------:|:---------------:|:-------:|
| center (**required**) | Array[xc, yc] |    -    |
| v-axis (**required**) | Integer |    -    |
| h-axis (**required**) | Integer |    -    |

```js
import { Ellipse } from 'react-legra'

function MyComponent() {

  const center = [5, 5]

  return (
    <Ellipse center={center} v-axis={5} h-axis={10} />
  )
}
```

-----------------------------------------------------------


## Development

You'll need run two process (2 tabs) for development:

1.- Watch files and compile them to `dist/`, run on root directory

```js
npm start // Watch and Compile files changes
```

2.- Run the example

```js
cd example
npm start // Run the demo app
```

After that each change you do will be reflected on the demo app

## License

MIT © [christo-pr](https://github.com/christo-pr)
