import { describe, it, expect } from 'vitest'
import { fitsInOneBox } from '../src/04-fitsInOneBox'

describe('fitsInOneBox test', () => {

  it('should has a function called "fitsInOneBox"', () => {
    expect(typeof fitsInOneBox).toBe('function')
  })

  it('thows an error if the argument is not an array', () => {
    expect(() => fitsInOneBox('hello')).toThrow()
    expect(() => fitsInOneBox(123)).toThrow()
    expect(() => fitsInOneBox(true)).toThrow()
    expect(() => fitsInOneBox(undefined)).toThrow()
    expect(() => fitsInOneBox(null)).toThrow()
    expect(() => fitsInOneBox({})).toThrow()
    expect(() => fitsInOneBox([])).not.toThrow()
  })

  it('should return true if the boxes fit in one box', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
    ]
    expect(fitsInOneBox(boxes)).toBe(true)
  })

  it('should return false if the boxes do not fit in one box', () => {
    const boxes = [
      { l: 3, w: 1, h: 1 },
      { l: 1, w: 3, h: 3 },
    ]
    expect(fitsInOneBox(boxes)).toBe(false)
  })

  it('should return false if the boxes do not fit in one box', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 3, w: 1, h: 3 },
    ]
    expect(fitsInOneBox(boxes)).toBe(false)
  })

  it('should return true if the boxes fit in one box', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 3, w: 3, h: 3 },
      { l: 2, w: 2, h: 2 }
    ]
    expect(fitsInOneBox(boxes)).toBe(true)
  })

  it('should return false if the boxes do not fit in one box', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 10, h: 2}
    ]
    expect(fitsInOneBox(boxes)).toBe(false)
  }) 

  it('should return false if the boxes do not fit in one box', () => {
    const boxes = [
      { l: 1, w: 1, h: 1 },
      { l: 2, w: 2, h: 2 },
      { l: 2, w: 3, h: 3}
    ]
    expect(fitsInOneBox(boxes)).toBe(false)
  }) 

  it('should return true if the boxes fit in one box', () => {
    const boxes = [
      { l: 6, w: 6, h: 6 },
      { l: 2, w: 2, h: 2 },
      { l: 10, w: 10, h: 10 },
      { l: 3, w: 3, h: 3 },
      { l: 11, w: 11, h: 11 },
      { l: 4, w: 4, h: 4 },
      { l: 8, w: 8, h: 8 },
      { l: 12, w: 12, h: 12 },
      { l: 7, w: 8, h: 7 },
      { l: 1, w: 1, h: 1 },
      { l: 9, w: 9, h: 9 },
      { l: 5, w: 5, h: 5 },
    ]
    expect(fitsInOneBox(boxes)).toBe(false)
  })

})