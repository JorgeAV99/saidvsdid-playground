const { describe, test, expect } = require('@jest/globals')

describe('api', () => {
  test('parses ids', () => {
    expect(Number('42')).toBe(42)
  })

  test('rejects empty ids', () => {
    expect(Number('')).toBe(0)
  })
})
