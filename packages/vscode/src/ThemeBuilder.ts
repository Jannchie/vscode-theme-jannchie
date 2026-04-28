import type { ThemeModifier, ThemeVariant } from '@jannchie/theme-core'
import type { VSCodeTheme } from './types'
import { buildTokenColors, ColorResolver } from '@jannchie/theme-core'
import { buildSemanticTokenColors } from './ui/semanticTokenColors'
import { buildUIColors } from './ui/uiColors'

export interface ThemeConfig {
  modifier?: ThemeModifier
  name: string
  variant: ThemeVariant
}

/**
 * Main theme builder class that constructs VS Code themes.
 */
export class ThemeBuilder {
  private config: ThemeConfig
  private colorResolver: ColorResolver

  constructor(config: ThemeConfig) {
    this.config = config
    this.colorResolver = new ColorResolver({
      variant: config.variant,
      modifier: config.modifier,
    })
  }

  build(): VSCodeTheme {
    return {
      $schema: 'vscode://schemas/color-theme',
      name: this.config.name,
      base: this.colorResolver.pick({ light: 'vs', dark: 'vs-dark' }),
      colors: buildUIColors(this.colorResolver),
      semanticHighlighting: true,
      semanticTokenColors: buildSemanticTokenColors(this.colorResolver),
      tokenColors: buildTokenColors(this.colorResolver),
    }
  }
}
