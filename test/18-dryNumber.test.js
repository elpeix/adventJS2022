import { describe, it, expect } from 'vitest'
import { dryNumber } from '../src/18-dryNumber.js'

describe('dryNumber test', () => {

  it('should have a function named dryNumber', () => {
    expect(typeof dryNumber).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(dryNumber(1))).toBe(true)
  })
  
  it('should return an array of numbers with chipher 1', () => {
    expect(dryNumber(1, 15)).toEqual([1, 10, 11, 12, 13, 14, 15])
  })

  it('should return an array of numbers with chipher 2', () => {
    expect(dryNumber(2, 20)).toEqual([2, 12, 20])
  })

})