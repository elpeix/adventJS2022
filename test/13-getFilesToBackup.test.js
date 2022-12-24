import { describe, it, expect } from 'vitest'
import { getFilesToBackup } from '../src/13-getFilesToBackup.js'

describe('getFilesToBackup test', () => {

	it('should have a function named getFilesToBackup', () => {
		expect(typeof getFilesToBackup).toBe('function')
	})

	it('should return an array of files to backup', () => {
		expect(Array.isArray(getFilesToBackup(0, []))).toBe(true)
	})

	it('should return an empty array if no changes', () => {
		expect(getFilesToBackup(0, [])).toEqual([])
	})

	it('should return an empty array if no changes since last backup', () => {
		const lastBackup = 1546300800
		const changes = [
			[ 1, 1546300000 ],
			[ 2, 1546300000 ]
		]
		expect(getFilesToBackup(lastBackup, changes)).toEqual([])
	})

	it('should return an array of files to backup', () => {
		const lastBackup = 1546300800
		const changes = [
			[ 1, 1546300800 ],
			[ 2, 1546300800 ],
			[ 1, 1546300900 ],
			[ 1, 1546301000 ],
			[ 3, 1546301100 ]
		]
		expect(getFilesToBackup(lastBackup, changes)).toEqual([ 1, 3 ])
	})

})
