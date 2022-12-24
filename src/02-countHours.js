function countHours(year, holidays) {
	let hours = 0
	holidays.forEach((date) => {
		const dayOfWeek = new Date(`${year}/${date}`).getDay() || 0
		if (dayOfWeek > 0 && dayOfWeek < 6) {
			hours += 2
		}
	})
	return hours
}

export { countHours }
