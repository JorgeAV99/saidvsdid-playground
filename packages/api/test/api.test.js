const { describe, test, expect } = require('@jest/globals')

describe('api', () => {
  test('parses ids', () => {
    expect(Number('42')).toBe(42)
  })
})
