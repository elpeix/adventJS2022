import { describe, it, expect } from 'vitest'
import { getOptimalPath } from '../src/14-getOptimalPath.js'

describe('getOptimalPath test', () => {

  it('should have a function named getOptimalPath', () => {
    expect(typeof getOptimalPath).toBe('function')
  })

  it('should return a number', () => {
    expect(typeof getOptimalPath([[0]])).toBe('number')
  })

  it('should return 1 for a path with only one point with value 1', () => {
    expect(getOptimalPath([[1]])).toBe(1)
  })

  it('should return 2', () => {
    expect(getOptimalPath([[0], [2, 3]])).toBe(2)
  })

  it('should return 3', () => {
    expect(getOptimalPath([[0], [2, 3], [1, 5, 1]])).toBe(3)
  })

  it('should return 5', () => {
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1]])).toBe(5)
  })

  it('should return 8', () => {
    expect(getOptimalPath([[0], [3, 4], [9, 8, 1], [1, 2, 3, 4]])).toBe(8)
  })

  it('should return 8', () => {
    expect(getOptimalPath([[1], [1, 5], [7, 5, 8], [9, 4, 1, 3]])).toBe(8)
  })

})