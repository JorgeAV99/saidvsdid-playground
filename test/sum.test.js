const assert = require('node:assert')
const { sum } = require('../src/sum')

describe('sum', function () {
  it('adds two numbers', function () {
    assert.strictEqual(sum(1, 2), 3)
    assert.strictEqual(sum(-1, 1), 0)
  })

  it('handles zero', function () {
    assert.strictEqual(sum(0, 0), 0)
  })

  it('handles floats', function () {
    assert.ok(Math.abs(sum(0.1, 0.2) - 0.3) < 1e-9)
  })
})
