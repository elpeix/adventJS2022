import { describe, it, expect } from 'vitest'
import { getMaxGifts } from '../src/05-getMaxGifts'

describe('getMaxGifts test', () => {

  it.skip('should has a function called "getMaxGifts"', () => {
    expect(typeof getMaxGifts).toBe('function')
  })

  it.skip('should return a number', () => {
    expect(typeof getMaxGifts([1, 2, 3], 1, 1)).toBe('number')
  })

  it('should return 20 if giftsCities is [12, 3, 11, 5, 7], maxGifts is 20 and maxCities is 3', () => {
    expect(getMaxGifts([12, 3, 11, 5, 7], 20, 3)).toBe(20)
  })

  it('should return 0 if giftsCities is [50], maxGifts is 15 and maxCities is 1', () => {
    expect(getMaxGifts([50], 15, 1)).toBe(0)
  })

  it('should return 50 if giftsCities is [50], maxGifts is 100 and maxCities is 1', () => {
    expect(getMaxGifts([50], 100, 1)).toBe(50)
  })

  it('should return 70 if giftsCities is [50, 70], maxGifts is 100 and maxCities is 1', () => {
    expect(getMaxGifts([50, 70], 100, 1)).toBe(70)
  })

  it('should return 100 if giftsCities is [50, 70, 30], maxGifts is 100 and maxCities is 2', () => {
    expect(getMaxGifts([50, 70, 30], 100, 2)).toBe(100)
  })

  it('should return 100 if giftsCities is [50, 70, 30], maxGifts is 100 and maxCities is 3', () => {
    expect(getMaxGifts([50, 70, 30], 100, 3)).toBe(100)
  })

  it('should return 100 if giftsCities is [50, 70, 30], maxGifts is 100 and maxCities is 4', () => {
    expect(getMaxGifts([50, 70, 30], 100, 4)).toBe(100)
  })

  it('should return 100 for getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)', () => {
    expect(getMaxGifts([50, 10, 40, 1000, 500, 200], 199, 4)).toBe(100)
  })

  it('should return 115 for getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)', () => {
    expect(getMaxGifts([50, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11], 1000, 1000)).toBe(115)
  })

})