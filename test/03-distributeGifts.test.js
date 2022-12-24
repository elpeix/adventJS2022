import { describe, it, expect } from 'vitest'
import { distributeGifts } from '../src/03-distributeGifts'

describe('distributeGifts test', () => {

  it.skip('should has a function called "distributeGifts"', () => {
    expect(typeof distributeGifts).toBe('function')
  })

  it('should return the number', () => {
    expect(typeof distributeGifts([], [])).toBe('number')
  })

  it('should return the number of packs', () => {
    const packOfGifts = ["book", "doll", "ball"]
    const reindeers = ["dasher", "dancer"]
    expect(distributeGifts(packOfGifts, reindeers)).toBe(2)
  })

  it('should return 1', () => {
    expect(distributeGifts(['a', 'b', 'c'], ['d', 'e'])).toBe(1)
  })

  it('should return 0', () => {
    expect(distributeGifts(['videogames', 'console'], ['midu'])).toBe(0)
  })

  it('should return 5', () => {
    const packOfGifts = ['game', 'videoconsole', 'computer']
    const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']
    expect(distributeGifts(packOfGifts, reindeers)).toBe(5)
  })

  it('should return 26', () => {
    const packOfGifts = ['music']
    const reindeers = ['midudev', 'pheralb', 'codingwithdani', 'carlosble', 'blasco', 'facundocapua', 'madeval', 'memxd']
    expect(distributeGifts(packOfGifts, reindeers)).toBe(26)
  })

})
