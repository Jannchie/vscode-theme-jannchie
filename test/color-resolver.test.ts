import type { ThemeColorGroups } from '@jannchie/theme-core'
import { ColorResolver, themeColorConfig } from '@jannchie/theme-core'
import { describe, expect, it } from 'vitest'

function collectThemePaths(groups: Partial<ThemeColorGroups>): string[] {
  return Object.entries(groups).flatMap(([group, values]) =>
    Object.keys(values ?? {}).map(key => `${group}.${key}`),
  )
}

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

    expect(darkResolver.resolve('text.primary')).toBe('#d4d4d4')
    expect(lightResolver.resolve('text.primary')).toBe('#393a34')
  })

  it('applies soft overrides to semantic roles', () => {
    const resolver = new ColorResolver({
      variant: 'light',
      modifiers: ['soft'],
    })

    expect(resolver.resolve('surface.canvas')).toBe('#F1F0E9')
    expect(resolver.resolve('surface.panel')).toBe('#E7E5DB')
    expect(resolver.resolve('surface.border')).toBe('#E7E5DB')
  })

  it('prefers black overrides over soft overrides', () => {
    const resolver = new ColorResolver({
      variant: 'dark',
      modifiers: ['soft', 'black'],
    })

    expect(resolver.resolve('surface.canvas')).toBe('#000000')
    expect(resolver.resolve('surface.panel')).toBe('#121212')
    expect(resolver.resolve('text.primary')).toBe('#dbd7cacc')
    expect(resolver.resolve('syntax.punctuation')).toBe('#8a9099cc')
  })

  it('can resolve base colors without modifier overrides', () => {
    const resolver = new ColorResolver({
      variant: 'dark',
      modifiers: ['black'],
    })

    expect(resolver.resolveBase('text.primary')).toBe('#d4d4d4')
    expect(resolver.resolveBase('surface.canvas')).toBe('#0f0f0f')
  })

  it('appends opacity to resolved colors', () => {
    const resolver = new ColorResolver({
      variant: 'light',
      modifiers: [],
    })

    expect(resolver.resolve('accent.primary', 'barely')).toBe('#4babf20d')
    expect(resolver.resolve('accent.primary', '33')).toBe('#4babf233')
  })

  it('resolves utility colors and variant-specific helpers', () => {
    const darkResolver = new ColorResolver({
      variant: 'dark',
      modifiers: [],
    })
    const lightResolver = new ColorResolver({
      variant: 'light',
      modifiers: [],
    })

    expect(lightResolver.resolve('utility.terminalBlack')).toBe('#ffffff')
    expect(darkResolver.resolve('utility.peekMatchBackground')).toBe('#ffd33d33')
    expect(lightResolver.resolve('utility.peekMatchBackground')).toBeUndefined()
    expect(darkResolver.resolveByVariant('surface.overlay', {
      light: 'barely',
      dark: 'faint',
    })).toBe('#eeeeee1a')
    expect(lightResolver.resolveByVariant('accent.yellow', {
      light: 'subtle',
      dark: 'ghost',
    })).toBe('#8d6c024d')
  })

  it('keeps light and dark semantic keys aligned', () => {
    expect(collectThemePaths(themeColorConfig.baseColors.light)).toEqual(
      collectThemePaths(themeColorConfig.baseColors.dark),
    )
  })

  it('limits modifier overrides to known semantic paths', () => {
    const knownPaths = new Set(collectThemePaths(themeColorConfig.baseColors.light))

    for (const variantModifiers of Object.values(themeColorConfig.modifiers)) {
      for (const modifierColors of Object.values(variantModifiers)) {
        for (const path of collectThemePaths(modifierColors ?? {})) {
          expect(knownPaths.has(path)).toBe(true)
        }
      }
    }
  })
})
