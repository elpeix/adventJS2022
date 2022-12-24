import { describe, it, expect } from 'vitest'
import { getCompleted } from '../src/11-getCompleted.js'

describe('getCompleted test', () => {

  it('should have a function named getCompleted', () => {
    expect(typeof getCompleted).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof getCompleted('01:00:00', '01:00:00')).toBe('string')
  })

  it('should return 1/1 if part and total are equal', () => {
    expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1')
  })

  it('should return 1/3 if part is 01:00:00 and total is 03:00:00', () => {
    expect(getCompleted('01:00:00', '03:00:00')).toBe('1/3')
  })

  it('should return 1/2 if part is 02:00:00 and total is 04:00:00', () => {
    expect(getCompleted('02:00:00', '04:00:00')).toBe('1/2')
  })

  it('should return 1/6 if part is 00:10:00 and total is 01:00:00', () => {
    expect(getCompleted('00:10:00', '01:00:00')).toBe('1/6')
  })

  it('should return 2/3 if part is 02:20:20 and total is 03:30:30', () => {
    expect(getCompleted('02:20:20', '03:30:30')).toBe('2/3')
  })

  it('should return 3/5 if part is 03:30:30 and total is 05:50:50', () => {
    expect(getCompleted('03:30:30', '05:50:50')).toBe('3/5')
  })

  it('should return 0/1 if part is 00:00:00 and total is 01:00:00', () => {
    expect(getCompleted('00:00:00', '01:00:00')).toBe('0/1')
  })

  it('should return n/m if part is 00:00:01 and total is 99:99:99', () => {
    expect(getCompleted('00:00:01', '99:99:99')).toBe('1/362439')
  })

  it('should return m/n if part is 99:99:99 and total is 00:00:1', () => {
    expect(getCompleted('99:99:99', '00:00:01')).toBe('362439/1')
  })

})