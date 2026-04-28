/**
 * Named color palettes — the only place hex literals live.
 *
 * Semantic roles (text/surface/accent/state/syntax) reference these names
 * rather than hex codes. To shift a hue across the theme, change the value
 * here once and every consumer follows.
 */

export const lightPalette = {
  // Neutrals
  ink: '#1b1b1b',
  charcoal: '#474747',
  smoke: '#797979',
  pearl: '#a1a1a1',
  silver: '#ececec',
  paper: '#f7f7f7',
  white: '#ffffff',
  cream: '#F1F0E9',
  creamPanel: '#E7E5DB',
  creamEdge: '#dfdcd0',
  inkShadow: '#6a737d33',

  // Chromatic
  red: '#b62626',
  brick: '#c04949',
  rust: '#b84b1c',
  orange: '#a65e2b',
  amber: '#d67200',
  gold: '#d59600',
  yellow: '#fad149',
  olive: '#5e7a1e',
  forest: '#547570',
  emerald: '#0f7d68',
  teal: '#097575',
  pine: '#005e6d',
  cyan: '#2993a3',
  azure: '#3184b4',
  slate: '#3a5a7a',
  sea: '#4f7893',
  steel: '#17477e',
  iris: '#246cbf',
  blue: '#1d5e97',
  cobalt: '#0d6dc7',
  plum: '#825a91',
  purple: '#9b25d1',
  pink: '#a13865',
} as const

export const darkPalette = {
  // Neutrals
  fog: '#d4d4d4',
  mist: '#a3a3a3',
  pearl: '#8a9099',
  ash: '#1f1f1f',
  paper: '#171717',
  canvas: '#0f0f0f',
  editor: '#0d0d0d',
  carbon: '#000000',
  carbonPanel: '#121212',
  carbonEdge: '#1a1a1a',
  carbonEditor: '#000000',
  graphite: '#262626',
  graphiteEdge: '#2c2c2c',
  graphiteEditor: '#141414',
  bone: '#dbd7ca',
  shadow: '#1f1f1f1e',
  guide: '#ffffff',
  overlay: '#eeeeee',
  terminalBlack: '#393a34',

  // Chromatic
  rose: '#ff6e6e',
  red: '#db5a5a',
  pink: '#f24391',
  orange: '#f28043',
  ember: '#c48971',
  apricot: '#d39d91',
  amber: '#fccf3c',
  butter: '#f3e1a6',
  mint: '#cce0a8',
  green: '#34c09d',
  emerald: '#22d3a8',
  jade: '#5cc09d',
  sage: '#86d3b8',
  teal: '#4a8a85',
  cyan: '#57cbdd',
  aqua: '#a8e0eb',
  pool: '#5fd4e0',
  mistyBlue: '#b8d4ed',
  sky: '#71c9ff',
  iceBlue: '#84c4f0',
  azure: '#5db1ff',
  sapphire: '#7aa5e8',
  cornflower: '#7eb6ff',
  blue: '#4babf2',
  cobalt: '#1f8fff',
  steel: '#9fb6ce',
  storm: '#9aa5d4',
  porcelain: '#cfe6ff',
  lilac: '#c490ff',
  peekMatch: '#ffd33d33',
} as const

export type LightPaletteName = keyof typeof lightPalette
export type DarkPaletteName = keyof typeof darkPalette
