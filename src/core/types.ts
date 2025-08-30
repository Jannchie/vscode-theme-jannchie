/**
 * VS Code theme structure
 */
export interface VSCodeTheme {
  name: string
  base: 'vs' | 'vs-dark'
  colors: Record<string, string>
  semanticHighlighting: boolean
  semanticTokenColors: Record<string, any>
  tokenColors: TokenColor[]
  rules: Rule[]
}

export interface TokenColor {
  scope: string | string[]
  settings: {
    foreground?: string
    background?: string
    fontStyle?: string
    [key: string]: any
  }
}

export interface Rule {
  token: string
  foreground?: string
  background?: string
  fontStyle?: string
  [key: string]: any
}