function checkPart(part) {
	const n = part.length
	return Array.from({ length: n / 2 }).every(
		(_, i) =>
			part[i] === part[n - 1 - i] ||
			part[i + 1] === part[n - 1 - i] ||
			part[i] === part[n - 2 - i]
	)
}

export { checkPart }
