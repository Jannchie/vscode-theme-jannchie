import type { ThemeColorGroups } from './colorTypes'

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

const transparent = '#00000000'

const lightTokens = {
  text: {
    primary: '#1b1b1b',
    chrome: '#474747',
    secondary: applyOpacity('#1b1b1b', 'high'),
    muted: applyOpacity('#1b1b1b', 'lower'),
    subtle: applyOpacity('#1b1b1b', 'faint'),
  },
  surface: {
    canvas: '#ffffff',
    panel: '#f7f7f7',
    border: '#ececec',
    overlay: '#1b1b1b',
    guide: '#1b1b1b',
    shadow: '#6a737d33',
  },
  accent: {
    blue: '#1d5e97',
    cyan: '#2993a3',
    green: '#0f7d68',
    magenta: '#a13865',
    orange: '#a65e2b',
    primary: '#0d6dc7',
    red: '#b62626',
    yellow: '#fad149',
  },
  syntax: {
    import: '#9b25d1',
    boolean: '#17477e',
    builtin: '#246cbf',
    class: '#008a73',
    classBuiltin: '#236958',
    comment: '#547570',
    keyword: '#c04949',
    constant: '#005e6d',
    decorator: '#825a91',
    function: '#d67200',
    functionBuiltin: '#d67200',
    interface: '#216a7e',
    namespace: '#246cbf',
    number: '#1f808c',
    operator: '#246cbf',
    parameter: '#6f4d95',
    property: '#3184b4',
    punctuation: '#a1a1a1',
    readonly: '#4f7893',
    regex: '#5e7a1e',
    string: '#b84b1c',
    type: '#097575',
    variable: '#474747',
    variableBuiltin: '#686868',
  },
  utility: {
    peekMatchBackground: undefined,
    terminalBlack: '#ffffff',
    transparent,
  },
} as const satisfies ThemeColorGroups

const darkTokens = {
  text: {
    primary: '#d4d4d4',
    chrome: '#a3a3a3',
    secondary: applyOpacity('#a3a3a3', 'medium'),
    muted: applyOpacity('#a3a3a3', 'low'),
    subtle: applyOpacity('#a3a3a3', 'faint'),
  },
  surface: {
    canvas: '#0f0f0f',
    panel: '#171717',
    border: '#1f1f1f',
    overlay: '#eeeeee',
    guide: '#ffffff',
    shadow: '#1f1f1f1e',
  },
  accent: {
    blue: '#4babf2',
    cyan: '#57cbdd',
    green: '#34c09d',
    magenta: '#f24391',
    orange: '#f28043',
    primary: '#1f8fff',
    red: '#db5a5a',
    yellow: '#fccf3c',
  },
  syntax: {
    import: '#c490ff',
    boolean: '#5db1ff',
    builtin: '#7aa5e8',
    class: '#22d3a8',
    classBuiltin: '#5cc09d',
    comment: '#4a8a85',
    keyword: '#ff6e6e',
    constant: '#a8e0eb',
    decorator: '#d39d91',
    function: '#fccf3c',
    functionBuiltin: '#f3e1a6',
    interface: '#7eb6ff',
    namespace: '#9fb6ce',
    number: '#5fd4e0',
    operator: '#3187e9',
    parameter: '#c5a8e8',
    property: '#71c9ff',
    punctuation: '#8a9099',
    readonly: '#84c4f0',
    regex: '#cce0a8',
    string: '#c48971',
    type: '#86d3b8',
    variable: '#cfe6ff',
    variableBuiltin: '#9aa5d4',
  },
  utility: {
    peekMatchBackground: '#ffd33d33',
    terminalBlack: '#393a34',
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
