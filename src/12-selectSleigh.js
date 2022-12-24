function selectSleigh(distance, sleighs) {
	const sleigh = sleighs
		.reverse()
		.find(sleigh => distance * sleigh.consumption <= 20)
	return sleigh ? sleigh.name : null
}

export { selectSleigh }