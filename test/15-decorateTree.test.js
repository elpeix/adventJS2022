import { describe, it, expect } from 'vitest'
import { decorateTree } from '../src/15-decorateTree.js'

describe('decorateTree test', () => {

  it('should have a function named decorateTree', () => {
    expect(typeof decorateTree).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(decorateTree('P P'))).toBe(true)
  })

  it('should return [P, P P] for a P P', () => {
    expect(decorateTree('P P')).toEqual(['P', 'P P'])
  })

  it('should return [R, R R] for a R R', () => {
    expect(decorateTree('R R')).toEqual(['R', 'R R'])
  })

  it('should return [P, P P, P P P] for a P P P', () => {
    expect(decorateTree('P P P')).toEqual(['P', 'P P', 'P P P'])
  })

  it('should return [R, B P] for a B P', () => {
    expect(decorateTree('B P')).toEqual(['R', 'B P'])
  })

  it('should return [R, P B] for a P B', () => {
    expect(decorateTree('P B')).toEqual(['R', 'P B'])
  })

  it('should return valid array', () => {
    expect(decorateTree('B P R P')).toEqual(['R', 'P B', 'R B B', 'B P R P'])
  })

  it('should return valid array', () => {
    expect(decorateTree('R R P R R')).toEqual(['R', 'R R', 'P B P', 'R B B R', 'R R P R R'])
  })

})