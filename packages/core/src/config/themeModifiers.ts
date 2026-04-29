import type { ModifierColorGroups, ThemeModifier, ThemeVariant } from './colorTypes'
import { applyOpacity } from './colorTokens'
import { lightPalette as l, darkPalette as p } from './palette'

/**
 * Modifier deltas. Each modifier overrides only the slots that change for
 * that flavor; everything else inherits from the base variant.
 *
 * Foreground tweaks (`text.*`) use the opacity ladder against the variant's
 * primary ink — never a separately picked gray — so the foreground hierarchy
 * stays consistent across `cream`, `canvas`, and `carbon` grounds.
 */
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
        muted: applyOpacity(l.ink, 'low'),
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
  },
} as const satisfies Record<ThemeModifier, Partial<Record<ThemeVariant, ModifierColorGroups>>>
