import type { ThemeColorGroups, ThemeVariant } from './colorTypes'
import { colorTokens } from './colorTokens'

export const baseThemeColors = {
  dark: colorTokens.dark,
  light: colorTokens.light,
} as const satisfies Record<ThemeVariant, ThemeColorGroups>
