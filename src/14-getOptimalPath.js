function getOptimalPath(path) {
	if (path.length === 0) return 0
	const values = []
	const sumNodes = (i, j, sum) => {
		sum += path[i][j]
		if (!path[i + 1]) {
			values.push(sum)
			return
		}
		sumNodes(i + 1, j, sum)
		sumNodes(i + 1, j + 1, sum)
	}
	sumNodes(0, 0, 0)
	return Math.min(...values)
}

function getOptimalPath2(path) {
  for (let i = path.length - 2; i >= 0; i--) {
    path[i].forEach((_, j) => {
      path[i][j] += Math.min(path[i + 1][j], path[i + 1][j + 1])
    })
  }
  return path[0][0]
}

export { getOptimalPath }
