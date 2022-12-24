import { describe, it, expect } from 'vitest'
import { getGiftsToRefill } from '../src/07-getGiftsToRefill'

describe('getGiftsToRefill test', () => {

  it('should has a function called getGiftsToRefill', () => {
    expect(typeof getGiftsToRefill).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(getGiftsToRefill([], [], []))).toBe(true)
  })

  it('should return stock for non repeated gift in warehouse', () => {
    const a1 = ['bici', 'coche', 'bici', 'bici']
    const a2 = ['coche', 'bici', 'muñeca', 'coche']
    const a3 = ['bici', 'pc', 'pc']
    const result = ['muñeca', 'pc']
    expect(getGiftsToRefill(a1, a2, a3)).toEqual(result)
  })

})