import { describe, it, expect } from 'vitest'
import { executeCommands } from '../src/23-executeCommands.js'

describe('executeCommands test', () => {

  it('should have a function named executeCommands', () => {
    expect(typeof executeCommands).toBe('function')
  })

  it('should return an array', () => {
    expect(Array.isArray(executeCommands([]))).toBe(true)
  })

  it('should return an array with 8 bits', () => {
    expect(executeCommands([]).length).toBe(8)
  })

  it('should return [0, 0, 0, 0, 0, 0, 0, 0] when no commands are passed', () => {
    expect(executeCommands([])).toEqual([0, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return [1, 0, 0, 0, 0, 0, 0, 0] when the command is "MOV 1,V00"', () => {
    expect(executeCommands(['MOV 1,V00'])).toEqual([1, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return [255, 0, 0, 0, 0, 0, 0, 0] when the command is "MOV 255,V00"', () => {
    expect(executeCommands(['MOV 255,V00'])).toEqual([255, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return [256, 0, 0, 0, 0, 0, 0, 0] when the command is "MOV 255,V00"', () => {
    expect(executeCommands(['MOV 256,V00'])).toEqual([0, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return [24, 0, 0, 0, 0, 0, 0, 0] when the command is "MOV 280,V00"', () => {
    expect(executeCommands(['MOV 280,V00'])).toEqual([24, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return [255, 0, 0, 0, 0, 0, 0, 0] when the command is "MOV -1,V00"', () => {
    expect(executeCommands(['MOV -1,V00'])).toEqual([255, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return [0, 0, 0, 0, 0, 0, 0, 0] when the command is "MOV -256,V00"', () => {
    expect(executeCommands(['MOV -256,V00'])).toEqual([0, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return [255, 0, 0, 0, 0, 0, 0, 0] when the command is "MOV -257,V00"', () => {
    expect(executeCommands(['MOV -257,V00'])).toEqual([255, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return [0, 0, 0, 0, 0, 0, 0, 0] when the command is "MOV -512,V00"', () => {
    expect(executeCommands(['MOV -512,V00'])).toEqual([0, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return [0, 1, 0, 0, 0, 0, 0, 0] when the command is "MOV 1,V01"', () => {
    expect(executeCommands(['MOV 1,V01'])).toEqual([0, 1, 0, 0, 0, 0, 0, 0])
  })

  it('should return [1, 2, 3, 4, 5, 6, 7, 8] when the command is "MOV 1,V00, MOV 2,V01, MOV 3,V02, MOV 4,V03, MOV 5,V04, MOV 6,V05, MOV 7,V06, MOV 8,V07"', () => {
    expect(executeCommands([
      'MOV 1,V00',
      'MOV 2,V01',
      'MOV 3,V02',
      'MOV 4,V03',
      'MOV 5,V04',
      'MOV 6,V05',
      'MOV 7,V06',
      'MOV 8,V07',
    ])).toEqual([1, 2, 3, 4, 5, 6, 7, 8])
  })

  it('should return [15, 10, 0...] when the commands are "MOV 5,V00 MOV 10,V01 ADD V00,V01"', () => {
    expect(executeCommands([
      'MOV 5,V00',
      'MOV 10,V01',
      'ADD V00,V01',
    ])).toEqual([15, 10, 0, 0, 0, 0, 0, 0])
  })

  it('should return [0, 255, 0...] when the commands are "MOV 1,V00 MOV 255,V01 ADD V00,V01"', () => {
    expect(executeCommands([
      'MOV 1,V00',
      'MOV 255,V01',
      'ADD V00,V01',
    ])).toEqual([0, 255, 0, 0, 0, 0, 0, 0])
  })

  it('should return [2, ...] when the commands are "MOV 2,V00 DEC V00"', () => {
    expect(executeCommands([
      'MOV 2,V00',
      'DEC V00',
    ])).toEqual([1, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return [3, ...] when the commands are "MOV 2,V00 INC V00"', () => {
    expect(executeCommands([
      'MOV 2,V00',
      'INC V00',
    ])).toEqual([3, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should copy values from V00 to V01 when the commands are "MOV 2,V00 MOV V00,V01"', () => {
    expect(executeCommands([
      'MOV 2,V00',
      'MOV V00,V01',
    ])).toEqual([2, 2, 0, 0, 0, 0, 0, 0])
  })

  it('should return [0, 0, 0, 0, 0, 0, 0, 0] when the commands are "MOV 2,V00 DEC V00 JMP 1"', () => {
    expect(executeCommands([
      'MOV 2,V00',
      'DEC V00',
      'JMP 1',
    ])).toEqual([0, 0, 0, 0, 0, 0, 0, 0])
  })

  it('should return [14, 10, 0, 0, 0, 0, 0]', () => {
    expect(executeCommands([
      'MOV 5,V00', 
      'MOV 10,V01',
      'DEC V00',
      'ADD V00,V01'
    ])).toEqual([14, 10, 0, 0, 0, 0, 0, 0])
  })

  it('should return [0, 254, 0, 0, 0, 0, 0]', () => {
    expect(executeCommands([
      'MOV 255,V00', 
      'INC V00',
      'DEC V01',
      'DEC V01'
    ])).toEqual([0, 254, 0, 0, 0, 0, 0, 0])
  })

  it('should return [0, 10, 0, 0, 0, 0, 1, 0]', () => {
    expect(executeCommands([
      'MOV 10,V00',
      'DEC V00',
      'INC V01',
      'JMP 1',
      'INC V06'
    ])).toEqual([0, 10, 0, 0, 0, 0, 1, 0])
  })

})