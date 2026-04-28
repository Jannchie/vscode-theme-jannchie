import type { ModifierColorGroups, ThemeModifier, ThemeVariant } from './colorTypes'
import { applyOpacity } from './colorTokens'
import { lightPalette as l, darkPalette as p } from './palette'

export const themeModifiers = {
  soft: {
    dark: {
      surface: {
        canvas: p.paper,
        panel: p.graphite,
        editor: p.graphiteEditor,
        border: p.graphiteEdge,
      },
    },
    light: {
      surface: {
        canvas: l.cream,
        panel: l.creamPanel,
        editor: l.cream,
        border: l.creamEdge,
      },
      text: {
        muted: l.smoke,
      },
    },
  },
  black: {
    dark: {
      text: {
        primary: applyOpacity(p.bone, 'medium'),
      },
      surface: {
        canvas: p.carbon,
        panel: p.carbonPanel,
        editor: p.carbonEditor,
        border: p.carbonEdge,
      },
      syntax: {
        punctuation: applyOpacity(p.pearl, 'medium'),
      },
    },
    light: {
      text: {
        muted: l.smoke,
      },
    },
  },
} as const satisfies Record<ThemeModifier, Partial<Record<ThemeVariant, ModifierColorGroups>>>
