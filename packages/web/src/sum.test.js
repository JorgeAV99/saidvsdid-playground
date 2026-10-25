import { describe, it, expect } from 'vitest'
import { sum } from './sum.js'

describe('sum', () => {
  it('adds two numbers', () => {
    expect(sum(1, 2)).toBe(3)
  })

  it.skip('handles zero', () => {
    expect(sum(0, 0)).toBe(0)
  })
})
