import { describe, expect, it } from 'vitest'
import { hello } from './index'

describe('hello', () => {
  it('should return greeting message', () => {
    expect(hello('World')).toBe('Hello, World!')
  })
})
