import { describe, test, expect } from 'bun:test'
import { sum } from './sum'

describe('sum', () => {
  test('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(-1, 1)).toBe(0)
  })

  test('handles zero', () => {
    expect(sum(0, 0)).toBe(0)
  })

  test('handles floats', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})
