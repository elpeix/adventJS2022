import { describe, it, expect } from 'vitest'
import { createCube } from '../src/06-createCube'

describe('createCube test', () => {

  it('should has a function called createCube', () => {
    expect(typeof createCube).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof createCube(1)).toBe('string')
  })

  it('should return a cube with size 1', () => {
    const result = `/\\_\\\n\\/_/`
    expect(createCube(1)).toBe(result.trim())
  })

  it('should return a cube with size 2', () => {
    const result = ' /\\_\\_\\\n/\\/\\_\\_\\\n\\/\\/_/_/\n \\/_/_/'
    expect(createCube(2)).toBe(result)
  })

  it('should return a cube with size 3', () => {
    const result = '  /\\_\\_\\_\\\n /\\/\\_\\_\\_\\\n/\\/\\/\\_\\_\\_\\\n\\/\\/\\/_/_/_/\n \\/\\/_/_/_/\n  \\/_/_/_/'
    expect(createCube(3)).toBe(result)
  })

  it('should return a cube with size 10', () => {
    const result = '         /\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n        /\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n       /\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n      /\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n     /\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n    /\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n   /\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n  /\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n /\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n/\\/\\/\\/\\/\\/\\/\\/\\/\\/\\_\\_\\_\\_\\_\\_\\_\\_\\_\\_\\\n\\/\\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n \\/\\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n  \\/\\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n   \\/\\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n    \\/\\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n     \\/\\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n      \\/\\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n       \\/\\/\\/_/_/_/_/_/_/_/_/_/_/\n        \\/\\/_/_/_/_/_/_/_/_/_/_/\n         \\/_/_/_/_/_/_/_/_/_/_/'
    expect(createCube(10)).toBe(result)
  })
})