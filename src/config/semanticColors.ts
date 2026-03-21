import { themePalette } from './colorPalette'

export interface VariantColor {
  dark: string
  light: string
}

const semanticRoles = [
  'primary',
  'foreground',
  'activeForeground',
  'secondaryForeground',
  'mutedForeground',
  'subtleForeground',
  'border',
  'background',
  'activeBackground',
  'comment',
  'string',
  'readonly',
  'variable',
  'parameter',
  'variableBuiltin',
  'property',
  'keyword',
  'number',
  'boolean',
  'constant',
  'namespace',
  'operator',
  'builtin',
  'function',
  'functionBuiltin',
  'class',
  'classBuiltin',
  'type',
  'interface',
  'punctuation',
  'decorator',
  'regex',
  'green',
  'cyan',
  'blue',
  'red',
  'orange',
  'yellow',
  'magenta',
] as const

export type SemanticRole = (typeof semanticRoles)[number]

function createVariantColor(role: SemanticRole): VariantColor {
  return {
    dark: themePalette.dark.semantic[role],
    light: themePalette.light.semantic[role],
  }
}

export const baseSemanticColors = Object.fromEntries(
  semanticRoles.map(role => [role, createVariantColor(role)]),
) as Record<SemanticRole, VariantColor>

export const modifierOverrides = {
  soft: {
    background: {
      dark: themePalette.modifiers.soft.dark.background,
      light: themePalette.modifiers.soft.light.background,
    },
    activeBackground: {
      dark: themePalette.modifiers.soft.dark.activeBackground,
      light: themePalette.modifiers.soft.light.activeBackground,
    },
    border: {
      dark: themePalette.modifiers.soft.dark.border,
      light: themePalette.modifiers.soft.light.border,
    },
  },
  black: {
    foreground: { dark: themePalette.modifiers.black.dark.foreground },
    background: { dark: themePalette.modifiers.black.dark.background },
    activeBackground: { dark: themePalette.modifiers.black.dark.activeBackground },
    punctuation: { dark: themePalette.modifiers.black.dark.punctuation },
  },
} satisfies Record<string, Partial<Record<SemanticRole, Partial<VariantColor>>>>
