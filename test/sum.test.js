const assert = require('node:assert')
const { sum } = require('../src/sum')

describe('sum', function () {
  it('adds two numbers', function () {
    assert.strictEqual(sum(1, 2), 3)
  })

  it.skip('handles zero', function () {
    assert.strictEqual(sum(0, 0), 0)
  })
})
