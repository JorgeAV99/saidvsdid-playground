import { describe, it, expect } from 'vitest'
import { sum } from './sum.js'

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
    expect(sum(-1, 1)).toBe(0)
  })

  it.skip('handles zero', () => {
    expect(sum(0, 0)).toBe(0)
  })

  it('handles floats', () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3)
  })
})
