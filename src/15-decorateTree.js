function decorateTree(base) {
	const map = {
		'PP': 'P',
		'RR': 'R',
		'BB': 'B',
		'BP': 'R',
		'PB': 'R',
		'BR': 'P',
		'RB': 'P',
		'RP': 'B',
		'PR': 'B',
	}
	const result = [base]
	let tmp = base.split(' ')
	while (tmp.length > 1) {
		tmp = Array(tmp.length - 1)
			.fill()
			.map((_, i) => map[tmp[i] + tmp[i + 1]])
		result.unshift(tmp.join(' '))
	}
	return result
}

export { decorateTree }
