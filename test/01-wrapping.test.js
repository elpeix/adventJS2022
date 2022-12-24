import { describe, it, expect } from 'vitest'
import { wrapping } from '../src/01-wrapping'

describe('wrapping test', () => {

  it.skip('should has a function called "wrapping"', () => {
    expect(typeof wrapping).toBe('function')
  })

  it('should recieve an array', () => {
    expect(() => wrapping()).toThrow()
    expect(() => wrapping(1)).toThrow()
    expect(() => wrapping('1')).toThrow()
    expect(() => wrapping({})).toThrow()
    expect(() => wrapping([])).not.toThrow()
  })

  it('should recieve an array of strings', () => {
    expect(() => wrapping(['1', 1])).toThrow()
    expect(() => wrapping(['1', '1'])).not.toThrow()
  })

  it('should return an array of wrapped gifts', () => {
    const gifts = ['book', 'game', 'socks']
    expect(wrapping(gifts)).toEqual([
      "******\n*book*\n******",
      "******\n*game*\n******",
      "*******\n*socks*\n*******"
    ])
  })

})