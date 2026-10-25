import { describe, test, expect } from 'bun:test'
import { sum } from './sum'

describe('sum', () => {
  test('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  test.skip('handles zero', () => {
    expect(sum(0, 0)).toBe(0)
  })
})
