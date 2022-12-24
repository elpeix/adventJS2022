function sortToys(toys, positions) {
  const sortedToys = []
  const min = Math.min(...positions)
  positions.forEach((position, index) => {
    sortedToys[position - min] = toys[index]
  })
  return sortedToys
}

export { sortToys }