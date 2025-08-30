import type { ColorPair } from '../config/semanticColors'
import type { OpacityLevel } from '../config/opacity'
import { opacity } from '../config/opacity'

export type ThemeVariant = 'light' | 'dark'
export type ThemeModifier = 'soft' | 'black'

export interface ColorResolverOptions {
  variant: ThemeVariant
  modifiers: ThemeModifier[]
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
   * Pick color from color pair based on theme variant
   */
  pick<T>(options: { light: T; dark: T }): T {
    return options[this.variant]
  }

  /**
   * Resolve semantic color with optional opacity
   */
  resolveColor(colorPair: ColorPair, op: OpacityLevel | string = ''): string {
    const color = this.variant === 'light' ? colorPair[1] : colorPair[0]
    
    // Handle opacity
    if (op) {
      const opacityValue = (op in opacity) ? opacity[op as OpacityLevel] : op
      return `${color}${opacityValue}`
    }
    
    return color
  }

  /**
   * Check if a specific modifier is active
   */
  hasModifier(modifier: ThemeModifier): boolean {
    return this.modifiers.includes(modifier)
  }

  /**
   * Get appropriate background color based on modifiers
   */
  getBackgroundColor(
    baseBackground: ColorPair,
    softBackground?: ColorPair,
    blackBackground?: ColorPair
  ): string {
    if (this.hasModifier('black') && blackBackground) {
      return this.resolveColor(blackBackground)
    }
    if (this.hasModifier('soft') && softBackground) {
      return this.resolveColor(softBackground)
    }
    return this.resolveColor(baseBackground)
  }

  /**
   * Get appropriate foreground color based on modifiers
   */
  getForegroundColor(
    baseForeground: ColorPair,
    blackForeground?: ColorPair
  ): string {
    if (this.hasModifier('black') && blackForeground) {
      return this.resolveColor(blackForeground)
    }
    return this.resolveColor(baseForeground)
  }

  /**
   * Apply opacity to punctuation for black theme
   */
  getPunctuationColor(punctuation: ColorPair): string {
    if (this.hasModifier('black')) {
      return this.resolveColor(punctuation, opacity.medium)
    }
    return this.resolveColor(punctuation)
  }
}