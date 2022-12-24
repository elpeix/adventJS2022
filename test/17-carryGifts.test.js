import { describe, it, expect } from 'vitest'
import { carryGifts } from '../src/17-carryGifts.js'

describe('carryGifts test', () => {

  it('should have a function named carryGifts', () => {
    expect(typeof carryGifts).toBe('function')
  })

  it('should return a []', () => {
    expect(Array.isArray(carryGifts([]))).toBe(true)
  })

  it('should return [game bike, book toy]', () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 10)).toEqual(['game bike', 'book toy'])
  })

  it(`should return [
    "game",
    "bike",
    "book toy"
  ] with (['game', 'bike', 'book', 'toy'], 7)` , () => {
    expect(carryGifts(['game', 'bike', 'book', 'toy'], 7)).toEqual(['game', 'bike', 'book toy'])
  })

  it(`should return [] with (['toy', 'toy', 'toy', 'toy'], 2)` , () => {
    expect(carryGifts(['toy', 'toy', 'toy', 'toy'], 2)).toEqual([])
  })

})