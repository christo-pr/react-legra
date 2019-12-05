# react-legra

<div align="center">
<img src="./docs/react-legra.png">
</div>

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

All components but `<Board />`, recieve an optional `options` prop as a configuration object:

```js
{
  color?: string;
  filled?: boolean;
}
```

##### Draw in a **`<Board />`:**

First, you'll need a **board** where you can draw. The `<Board />` can achieve this. Additionaly this component recieve a `canvas` prop to use an external canvas

|         prop        |  type   | default |
|:-------------------:|:-------:|:-------:|
| canvas | object |    -    |

```js
import React from 'react'
import Board, { Line } from 'react-legra'

function MyComponent() {

  return (
    <Board>
      <Line from={[3, 3]} to={[10, 10]} />
      <Line from={[5, 0]} to={[10, 10]} />
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
import Board, { Line } from 'react-legra'

function MyComponent() {

  return (
    <Board>
      <Line from={[3, 3]} to={[10, 10]}>
    </Board>
  )
}
```
-----------------------------------------------------------

#### `<Rectangle />`

Draw a rectangle given the top-left coordenates [x, y] (`start`) as the center point and with the specified `width` and `height`

|         prop        |      type     | default |
|:-------------------:|:-------------:|:-------:|
| start (**required**)  | Array[x, y] |    -    |
| width (**required**)  | Integer     |    -    |
| height (**required**) | Integer     |    -    |

```js
import Board, { Rectangle } from 'react-legra'

function MyComponent() {

  return (
    <Board>
      <Rectangle start={[3, 3]} width={10} height={15} />
    </Board>
  )
}
```
-----------------------------------------------------------

#### `<LinearPath />`

Draws a set of lines connecting the specified points. `points` is an array of arrays with 2 integers on it (x, y).

|         prop        |                type               | default
|:-------------------:|:---------------------------------:|:-------:|
| points (**required**) | Array[[x1, y1], [x2, y2]...] |    -    |

```js
import Board, { LinearPath } from 'react-legra'

function MyComponent() {

  const points = [[3, 3], [12, 3], [3, 12], [12, 12]]

  return (
    <Board>
      <LinearPath points={points} />
    </Board>
  )
}
```

-----------------------------------------------------------

#### `<Image />`

Draw an image with Legos!!!

|         prop        |  type   | default |
|:-------------------:|:-------:|:-------:|
| src **required**) | String |    -    |

```js
import Board, { Image } from 'react-legra'

function MyComponent() {

  return (
    <Board>
      <Image src="https://image.redbull.com/rbcom/010/2016-08-31/1331815085727_1/0100/0/1/leroy-bellet-behind-the-lens-1.jpg" />
    </Board>
}
```
-----------------------------------------------------------

#### `<Circle />`

This component have 3 behaviors depending on the props you passed in

* Circle:
  Draws a circle from the `center` point and with the given `radius`

* Ellipse:
  Draws an ellipse from the `center` point and the horizontal and vertical axis lenght controlled by `hAxis` and `vAxis` props

* Arc:
  An arc is just a **section** of an ellipse controlled by the additional `start` and `stop` props which represent the angle of the arc, also you can _"close"_ the arc form by these 2 props with the `filled` prop set to true

|         prop        |        type     | default |
|:-------------------:|:---------------:|:-------:|
| center (**required**) | Array[xc, yc] |    -    |
| radius | Integer |    10    |
| hAxis | Integer |    null    |
| vAxis | Integer |    null    |
| start | Integer |    null    |
| stop | Integer |    null    |
| filled | Boolean |    false    |

```js
import Board, { Circle } from 'react-legra'

function MyComponent() {

  const center = [5, 5]

  return (
    <Board>
      <Circle center={center} radius={5} /> // Complete circle
      <Circle center={center} vAxis={7} hAxis={10} options={{ color: 'red' }} /> // Ellipse
      <Circle center={center} vAxis={12} hAxis={12} start={0} stop={Math.PI * .5} closed={false} options={{ color: 'green' }} /> // Arc
    </Board>
  )
}
```
-----------------------------------------------------------

#### `<Polygon />`

Draw a polygon with the given `vertices`

|         prop        |  type   | default |
|:-------------------:|:-------:|:-------:|
| vertices **required**) | Array[[]] |    -    |

```js
import Board, { Polygon } from 'react-legra'

function MyComponent() {

  return (
    <Board>
      <Polygon vertices={[[3, 3], [12, 3], [3, 12], [12, 12]]} />
    </Board>
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
