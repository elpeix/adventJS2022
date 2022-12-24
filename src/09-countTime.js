function countTime(leds) {
	let time = 0
	while (leds.some(led => !led)) {
		time += 7;
		const tmp = [...leds]
		leds.forEach((led, i) => 
			(leds[i] = !led && tmp.at(i - 1) === 1 ? 1 : led)
		)
	}
	return time
}

export { countTime }
