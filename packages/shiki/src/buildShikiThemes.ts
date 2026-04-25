import type { ThemeDefinition, TokenColor } from '@jannchie/theme-core'
import {
  buildTokenColors,
  ColorResolver,
  resolveCodeBackground,
  resolveCodeForeground,
  themeDefinitions,
} from '@jannchie/theme-core'

const JSON_EXTENSION_RE = /\.json$/

export interface ShikiTheme {
  bg: string
  displayName: string
  fg: string
  name: string
  settings: TokenColor[]
  tokenColors: TokenColor[]
  type: 'dark' | 'light'
}

export interface BuiltShikiTheme {
  filename: string
  theme: ShikiTheme
}

export function buildShikiTheme(definition: ThemeDefinition): ShikiTheme {
  const colorResolver = new ColorResolver({
    variant: definition.variant,
    modifiers: definition.modifiers,
  })
  const tokenColors = buildTokenColors(colorResolver)

  return {
    name: definition.filename.replace(JSON_EXTENSION_RE, ''),
    displayName: definition.name,
    type: definition.variant,
    fg: resolveCodeForeground(colorResolver),
    bg: resolveCodeBackground(colorResolver),
    settings: tokenColors,
    tokenColors,
  }
}

export function buildAllShikiThemes(): BuiltShikiTheme[] {
  return themeDefinitions.map(definition => ({
    filename: definition.filename,
    theme: buildShikiTheme(definition),
  }))
}
