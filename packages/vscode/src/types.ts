import type { TokenColor } from '@jannchie/theme-core'

/**
 * VS Code theme structure
 */
export interface VSCodeTheme {
  $schema?: string
  name: string
  base: 'vs' | 'vs-dark'
  colors: Record<string, string>
  semanticHighlighting: boolean
  semanticTokenColors: Record<string, unknown>
  tokenColors: TokenColor[]
  rules: Rule[]
}

export interface Rule {
  token: string
  foreground?: string
  background?: string
  fontStyle?: string
  [key: string]: unknown
}
