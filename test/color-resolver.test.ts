import { describe, expect, it } from 'vitest'
import { ColorResolver } from '../src/core/colorResolver'

describe('color resolver', () => {
  it('resolves base colors for light and dark variants', () => {
    const darkResolver = new ColorResolver({
      variant: 'dark',
      modifiers: [],
    })
    const lightResolver = new ColorResolver({
      variant: 'light',
      modifiers: [],
    })

    expect(darkResolver.resolveRole('foreground')).toBe('#d4d4d4')
    expect(lightResolver.resolveRole('foreground')).toBe('#393a34')
  })

  it('applies soft overrides to semantic roles', () => {
    const resolver = new ColorResolver({
      variant: 'light',
      modifiers: ['soft'],
    })

    expect(resolver.resolveRole('background')).toBe('#F1F0E9')
    expect(resolver.resolveRole('activeBackground')).toBe('#E7E5DB')
    expect(resolver.resolveRole('border')).toBe('#E7E5DB')
  })

  it('prefers black overrides over soft overrides', () => {
    const resolver = new ColorResolver({
      variant: 'dark',
      modifiers: ['soft', 'black'],
    })

    expect(resolver.resolveRole('background')).toBe('#000000')
    expect(resolver.resolveRole('activeBackground')).toBe('#121212')
    expect(resolver.resolveRole('foreground')).toBe('#dbd7cacc')
    expect(resolver.resolveRole('punctuation')).toBe('#8a9099cc')
  })

  it('can resolve base colors without modifier overrides', () => {
    const resolver = new ColorResolver({
      variant: 'dark',
      modifiers: ['black'],
    })

    expect(resolver.resolveBaseRole('foreground')).toBe('#d4d4d4')
    expect(resolver.resolveBaseRole('background')).toBe('#0f0f0f')
  })

  it('appends opacity to resolved colors', () => {
    const resolver = new ColorResolver({
      variant: 'light',
      modifiers: [],
    })

    expect(resolver.resolveRole('primary', 'barely')).toBe('#4babf20d')
    expect(resolver.resolveRole('primary', '33')).toBe('#4babf233')
  })

  it('resolves ui palette roles and variant-specific helpers', () => {
    const darkResolver = new ColorResolver({
      variant: 'dark',
      modifiers: [],
    })
    const lightResolver = new ColorResolver({
      variant: 'light',
      modifiers: [],
    })

    expect(lightResolver.resolveUiRole('terminalBlack')).toBe('#ffffff')
    expect(darkResolver.resolveUiRole('peekMatchBackground')).toBe('#ffd33d33')
    expect(lightResolver.resolveUiRole('peekMatchBackground')).toBeUndefined()
    expect(darkResolver.resolveUiRoleByVariant('overlayBase', {
      light: 'barely',
      dark: 'faint',
    })).toBe('#eeeeee1a')
    expect(lightResolver.resolveRoleByVariant('yellow', {
      light: 'subtle',
      dark: 'ghost',
    })).toBe('#9981144d')
  })
})
