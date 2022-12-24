function getFilesToBackup(lastBackup, changes) {
	return [
		...new Set(changes
			.filter(([, timestamp]) => timestamp > lastBackup)
			.map(([id]) => id)
		),
	].sort((a, b) => a - b)
}

export { getFilesToBackup }
