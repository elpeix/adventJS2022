import { describe, it, expect } from 'vitest'
import { countHours } from '../src/02-countHours'

describe('countHours test', () => {

  it.skip('should has a function called "countHours"', () => {
    expect(typeof countHours).toBe('function')
  })

  it('should return the number of hours', () => {
    const year = 2022
    const holidays = ['01/06', '04/01', '12/25'] 
    expect(countHours(year, holidays)).toBe(4)
  })

  it('should return the number of hours', () => {
    const year = 2024
    const holidays = ['02/23', '02/24', '02/25', '02/26'] 
    expect(countHours(year, holidays)).toBe(4)
  })

  it('should return the number of hours', () => {
    const year = 2024
    const holidays = ['12/31', '12/29', '12/25', '12/26'] 
    expect(countHours(year, holidays)).toBe(6)
  })

  it('should return 0 if array is empty', () => {
    const year = 2024
    const holidays = [] 
    expect(countHours(year, holidays)).toBe(0)
  })

  it('should return 0 if there are invalid dates ', () => {
    const year = 2024
    const holidays = ['13/21', '12,45', '-1/1', '1/0']
    expect(countHours(year, holidays)).toBe(0)
  })

})