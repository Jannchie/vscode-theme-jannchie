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
    active: '#474747',
    secondary: applyOpacity('#1b1b1b', 'high'),
    muted: applyOpacity('#1b1b1b', 'lower'),
    subtle: applyOpacity('#1b1b1b', 'faint'),
  },
  surface: {
    canvas: '#ffffff',
    panel: '#f7f7f7',
    border: '#f0f0f0',
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
    primary: '#4babf2',
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
    decorator: '#6b5454',
    function: '#d67200',
    functionBuiltin: '#d67200',
    interface: '#216a7e',
    namespace: '#246cbf',
    number: '#1f808c',
    operator: '#246cbf',
    parameter: '#435268',
    property: '#3184b4',
    punctuation: '#a1a1a1',
    readonly: '#4f7893',
    regex: '#8d4427',
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
    active: '#a3a3a3',
    secondary: applyOpacity('#a3a3a3', 'medium'),
    muted: applyOpacity('#a3a3a3', 'low'),
    subtle: applyOpacity('#a3a3a3', 'faint'),
  },
  surface: {
    canvas: '#0f0f0f',
    panel: '#171717',
    border: '#171717',
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
    primary: '#0877c2',
    red: '#db5a5a',
    yellow: '#fccf3c',
  },
  syntax: {
    import: '#ff6e6e',
    boolean: '#3187e9',
    builtin: '#3187e9',
    class: '#05b99b',
    classBuiltin: '#34c09d',
    comment: '#277570',
    keyword: '#ff6e6e',
    constant: '#57cbdd',
    decorator: '#d39d91',
    function: '#fccf3c',
    functionBuiltin: '#f3e1a6',
    interface: '#05b99b',
    namespace: '#3187e9',
    number: '#20cae0',
    operator: '#3187e9',
    parameter: '#71c9ff',
    property: '#71c9ff',
    punctuation: '#8a9099',
    readonly: '#b0deff',
    regex: '#efacad',
    string: '#c48971',
    type: '#05b99b',
    variable: '#71c9ff',
    variableBuiltin: '#71c9ff',
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
