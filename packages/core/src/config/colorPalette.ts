import type { ThemeColorConfig } from './colorTypes'
import { opacity } from './colorTokens'
import { themeModifiers } from './themeModifiers'
import { baseThemeColors } from './themeSemantics'

export type { OpacityLevel } from './colorTokens'

export { applyOpacity, opacity } from './colorTokens'

export const themeColorConfig = {
  opacity,
  baseColors: baseThemeColors,
  modifiers: themeModifiers,
} as const satisfies ThemeColorConfig

export type {
  ModifierColorGroups,
  ResolvedThemeColor,
  ThemeColorConfig,
  ThemeColorGroup,
  ThemeColorGroups,
  ThemeColorPath,
  ThemeModifier,
  ThemeVariant,
  VariantValue,
} from './colorTypes'
