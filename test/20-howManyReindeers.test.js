import { describe, it, expect } from 'vitest'
import { howManyReindeers } from '../src/20-howManyReindeers.js'

describe('howManyReindeers test', () => {

  it('should have a function named howManyReindeers', () => {
    expect(typeof howManyReindeers).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(howManyReindeers([], []))).toBe(true)
  })

  it('should return an array of reindeer types', () => {
    const reindeerTypes = [
      { type: 'Nuclear', weightCapacity: 50 },
      { type: 'Electric', weightCapacity: 10 },
      { type: 'Gasoline', weightCapacity: 5 },
      { type: 'Diesel', weightCapacity: 1 }
    ]
    
    const gifts = [
      { country: 'Spain', weight: 30 },
      { country: 'France', weight: 17 },
      { country: 'Italy', weight: 50 }
    ]

    const result = [
      {
        country: 'Spain',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 }
        ]
      }, {
        country: 'France',
        reindeers: [
          { type: 'Electric', num: 1 },
          { type: 'Gasoline', num: 1 },
          { type: 'Diesel', num: 2 }
        ]
      }, {
        country: 'Italy',
        reindeers: [
          { type: 'Electric', num: 3 },
          { type: 'Gasoline', num: 3 },
          { type: 'Diesel', num: 5 }
        ]
      }
    ]
    expect(howManyReindeers(reindeerTypes, gifts)).toEqual(result)
  })

  it('should return an array of reindeer types', () => {
    const reindeerTypes = [
      { type: 'Diesel', weightCapacity: 1 },
      { type: 'Gasoline', weightCapacity: 5 }
    ]
    const gifts = [
      { country: 'Spain', weight: 30 },
      { country: 'Germany', weight: 7 }
    ]
    const result = [
      {
        country: "Spain",
        reindeers: [
          { type: "Gasoline", num: 5 },
          { type: "Diesel", num: 5 }
        ]
      }, {
        country: "Germany",
        reindeers: [
          { type: "Gasoline", num: 1 },
          { type: "Diesel", num: 2 }
        ]
      }
    ]
    expect(howManyReindeers(reindeerTypes, gifts)).toEqual(result)
  })

})