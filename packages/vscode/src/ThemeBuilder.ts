import type { ThemeModifier, ThemeVariant, TokenColor } from '@jannchie/theme-core'
import type { Rule, VSCodeTheme } from './types'
import { buildTokenColors, ColorResolver } from '@jannchie/theme-core'
import { buildSemanticTokenColors } from './ui/semanticTokenColors'
import { buildUIColors } from './ui/uiColors'

export interface ThemeConfig {
  modifiers: ThemeModifier[]
  name: string
  variant: ThemeVariant
}

/**
 * Main theme builder class that constructs VS Code themes
 */
export class ThemeBuilder {
  private config: ThemeConfig
  private colorResolver: ColorResolver

  constructor(config: ThemeConfig) {
    this.config = config
    this.colorResolver = new ColorResolver({
      variant: config.variant,
      modifiers: config.modifiers,
    })
  }

  /**
   * Build the complete VS Code theme
   */
  build(): VSCodeTheme {
    const tokenColors = buildTokenColors(this.colorResolver)

    return {
      $schema: 'vscode://schemas/color-theme',
      name: this.config.name,
      base: this.colorResolver.pick({ light: 'vs', dark: 'vs-dark' }),
      colors: buildUIColors(this.colorResolver),
      semanticHighlighting: true,
      semanticTokenColors: buildSemanticTokenColors(this.colorResolver),
      tokenColors,
      rules: this.generateMonacoRules(tokenColors),
    }
  }

  /**
   * Generate Monaco editor rules from token colors
   */
  private generateMonacoRules(tokenColors: TokenColor[]): Rule[] {
    const rules: Rule[] = []

    for (const tokenColor of tokenColors) {
      const scopes = Array.isArray(tokenColor.scope) ? tokenColor.scope : [tokenColor.scope]

      for (const scope of scopes) {
        const rule: Rule = { token: scope }

        if (tokenColor.settings.foreground) {
          rule.foreground = tokenColor.settings.foreground.replace('#', '')
        }
        if (tokenColor.settings.background) {
          rule.background = tokenColor.settings.background.replace('#', '')
        }
        if (tokenColor.settings.fontStyle) {
          rule.fontStyle = tokenColor.settings.fontStyle
        }

        rules.push(rule)
      }
    }

    return rules
  }
}
