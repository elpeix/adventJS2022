import { describe, it, expect } from 'vitest'
import { selectSleigh } from '../src/12-selectSleigh.js'

describe('selectSleigh test', () => {

  it('should have a function named selectSleigh', () => {
    expect(typeof selectSleigh).toBe('function')
  })
 
  it('should return the Dancer of the sleigh that can travel the furthest', () => {
    const distance = 30
    const sleighs = [
      { name: "Dasher", consumption: 0.3 },
      { name: "Dancer", consumption: 0.5 },
      { name: "Rudolph", consumption: 0.7 },
      { name: "Midu", consumption: 1 }
    ]
    expect(selectSleigh(distance, sleighs)).toBe('Dancer')
  })

  it('should return the TMChein of the sleigh that can travel the furthest', () => {
    const distance = 1
    const sleighs = [
      { name: 'pheralb', consumption: 0.3 },
      { name: 'TMChein', consumption: 0.5 }
    ]
    expect(selectSleigh(distance, sleighs)).toBe('TMChein')
  })

  it('should return null if consumption is greater than battery', () => {
    const distance = 50
    const sleighs = [
      { name: 'Pedrosillano', consumption: 1 },
      { name: 'SamarJaffal', consumption: 2 },
      { name: 'marcospage', consumption: 3 }
    ]
    expect(selectSleigh(distance, sleighs)).toBe(null)
  })

})