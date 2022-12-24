import { describe, it, expect } from 'vitest'
import { sortToys } from '../src/19-sortToys.js'

describe('sortToys test', () => {

  it('should have a function named sortToys', () => {
    expect(typeof sortToys).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(sortToys([],[]))).toBe(true)
  })

  it('should return an array of toys sorted by position', () => {
    const toys = ['ball', 'doll', 'car', 'puzzle']
    const positions = [2, 3, 1, 0]
    expect(sortToys(toys, positions)).toEqual(['puzzle', 'car', 'ball', 'doll'])
  })

  it('should return an array of toys sorted by position', () => {
    const moreToys = ['pc', 'xbox', 'ps4', 'switch', 'nintendo']
    const morePositions = [8, 6, 5, 7, 9]
    expect(sortToys(moreToys, morePositions)).toEqual(['ps4', 'xbox', 'switch', 'pc', 'nintendo'])
  })

})