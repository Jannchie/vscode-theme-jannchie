import type { ModifierColorGroups, ThemeModifier, ThemeVariant } from './colorTypes'
import { applyOpacity } from './colorTokens'

export const modifierPrecedence = ['soft', 'black'] as const satisfies readonly ThemeModifier[]

export const themeModifiers = {
  soft: {
    dark: {
      surface: {
        canvas: '#171717',
        panel: '#262626',
        border: '#262626',
      },
    },
    light: {
      surface: {
        canvas: '#F1F0E9',
        panel: '#E7E5DB',
        border: '#E7E5DB',
      },
      text: {
        muted: '#797979'
      }
    },
  },
  black: {
    dark: {
      text: {
        primary: applyOpacity('#dbd7ca', 'medium'),
      },
      surface: {
        canvas: '#000000',
        panel: '#121212',
      },
      syntax: {
        punctuation: applyOpacity('#8a9099', 'medium'),
      },
    },
    light: {
      text: {
        muted: '#797979',
      },
    }
  },
} as const satisfies Record<ThemeModifier, Partial<Record<ThemeVariant, ModifierColorGroups>>>
