import { scheme } from './colorPalette'
import { opacity } from './opacity'

// Color pair: [dark, light]
export type ColorPair = [string, string]

export interface SemanticColorConfig {
  // Core theme colors
  primary: ColorPair
  
  // Text colors
  foreground: ColorPair
  activeForeground: ColorPair
  secondaryForeground: ColorPair
  mutedForeground: ColorPair
  subtleForeground: ColorPair
  
  // Special foreground colors
  blackForeground: ColorPair
  
  // Background colors
  background: ColorPair
  activeBackground: ColorPair
  border: ColorPair
  
  // Theme variant backgrounds
  softBackground: ColorPair
  softActiveBackground: ColorPair
  softBorder: ColorPair
  blackBackground: ColorPair
  blackActiveBackground: ColorPair

  // Syntax highlighting colors
  comment: ColorPair
  string: ColorPair
  readonly: ColorPair
  variable: ColorPair
  parameter: ColorPair
  variableBuiltin: ColorPair
  property: ColorPair
  keyword: ColorPair
  number: ColorPair
  boolean: ColorPair
  constant: ColorPair
  namespace: ColorPair
  operator: ColorPair
  builtin: ColorPair
  function: ColorPair
  functionBuiltin: ColorPair
  class: ColorPair
  classBuiltin: ColorPair
  type: ColorPair
  interface: ColorPair
  punctuation: ColorPair
  decorator: ColorPair
  regex: ColorPair

  // Status colors
  green: ColorPair
  cyan: ColorPair
  blue: ColorPair
  red: ColorPair
  orange: ColorPair
  yellow: ColorPair
  magenta: ColorPair
}

export const semanticColors: SemanticColorConfig = {
  primary: [scheme.blue[8], scheme.blue[4]],

  // Text colors
  foreground: [scheme.neutral[3], '#393a34'],
  activeForeground: [scheme.neutral[4], '#4e4f47'],
  secondaryForeground: [`${scheme.neutral[4]}${opacity.medium}`, `#393a34${opacity.high}`],
  mutedForeground: [`${scheme.neutral[4]}${opacity.low}`, `#393a34${opacity.lower}`],
  subtleForeground: [`${scheme.neutral[4]}${opacity.faint}`, `#393a34${opacity.faint}`],
  
  // Black theme special foreground
  blackForeground: [`#dbd7ca${opacity.medium}`, '#393a34'],
  
  // Borders and backgrounds
  border: [scheme.neutral[9], '#f0f0f0'],
  background: [scheme.neutral[10], '#ffffff'],
  activeBackground: [scheme.neutral[9], '#f7f7f7'],
  
  // Soft theme variants
  softBackground: [scheme.neutral[9], '#F1F0E9'],
  softActiveBackground: [scheme.neutral[8], '#E7E5DB'],
  softBorder: [scheme.neutral[8], '#E7E5DB'],
  
  // Black theme variants
  blackBackground: ['#000000', '#ffffff'],
  blackActiveBackground: ['#121212', '#f7f7f7'],

  // Syntax highlighting colors (preserving exact original values)
  comment: [scheme.green[9], '#547560'],
  string: [scheme.brown[4], '#c98a7d'],
  readonly: [scheme.blue[3], '#6d6d6d'],
  variable: [scheme.blue[2], '#4b4b4b'],
  parameter: [scheme.blue[2], '#4f75aa'],
  variableBuiltin: [scheme.blue[2], '#b4b4b4'],
  property: [scheme.blue[2], '#3184b4'],
  keyword: [scheme.blue[4], '#196692'],
  number: [scheme.cyan[7], '#207d8b'],
  boolean: [scheme.blue[6], '#1b577a'],
  constant: [scheme.blue[3], '#32769e'],
  namespace: [scheme.red[3], '#aa3939'],
  operator: [scheme.red[3], '#aa3939'],
  builtin: [scheme.red[3], '#aa3939'],
  function: [scheme.yellow[4], '#a57610'],
  functionBuiltin: [scheme.yellow[2], '#8f6f18'],
  class: [scheme.green[7], '#00855f'],
  classBuiltin: [scheme.green[8], '#82a39a'],
  type: [scheme.green[7], '#097575'],
  interface: [scheme.green[7], '#216a7e'],
  punctuation: ['#8a9099', '#a1a1a1'],
  decorator: [scheme.brown[3], '#6b5454'],
  regex: [scheme.red[2], '#8d4427'],

  // Status colors
  green: [scheme.green[7], '#116e46'],
  cyan: [scheme.cyan[4], '#2993a3'],
  blue: [scheme.blue[4], '#1d5e97'],
  red: [scheme.red[4], '#ab5959'],
  orange: [scheme.orange[4], '#a65e2b'],
  yellow: [scheme.yellow[4], '#998114'],
  magenta: [scheme.magenta[4], '#a13865'],
}