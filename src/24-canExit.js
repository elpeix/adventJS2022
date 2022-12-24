function canExit(maze) {
  const START = 'S'
  const EXIT = 'E'
  const WALL = 'W'

  const graph = new Map()
  let startKey = null
  let exitKey = null
  for (let i = 0; i < maze.length; i++) {
    for (let j = 0; j < maze[i].length; j++) {
      const cell = maze[i][j]
      if (cell === WALL) {
        continue
      }

      const key = `${i},${j}`
      const neighbors = []
      if (cell === START) {
        startKey = key
      }
      if (cell === EXIT) {
        exitKey = key
      }
      if (i > 0 && maze[i - 1][j] !== WALL) {
        neighbors.push(`${i - 1},${j}`)
      }
      if (i < maze.length - 1 && maze[i + 1][j] !== WALL) {
        neighbors.push(`${i + 1},${j}`)
      }
      if (j > 0 && maze[i][j - 1] !== WALL) {
        neighbors.push(`${i},${j - 1}`)
      }
      if (j < maze[i].length - 1 && maze[i][j + 1] !== WALL) {
        neighbors.push(`${i},${j + 1}`)
      }
      graph.set(key, neighbors)
    }
  }

  if (startKey === null || exitKey === null) {
    return false
  }

  const visited = new Set()
  const queue = [startKey]
  while (queue.length > 0) {
    const key = queue.shift()
    if (visited.has(key)) {
      continue
    }
    visited.add(key)
    if (exitKey === key) {
      return true
    }
    const neighbors = graph.get(key)
    for (const neighbor of neighbors) {
      queue.push(neighbor)
    }
  }
  return false
}

export { canExit }