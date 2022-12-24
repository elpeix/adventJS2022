import { describe, it, expect } from 'vitest'
import { checkPart } from '../src/08-checkPart'

describe('checkPart test', () => {

  it('should has a function called checkPart', () => {
    expect(typeof checkPart).toBe('function')
  })

  it('should return a boolean', () => {
    expect(typeof checkPart('')).toBe('boolean')
  })

  it('should return true if part is uwu', () => {
    expect(checkPart('uwu')).toBe(true)
  })

  it('should return false if part is midu', () => {
    expect(checkPart('midu')).toBe(false)
  })

  it('should return true if part is miidim', () => {
    expect(checkPart('miidim')).toBe(true)
  })

  it('should return true if part is midiim', () => {
    expect(checkPart('midiim')).toBe(true)
  })

  it('should return true if part is zzzoonzzz', () => {
    expect(checkPart('oon')).toBe(true)
  })

  it('should return true if part is zzzoonzzz', () => {
    expect(checkPart('zzzoonzzz')).toBe(true)
  })

})