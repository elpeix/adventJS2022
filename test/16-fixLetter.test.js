import { describe, it, expect } from 'vitest'
import { fixLetter } from '../src/16-fixLetter.js'

describe('fixLetter test', () => {

  it('should have a function named fixLetter', () => {
    expect(typeof fixLetter).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof fixLetter('')).toBe('string')
  })

  it('should remove initial and final spaces', () => {
    expect(fixLetter(' Hello ')).toBe('Hello.')
  })

  it('should remove multiple spaces', () => {
    expect(fixLetter('Hi  Santa')).toBe('Hi Santa.')
  })

  it('should put a space after a comma', () => {
    expect(fixLetter('Hi,Santa ?')).toBe('Hi, Santa?')
  })

  it('should remove spaces before a comma', () => {
    expect(fixLetter('Hi ,Santa')).toBe('Hi, Santa.')
  })

  it('should remove spaces before a dot', () => {
    expect(fixLetter('Hi .Santa')).toBe('Hi. Santa.')
  })

  it('should remove multiple questions', () => { 
    expect(fixLetter('Hi??? Santa')).toBe('Hi? Santa.')
  })

  it('should have a uppercase first letter of each sentence', () => {
    expect(fixLetter('hi. santa.')).toBe('Hi. Santa.')
  })

  it('should have a Santa Claus capitalized', () => {
    expect(fixLetter('  hi santa claus  ')).toBe('Hi Santa Claus.')
  })

  it('should have a dot at the end of sentence', () => {
    expect(fixLetter('hi santa claus')).toBe('Hi Santa Claus.')
  })

  it('should return a valid sentence', () => {
    const letter = `hello,  how are you??     do you know if santa claus exists?  i really hope he does!  bye  `
    const expected = `Hello, how are you? Do you know if Santa Claus exists? I really hope he does! Bye.`
    expect(fixLetter(letter)).toBe(expected)
  })

  it('should return an other valid sentence', () => {
    const letter = `  Hi Santa claus. I'm a girl from Barcelona , Spain . please, send me a bike.  Is it possible?`
    const expected = `Hi Santa Claus. I'm a girl from Barcelona, Spain. Please, send me a bike. Is it possible?`
    expect(fixLetter(letter)).toBe(expected)
  })

})