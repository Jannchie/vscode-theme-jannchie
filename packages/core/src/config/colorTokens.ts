import type { ThemeColorGroups } from './colorTypes'
import { lightPalette as l, darkPalette as p, transparent } from './palette'

export const opacity = {
  full: 'ff',
  high: 'e6',
  medium: 'cc',
  low: 'aa',
  veil: '99',
  lower: '80',
  subtle: '4d',
  ghost: '33',
  faint: '1a',
  barely: '0d',
} as const

export type OpacityLevel = keyof typeof opacity

const lightTokens = {
  text: {
    // Foreground hierarchy — derived from `primary` via the opacity ladder.
    // `chrome` is the one exception: a flat ink for UI chrome (status bar,
    // tab labels) where alpha-mixed text would blend into panel surfaces.
    primary: l.ink,
    chrome: l.charcoal,
    secondary: applyOpacity(l.ink, 'high'),
    muted: applyOpacity(l.ink, 'lower'),
    subtle: applyOpacity(l.ink, 'faint'),
  },
  surface: {
    canvas: l.white,
    panel: l.paper,
    editor: l.white,
    border: l.silver,
    overlay: l.ink,
    guide: l.ink,
    shadow: applyOpacity(l.shadowInk, 'ghost'),
  },
  accent: {
    blue: l.blue,
    cyan: l.cyan,
    green: l.emerald,
    magenta: l.pink,
    orange: l.orange,
    primary: l.cobalt,
    red: l.red,
    yellow: l.yellow,
  },
  state: {
    error: l.red,
    warning: l.orange,
    success: l.emerald,
    info: l.blue,
    hint: l.emerald,
    added: l.emerald,
    modified: l.blue,
    deleted: l.red,
    conflict: l.orange,
    untracked: l.cyan,
    indicator: l.gold,
  },
  syntax: {
    boolean: l.steel,
    builtin: l.iris,
    class: l.emerald,
    classBuiltin: l.fern,
    comment: l.forest,
    constant: l.pine,
    decorator: l.plum,
    function: l.amber,
    functionBuiltin: l.amber,
    import: l.purple,
    interface: l.blue,
    keyword: l.brick,
    namespace: l.iris,
    number: l.pine,
    parameter: l.slate,
    property: l.azure,
    punctuation: l.pearl,
    readonly: l.sea,
    regex: l.olive,
    string: l.rust,
    type: l.teal,
    variable: l.charcoal,
    variableBuiltin: l.smoke,
  },
  utility: {
    peekMatchBackground: applyOpacity(l.gold, 'ghost'),
    terminalAnsiBlack: l.white,
    transparent,
  },
} as const satisfies ThemeColorGroups

const darkTokens = {
  text: {
    primary: p.fog,
    chrome: p.mist,
    secondary: applyOpacity(p.mist, 'medium'),
    muted: applyOpacity(p.mist, 'low'),
    subtle: applyOpacity(p.mist, 'faint'),
  },
  surface: {
    canvas: p.canvas,
    panel: p.paper,
    editor: p.editor,
    border: p.ash,
    overlay: p.overlay,
    guide: p.guide,
    shadow: applyOpacity(p.ash, 'faint'),
  },
  accent: {
    blue: p.blue,
    cyan: p.cyan,
    green: p.green,
    magenta: p.pink,
    orange: p.orange,
    primary: p.cobalt,
    red: p.red,
    yellow: p.amber,
  },
  state: {
    error: p.red,
    warning: p.orange,
    success: p.green,
    info: p.blue,
    hint: p.green,
    added: p.green,
    modified: p.blue,
    deleted: p.red,
    conflict: p.orange,
    untracked: p.cyan,
    indicator: p.amber,
  },
  syntax: {
    boolean: p.azure,
    builtin: p.sapphire,
    class: p.emerald,
    classBuiltin: p.fern,
    comment: p.teal,
    constant: p.aqua,
    decorator: p.apricot,
    function: p.amber,
    functionBuiltin: p.butter,
    import: p.lilac,
    interface: p.cornflower,
    keyword: p.rose,
    namespace: p.steel,
    number: p.pool,
    parameter: p.mistyBlue,
    property: p.sky,
    punctuation: p.pearl,
    readonly: p.iceBlue,
    regex: p.mint,
    string: p.ember,
    type: p.sage,
    variable: p.porcelain,
    variableBuiltin: p.storm,
  },
  utility: {
    peekMatchBackground: applyOpacity(p.signalYellow, 'ghost'),
    terminalAnsiBlack: p.terminalGraphite,
    transparent,
  },
} as const satisfies ThemeColorGroups

export const colorTokens = {
  dark: darkTokens,
  light: lightTokens,
} as const

export function applyOpacity(color: string, level: OpacityLevel | string): string {
  const opacityValue = level in opacity ? opacity[level as OpacityLevel] : level
  return `${color}${opacityValue}`
}
