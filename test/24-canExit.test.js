import { describe, it, expect } from 'vitest'
import { canExit } from '../src/24-canExit.js'

describe('canExit test', () => {

  it('should have a function named canExit', () => {
    expect(typeof canExit).toBe('function')
  })

  it('should return a boolean', () => {
    expect(typeof canExit([])).toBe('boolean')
  })

  it('should return false when the maze is empty', () => {
    expect(canExit([])).toBe(false)
  })

  it('should return true when the maze has S (start) and E (exit)', () => {
    expect(canExit([
      ['S', 'E']
    ])).toBe(true)
  })

  it('should return false when the maze has S (start) but no E (exit)', () => {
    expect(canExit([
      ['S', 'W']
    ])).toBe(false)
  })

  it('should return false when the maze has E (exit) but no S (start)', () => {
    expect(canExit([
      ['W', 'E']
    ])).toBe(false)
  })

  it('should return true when the maze has a path from S (start) to E (exit)', () => {
    expect(canExit([
      ['S', ' ', 'E'],
    ])).toBe(true)
  })

  it('should return false when the maze has a W (wall) between S (start) and E (exit)', () => {
    expect(canExit([
      ['S', 'W', 'E'],
    ])).toBe(false)
  })

  it('should return true when the maze has a path from S (start) to E (exit) with multiple lines', () => {
    expect(canExit([
      ['S', ' ', ' '],
      [' ', ' ', 'E'],
    ])).toBe(true)
  })

  it('should return false when the maze has a W (wall) between S (start) and E (exit) with multiple lines', () => {
    expect(canExit([
      ['S', ' ', 'W'],
      [' ', 'W', 'E'],
    ])).toBe(false)
  })

  it('should return true when the maze has a path from S (start) to E (exit)', () => {
    expect(canExit([
      [' ', ' ', 'W', ' ', 'S'],
      [' ', ' ', ' ', ' ', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])).toBe(true)
  })

  it('should return false when the maze has not a path fomr S (start) to E (exit)', () => {
    expect(canExit([
      [' ', ' ', 'W', 'W', 'S'],
      [' ', ' ', ' ', 'W', ' '],
      [' ', ' ', ' ', 'W', ' '],
      ['W', 'W', ' ', 'W', 'W'],
      [' ', ' ', ' ', ' ', 'E']
    ])).toBe(false)
  })

})
