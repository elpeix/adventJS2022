import { describe, it, expect } from 'vitest'
import { printTable } from '../src/21-printTable.js'

describe('printTable test', () => {

  it('should have a function named printTable', () => {
    expect(typeof printTable).toBe('function')
  })

  it('should return a string', () => {
    expect(typeof printTable([])).toBe('string')
  })

  it('should return a table with the correct result', () => {
    const gifts = [
      { name: 'Game', quantity: 2 },
      { name: 'Bike', quantity: 1 },
      { name: 'Book', quantity: 3 }
    ]
    const expected = `+++++++++++++++++++\n| Gift | Quantity |\n| ---- | -------- |\n| Game | 2        |\n| Bike | 1        |\n| Book | 3        |\n*******************`
    expect(printTable(gifts)).toBe(expected)
  })

})