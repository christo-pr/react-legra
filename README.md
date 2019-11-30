# react-legra

> Draw LEGO like brik shapes using [legrajs](https://github.com/pshihn/legra) and Reactjs

[![NPM](https://img.shields.io/npm/v/react-legra.svg)](https://www.npmjs.com/package/react-legra) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save react-legra
```

## Usage

React-legra provides a wrap around the common components of legraJS

All components recieve an optional `options` prop which works as a configuration object:

```js
{
  color?: string;
  filled?: boolean;
}
```

#### **Line:**

Draw a line from `(x1, y1)` to `(x2, y2)`

|         prop        |  type   | default |
|:-------------------:|:-------:|:-------:|
| from (**required**) | Array[x1, y1] |    -    |
| to (**required**)   | Array[x2, y2] |    -    |

```js
import { Line } from 'react-letgra'

function MyComponent() {

  const p1 = [3, 3]
  const p2 = [10, 10]

  return (
    <Line from={p1} to={p2}>
  )
}
```
-----------------------------------------------------------

## Development

You'll need run two process (2 tabs) for development:

1.- Watch files and compile them to `dist/`

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
