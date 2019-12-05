import { Line } from './components/Line'
import { Rectangle } from './components/Rectangle'
import { LinearPath } from './components/LinearPath'
import { Circle } from './components/Circle'
import { Polygon } from './components/Polygon'
import { Ellipse } from './components/Ellipse'
import { Image } from './components/Image'
import { Arc } from './components/Arc'
import Board from './components/Board'

export { Line }
export { Rectangle }
export { LinearPath }
export { Circle }
export { Polygon }
export { Ellipse }
export { Image }
export { Arc }

Board.Line = Line
Board.Rectangle = Rectangle
Board.LinearPath = LinearPath
Board.Circle = Circle
Board.Polygon = Polygon
Board.Ellipse = Ellipse
Board.Image = Image
Board.Arc = Arc

export default Board
