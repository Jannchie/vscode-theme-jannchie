import type { OpacityLevel } from '../config/opacity'
import type { SemanticRole, VariantColor } from '../config/semanticColors'
import { opacity } from '../config/opacity'
import { baseSemanticColors, modifierOverrides } from '../config/semanticColors'

const modifierPrecedence = ['soft', 'black'] as const

export type ThemeVariant = 'light' | 'dark'
export type ThemeModifier = (typeof modifierPrecedence)[number]

export interface ColorResolverOptions {
  modifiers: ThemeModifier[]
  variant: ThemeVariant
}

/**
 * Color resolver utility for picking appropriate colors based on theme variant
 */
export class ColorResolver {
  private variant: ThemeVariant
  private modifiers: ThemeModifier[]

  constructor(options: ColorResolverOptions) {
    this.variant = options.variant
    this.modifiers = options.modifiers
  }

  /**
   * Pick color from variant pair
   */
  pick<T>(options: { dark: T, light: T }): T {
    return options[this.variant]
  }

  /**
   * Resolve semantic role with optional opacity
   */
  resolveRole(role: SemanticRole, op: OpacityLevel | string = ''): string {
    const color = this.getVariantColor(role)[this.variant]
    return this.withOpacity(color, op)
  }

  /**
   * Resolve semantic role without modifier overrides
   */
  resolveBaseRole(role: SemanticRole, op: OpacityLevel | string = ''): string {
    const color = baseSemanticColors[role][this.variant]
    return this.withOpacity(color, op)
  }

  /**
   * Check if a specific modifier is active
   */
  hasModifier(modifier: ThemeModifier): boolean {
    return this.modifiers.includes(modifier)
  }

  private getVariantColor(role: SemanticRole): VariantColor {
    const resolvedColor: VariantColor = { ...baseSemanticColors[role] }

    for (const modifier of modifierPrecedence) {
      if (!this.hasModifier(modifier)) {
        continue
      }

      const override = modifierOverrides[modifier][role]
      if (override) {
        Object.assign(resolvedColor, override)
      }
    }

    return resolvedColor
  }

  private withOpacity(color: string, op: OpacityLevel | string = ''): string {
    if (!op) {
      return color
    }

    const opacityValue = op in opacity ? opacity[op as OpacityLevel] : op
    return `${color}${opacityValue}`
  }
}
