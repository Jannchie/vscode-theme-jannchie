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
    const darkResolver = new ColorResolver({ variant: 'dark' })
    const lightResolver = new ColorResolver({ variant: 'light' })

    expect(darkResolver.resolve('text.primary')).toBe('#d4d4d4')
    expect(lightResolver.resolve('text.primary')).toBe('#1b1b1b')
  })

  it('applies soft overrides to semantic roles', () => {
    const resolver = new ColorResolver({
      variant: 'light',
      modifier: 'soft',
    })

    expect(resolver.resolve('surface.canvas')).toBe('#F1F0E9')
    expect(resolver.resolve('surface.panel')).toBe('#E7E5DB')
    expect(resolver.resolve('surface.border')).toBe('#dfdcd0')
  })

  it('applies black modifier overrides', () => {
    const resolver = new ColorResolver({
      variant: 'dark',
      modifier: 'black',
    })

    expect(resolver.resolve('surface.canvas')).toBe('#000000')
    expect(resolver.resolve('surface.panel')).toBe('#121212')
    expect(resolver.resolve('surface.editor')).toBe('#000000')
    expect(resolver.resolve('text.primary')).toBe('#dbd7cacc')
    expect(resolver.resolve('syntax.punctuation')).toBe('#8a9099cc')
  })

  it('exposes editor surface tokens via resolve', () => {
    const dark = new ColorResolver({ variant: 'dark' })
    const darkSoft = new ColorResolver({ variant: 'dark', modifier: 'soft' })
    const lightSoft = new ColorResolver({ variant: 'light', modifier: 'soft' })

    expect(dark.resolve('surface.editor')).toBe('#0d0d0d')
    expect(darkSoft.resolve('surface.editor')).toBe('#141414')
    expect(lightSoft.resolve('surface.editor')).toBe('#F1F0E9')
  })

  it('can resolve base colors without modifier overrides', () => {
    const resolver = new ColorResolver({
      variant: 'dark',
      modifier: 'black',
    })

    expect(resolver.resolveBase('text.primary')).toBe('#d4d4d4')
    expect(resolver.resolveBase('surface.canvas')).toBe('#0f0f0f')
  })

  it('appends opacity to resolved colors', () => {
    const resolver = new ColorResolver({ variant: 'light' })

    expect(resolver.resolve('accent.primary', 'barely')).toBe('#0d6dc70d')
    expect(resolver.resolve('accent.primary', '33')).toBe('#0d6dc733')
  })

  it('resolves utility colors and variant-specific helpers', () => {
    const darkResolver = new ColorResolver({ variant: 'dark' })
    const lightResolver = new ColorResolver({ variant: 'light' })

    expect(lightResolver.resolve('utility.terminalAnsiBlack')).toBe('#ffffff')
    expect(darkResolver.resolve('utility.peekMatchBackground')).toBe('#ffd33d33')
    expect(lightResolver.resolve('utility.peekMatchBackground')).toBe('#d5960033')
    expect(darkResolver.resolveByVariant('surface.overlay', {
      light: 'barely',
      dark: 'faint',
    })).toBe('#eeeeee1a')
    expect(lightResolver.resolveByVariant('accent.yellow', {
      light: 'subtle',
      dark: 'ghost',
    })).toBe('#fad1494d')
  })

  it('exposes state semantic roles in both variants', () => {
    const dark = new ColorResolver({ variant: 'dark' })
    const light = new ColorResolver({ variant: 'light' })

    expect(dark.resolve('state.error')).toBe(dark.resolve('accent.red'))
    expect(dark.resolve('state.success')).toBe(dark.resolve('accent.green'))
    expect(light.resolve('state.error')).toBe(light.resolve('accent.red'))
    expect(light.resolve('state.warning')).toBe(light.resolve('accent.orange'))
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
