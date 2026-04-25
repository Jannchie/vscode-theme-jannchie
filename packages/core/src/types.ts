export interface TokenColor {
  scope: string | string[]
  settings: {
    background?: string
    fontStyle?: string
    foreground?: string
    [key: string]: unknown
  }
}
