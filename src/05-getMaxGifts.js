function getMaxGifts(giftsCities, maxGifts, maxCities) {
	if (!Array.isArray(giftsCities)) {
		throw new Error("The argument must be an array")
	}
	if (typeof maxGifts !== "number") {
		throw new Error("The argument must be a number")
	}
	if (typeof maxCities !== "number") {
		throw new Error("The argument must be a number")
	}

	const combine = (arr, level) => {
		if (level === 1) {
			return arr.map((item) => [item])
		}
		const result = [];
		arr.forEach((first, i) => {
			const rest = combine(arr.slice(i + 1), level - 1)
			const combineRest = rest.map((item) => [first, ...item])
			result.push(...combineRest)
		})
		return result
	}

	const cities = Math.min(maxCities, giftsCities.length)
	for (let i = cities; i > 0; i--) {
		const combs = combine(giftsCities, i)
		const sumCombs = combs.map((c) => c.reduce((acc, comb) => acc + comb, 0))
		const validComb = sumCombs.filter((comb) => comb <= maxGifts)
		if (validComb.length > 0) {
			return Math.max(...validComb)
		}
	}
	return 0
}

export { getMaxGifts }