/**
 * Zed theme structures.
 *
 * A Zed theme ships as a single *family* file: one top-level object whose
 * `themes` array holds every variant. This mirrors how `core` produces five
 * variants from one source — here they collapse into one JSON instead of one
 * file per variant (as VS Code requires).
 *
 * @see https://zed.dev/docs/extensions/themes
 */

export interface ZedSyntaxStyle {
  color: string
  font_style?: 'italic' | null
  font_weight?: number | null
}

export interface ZedPlayer {
  cursor: string
  background: string
  selection: string
}

export interface ZedThemeVariant {
  name: string
  appearance: 'dark' | 'light'
  style: ZedStyle
}

export interface ZedStyle extends Record<string, unknown> {
  players: ZedPlayer[]
  syntax: Record<string, ZedSyntaxStyle>
}

export interface ZedThemeFamily {
  $schema: string
  name: string
  author: string
  themes: ZedThemeVariant[]
}
