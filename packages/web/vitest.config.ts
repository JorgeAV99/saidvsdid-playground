import { defineConfig } from 'vitest/config'

export default defineConfig({
  test: {
    include: ['src/**/*.test.js'],
    exclude: ['src/sum.test.js'],
  },
})
