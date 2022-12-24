function checkJumpBasic(heights) {
	let top = 0
	let valid = true
	let goUp = true
	heights.forEach((height, i) => {
		if (height > heights[i - 1]) {
			if (top > height || !goUp) {
				valid = false
				return
			}
			top = height
		} else if (height < heights[i - 1]) {
			goUp = false
		}
	})
	return valid && top > heights.at(0) && top > heights.at(-1)
}

function checkJump(heights) {
	const max = Math.max(...heights)
	if (max === heights.at(0) || max === heights.at(-1)) {
		return false
	}
	const maxPosition = heights.indexOf(max)
	const left = heights
		.slice(0, maxPosition)
		.sort((a, b) => a - b)
	const right = heights
		.slice(maxPosition + 1)
		.sort((a, b) => b - a)
	return `${left.join('')}${max}${right.join('')}` === `${heights.join('')}`
}

export { checkJump }
