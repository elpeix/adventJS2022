import { describe, it, expect } from 'vitest'
import { checkJump } from '../src/10-checkJump'

describe('checkJump test', () => {

  it('should has a function called checkJump', () => {
    expect(typeof checkJump).toBe('function')
  })

  it('should return a boolean', () => {
    expect(typeof checkJump([])).toBe('boolean')
  })

  it('should return true if heights is [1, 3, 8, 5, 2]', () => {
    expect(checkJump([1, 3, 8, 5, 2])).toBe(true)
  })

  it('should return false if heights is [1, 7, 3, 5]', () => {
    expect(checkJump([1, 7, 3, 5])).toBe(false)
  })

  it('should return false if heights is [2, 2, 2, 2]', () => {
    expect(checkJump([2, 2, 2, 2])).toBe(false)
  })

  it('should return false if heights is [1, 2, 3]', () => {
    expect(checkJump([1, 2, 3])).toBe(false)
  })

  it('should return true if heigths is [1, 2, 2, 2, 1]', () => {
    expect(checkJump([1, 2, 2, 2, 1])).toBe(true)
  })

  it('should return false if heights is [1, 2, 3, 1, 3, 1]', () => {
    expect(checkJump([1, 2, 3, 1, 3, 1])).toBe(false)
  })

  it('should return true if heigths is [1, 1, 1, 1, 1, 1, 1, 1, 2, 1]', () => {
    expect(checkJump([1, 1, 1, 1, 1, 1, 1, 1, 2, 1])).toBe(true)
  })

  it('should return true if heigths is [1, 2, 1, 1, 1, 1, 1, 1, 1, 1]', () => {
    expect(checkJump([1, 2, 1, 1, 1, 1, 1, 1, 1, 1])).toBe(true)
  })

})