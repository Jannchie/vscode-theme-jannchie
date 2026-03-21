export interface VariantValue<T> {
  dark: T
  light: T
}

// Opacity levels for consistent transparency across theme
export const opacity = {
  full: 'ff', // 100%
  high: 'e6', // 90%
  medium: 'cc', // 80%
  low: 'aa', // 67%
  veil: '99', // 60%
  lower: '80', // 50%
  subtle: '4d', // 30%
  ghost: '33', // 20%
  faint: '1a', // 10%
  barely: '0d', // 5%
} as const

export type OpacityLevel = keyof typeof opacity

// Base color ramps used to derive semantic theme roles
export const scheme = {
  green: ['#e6fcf5', '#d7f5e9', '#b2e9d3', '#89dcbb', '#67d1a7', '#51ca9a', '#43c892', '#33b07e', '#279c6f', '#0f885e'],
  blue: ['#e5f8ff', '#d1ecfd', '#a2d6f8', '#71bff5', '#4babf2', '#36a0f1', '#289af2', '#1b86d7', '#0877c2', '#0066ac'],
  blueGray: ['#f3f3fe', '#e4e6ed', '#c8cad3', '#a9adb9', '#9093a4', '#808496', '#767c91', '#656a7e', '#585e72', '#4a5167'],
  cyan: ['#e0fdff', '#d0f5fa', '#a8e6ef', '#7bd7e6', '#57cbdd', '#3ec4d8', '#2bc0d7', '#13aabf', '#0097ab', '#008397'],
  red: ['#ffebeb', '#fbd7d7', '#efacad', '#e47f7f', '#db5a5a', '#d64141', '#d43434', '#bc2727', '#a81f21', '#94141a'],
  brown: ['#ffefeb', '#f7dfda', '#e5bfb7', '#d39d91', '#c47f71', '#bb6c5c', '#b86250', '#a25242', '#914738', '#813b2e'],
  yellow: ['#fff9e2', '#faf1d0', '#f3e1a6', '#ead078', '#e4c150', '#e0b837', '#deb428', '#c59e18', '#b08c0f', '#977800'],
  orange: ['#fff0e4', '#ffe0cf', '#fac0a1', '#f69e6e', '#f28043', '#f06d27', '#f06418', '#d6530c', '#bf4906', '#a73c00'],
  magenta: ['#ffe9f6', '#ffd1e6', '#faa1c9', '#f66eab', '#f24391', '#f02881', '#f01879', '#d60867', '#c0005c', '#a9004f'],
  background: ['#FFFFFF', '#f7f7f7', '#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0', '#a0a0a0', '#909090', '#808080'],
  neutral: ['#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#525252', '#404040', '#262626', '#171717', '#0f0f0f'],
} as const

const sharedPalette = {
  transparent: '#00000000',
} as const

const lightForegroundBase = '#393a34'
const lightErrorAccent = '#aa3939'
const darkNeutralPanel = scheme.neutral[9]
const darkReadonlyAccent = scheme.blue[3]
const darkVariableAccent = scheme.blue[2]
const darkKeywordAccent = scheme.blue[4]
const darkErrorAccent = scheme.red[3]
const darkFunctionAccent = scheme.yellow[4]
const darkTypeAccent = scheme.green[7]

export const lightSemanticPalette = {
  primary: scheme.blue[4],
  foreground: lightForegroundBase,
  activeForeground: '#4e4f47',
  secondaryForeground: `${lightForegroundBase}${opacity.high}`,
  mutedForeground: `${lightForegroundBase}${opacity.lower}`,
  subtleForeground: `${lightForegroundBase}${opacity.faint}`,
  border: '#f0f0f0',
  background: '#ffffff',
  activeBackground: '#f7f7f7',
  comment: '#547560',
  string: '#c98a7d',
  readonly: '#6d6d6d',
  variable: '#4b4b4b',
  parameter: '#4f75aa',
  variableBuiltin: '#b4b4b4',
  property: '#3184b4',
  keyword: '#196692',
  number: '#207d8b',
  boolean: '#1b577a',
  constant: '#32769e',
  namespace: lightErrorAccent,
  operator: lightErrorAccent,
  builtin: lightErrorAccent,
  function: '#a57610',
  functionBuiltin: '#8f6f18',
  class: '#00855f',
  classBuiltin: '#82a39a',
  type: '#097575',
  interface: '#216a7e',
  punctuation: '#a1a1a1',
  decorator: '#6b5454',
  regex: '#8d4427',
  green: '#116e46',
  cyan: '#2993a3',
  blue: '#1d5e97',
  red: '#ab5959',
  orange: '#a65e2b',
  yellow: '#998114',
  magenta: '#a13865',
} as const

