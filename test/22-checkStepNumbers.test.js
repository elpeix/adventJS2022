import { describe, it, expect } from 'vitest'
import { checkStepNumbers } from '../src/22-checkStepNumbers.js'

describe('checkStepNumbers test', () => {

  it('should have a function named checkStepNumbers', () => {
    expect(typeof checkStepNumbers).toBe('function')
  })

  it('should return a boolean', () => {
    expect(typeof checkStepNumbers([], [])).toBe('boolean')
  })

  it('should return true if the step numbers are correct', () => {
    const systemNames = ["tree_1", "tree_2", "house", "tree_1", "tree_2", "house"]
    const stepNumbers = [1, 33, 10, 2, 44, 20]
    expect(checkStepNumbers(systemNames, stepNumbers)).toBe(true)
  })

  it('should return false if the step numbers are incorrect', () => {
    const systemNames = ["tree_1", "tree_1", "house"]
    const stepNumbers = [2, 1, 10]
    expect(checkStepNumbers(systemNames, stepNumbers)).toBe(false)
  })

  it('should return false if the step numbers are incorrect', () => {
    const systemNames = ["house", "house", "tree_1", "tree_1", "house", "tree_2", "tree_2", "tree_3"]
    const stepNumbers = [5, 2, 1, 2, 3, 4, 5, 6]
    expect(checkStepNumbers(systemNames, stepNumbers)).toBe(false)
  })

})