import { ColorResolver, type ThemeVariant, type ThemeModifier } from './colorResolver'
import { buildTokenColors } from '../syntax/tokenColors'
import { buildUIColors } from '../ui/uiColors'
import { buildSemanticTokenColors } from '../ui/semanticTokenColors'
import { semanticColors } from '../config/semanticColors'
import type { VSCodeTheme } from './types'

export interface ThemeConfig {
  name: string
  variant: ThemeVariant
  modifiers: ThemeModifier[]
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
      modifiers: config.modifiers
    })
  }

  /**
   * Build the complete VS Code theme
   */
  build(): VSCodeTheme {
    const punctuation = this.colorResolver.getPunctuationColor(semanticColors.punctuation)
    
    // Generate token colors
    const tokenColors = buildTokenColors(this.colorResolver, punctuation)

    return {
      name: this.config.name,
      base: this.colorResolver.pick({ light: 'vs', dark: 'vs-dark' }),
      colors: buildUIColors(this.colorResolver),
      semanticHighlighting: true,
      semanticTokenColors: buildSemanticTokenColors(this.colorResolver),
      tokenColors: tokenColors,
      rules: this.generateMonacoRules(tokenColors)
    }
  }


  /**
   * Generate Monaco editor rules from token colors
   */
  private generateMonacoRules(tokenColors: any[]): any[] {
    const rules: any[] = []
    
    tokenColors.forEach(tokenColor => {
      const scopes = Array.isArray(tokenColor.scope) ? tokenColor.scope : [tokenColor.scope]
      
      scopes.forEach(scope => {
        const rule: any = { token: scope }
        
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
      })
    })
    
    return rules
  }
}