export const darkSemanticPalette = {
  primary: scheme.blue[8],
  foreground: scheme.neutral[3],
  activeForeground: scheme.neutral[4],
  secondaryForeground: `${scheme.neutral[4]}${opacity.medium}`,
  mutedForeground: `${scheme.neutral[4]}${opacity.low}`,
  subtleForeground: `${scheme.neutral[4]}${opacity.faint}`,
  border: darkNeutralPanel,
  background: scheme.neutral[10],
  activeBackground: darkNeutralPanel,
  comment: scheme.green[9],
  string: scheme.brown[4],
  readonly: darkReadonlyAccent,
  variable: darkVariableAccent,
  parameter: darkVariableAccent,
  variableBuiltin: darkVariableAccent,
  property: darkVariableAccent,
  keyword: darkKeywordAccent,
  number: scheme.cyan[7],
  boolean: scheme.blue[6],
  constant: darkReadonlyAccent,
  namespace: darkErrorAccent,
  operator: darkErrorAccent,
  builtin: darkErrorAccent,
  function: darkFunctionAccent,
  functionBuiltin: scheme.yellow[2],
  class: darkTypeAccent,
  classBuiltin: scheme.green[8],
  type: darkTypeAccent,
  interface: darkTypeAccent,
  punctuation: '#8a9099',
  decorator: scheme.brown[3],
  regex: scheme.red[2],
  green: darkTypeAccent,
  cyan: scheme.cyan[4],
  blue: darkKeywordAccent,
  red: scheme.red[4],
  orange: scheme.orange[4],
  yellow: darkFunctionAccent,
  magenta: scheme.magenta[4],
} as const satisfies Record<keyof typeof lightSemanticPalette, string>

export const lightUiPalette = {
  overlayBase: lightForegroundBase,
  guideBase: lightForegroundBase,
  scrollbarShadow: '#6a737d33',
  terminalBlack: lightSemanticPalette.background,
  peekMatchBackground: undefined,
} as const

export const darkUiPalette = {
  overlayBase: '#eeeeee',
  guideBase: '#ffffff',
  scrollbarShadow: '#0000',
  terminalBlack: '#393a34',
  peekMatchBackground: '#ffd33d33',
} as const satisfies Record<keyof typeof lightUiPalette, string | undefined>

export type SharedPaletteRole = keyof typeof sharedPalette
export type SemanticPaletteRole = keyof typeof lightSemanticPalette
export type UiPaletteRole = keyof typeof lightUiPalette

// Central palette entry point for semantic roles and hard-coded UI colors.
export const themePalette = {
  shared: sharedPalette,
  light: {
    semantic: lightSemanticPalette,
    ui: lightUiPalette,
  },
  dark: {
    semantic: darkSemanticPalette,
    ui: darkUiPalette,
  },
  modifiers: {
    soft: {
      dark: {
        background: scheme.neutral[9],
        activeBackground: scheme.neutral[8],
        border: scheme.neutral[8],
      },
      light: {
        background: '#F1F0E9',
        activeBackground: '#E7E5DB',
        border: '#E7E5DB',
      },
    },
    black: {
      dark: {
        foreground: `#dbd7ca${opacity.medium}`,
        background: '#000000',
        activeBackground: '#121212',
        punctuation: `#8a9099${opacity.medium}`,
      },
    },
  },
} as const
