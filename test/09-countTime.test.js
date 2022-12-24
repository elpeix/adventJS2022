import { describe, it, expect } from 'vitest'
import { countTime } from '../src/09-countTime'

describe('countTime test', () => {

  it('should has a function called countTime', () => {
    expect(typeof countTime).toBe('function')
  })

  it('should return a number', () => {
    expect(typeof countTime([])).toBe('number')
  })

  it('should return 0 if leds is [1]', () => {
    expect(countTime([1])).toBe(0)
  })

  it('should return 7 if leds is [1, 0]', () => {
    expect(countTime([1, 0])).toBe(7)
  })

  it('should return 7 if leds is [0, 1]', () => {
    expect(countTime([0, 1])).toBe(7)
  })

  it('should return 7 if leds is [0, 1, 1, 0, 1]', () => {
    expect(countTime([0, 1, 1, 0, 1])).toBe(7)
  })

  it('should return 21 if leds is [0, 0, 0, 1]', () => {
    expect(countTime([0, 0, 0, 1])).toBe(21)
  })

  it('should return 28 id leds is [0, 0, 1, 0, 0]', () => {
    expect(countTime([0, 0, 1, 0, 0])).toBe(28)
  })

})