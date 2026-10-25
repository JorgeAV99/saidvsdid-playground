const { test, expect } = require('@jest/globals')

test('slow path', () => {
  expect([1, 2, 3].length).toBe(3)
})
