'use strict'

/**
 * Clean the board
 */
function cleanBoard(canvas) {
  const ctx = canvas.getContext('2d')
  ctx.clearRect(0, 0, canvas.width, canvas.height)
}

export default {
  cleanBoard
}
