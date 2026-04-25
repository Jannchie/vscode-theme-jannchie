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

const sharedTokens = {
  transparent: '#00000000',
} as const

const lightTokens = {
  accent: {
    blue: '#1d5e97',
    cyan: '#2993a3',
    green: '#116e46',
    magenta: '#a13865',
    orange: '#a65e2b',
    primary: '#4babf2',
    red: '#ab5959',
    yellow: '#b88200',
  },
  base: {
    panel: '#f7f7f7',
    textActive: '#4b4b4b',
    textPrimary: '#393a34',
  },
  surface: {
    border: '#f0f0f0',
    canvas: '#ffffff',
    shadow: '#6a737d33',
  },
  syntax: {
    boolean: '#1b577a',
    class: '#00855f',
    classBuiltin: '#82a39a',
    comment: '#547560',
    constant: '#32769e',
    decorator: '#6b5454',
    function: '#a57610',
    interface: '#216a7e',
    namespace: '#aa3939',
    number: '#207d8b',
    parameter: '#4f75aa',
    property: '#3184b4',
    punctuation: '#a1a1a1',
    readonly: '#6d6d6d',
    regex: '#8d4427',
    string: '#c98a7d',
    type: '#097575',
    variableBuiltin: '#b4b4b4',
  },
  utility: {
    peekMatchBackground: undefined,
    terminalBlack: '#ffffff',
  },
} as const

const darkTokens = {
  accent: {
    blue: '#4babf2',
    cyan: '#57cbdd',
    green: '#33b07e',
    magenta: '#f24391',
    orange: '#f28043',
    primary: '#0877c2',
    red: '#db5a5a',
    yellow: '#e4c150',
  },
  base: {
    panel: '#171717',
    textActive: '#a3a3a3',
    textPrimary: '#d4d4d4',
  },
  surface: {
    border: '#171717',
    canvas: '#0f0f0f',
    guide: '#ffffff',
    overlay: '#eeeeee',
    shadow: '#0000',
  },
  syntax: {
    boolean: '#289af2',
    class: '#33b07e',
    classBuiltin: '#279c6f',
    comment: '#0f885e',
    constant: '#71bff5',
    decorator: '#d39d91',
    function: '#e4c150',
    functionBuiltin: '#f3e1a6',
    namespace: '#e47f7f',
    number: '#13aabf',
    punctuation: '#8a9099',
    readonly: '#71bff5',
    regex: '#efacad',
    string: '#c47f71',
    variable: '#a2d6f8',
  },
  utility: {
    peekMatchBackground: '#ffd33d33',
    terminalBlack: '#393a34',
  },
} as const

export const colorTokens = {
  dark: darkTokens,
  light: lightTokens,
  shared: sharedTokens,
} as const

export function applyOpacity(color: string, level: OpacityLevel | string): string {
  const opacityValue = level in opacity ? opacity[level as OpacityLevel] : level
  return `${color}${opacityValue}`
}
