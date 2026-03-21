import type { SemanticPaletteRole } from './colorPalette'
import {
  darkSemanticPalette,
  lightSemanticPalette,

  themePalette,
} from './colorPalette'

export interface VariantColor {
  dark: string
  light: string
}

const semanticRoles = Object.keys(lightSemanticPalette) as SemanticPaletteRole[]

export type SemanticRole = SemanticPaletteRole

function createVariantColor(role: SemanticRole): VariantColor {
  return {
    dark: darkSemanticPalette[role],
    light: lightSemanticPalette[role],
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
