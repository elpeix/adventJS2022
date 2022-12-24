function fitsInOneBox(boxes) {
	if (!Array.isArray(boxes)) {
		throw new Error("The argument must be an array")
	}
	return boxes
		.sort((a, b) => b.l - a.l)
		.every(({w,_,h}, i) => !i || w < boxes[i - 1].w && h < boxes[i - 1].h)
}

export { fitsInOneBox }