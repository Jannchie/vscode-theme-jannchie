import jannchieBlackJson from '../themes/jannchie-black.json'
import jannchieDarkSoftJson from '../themes/jannchie-dark-soft.json'
import jannchieDarkJson from '../themes/jannchie-dark.json'
import jannchieLightSoftJson from '../themes/jannchie-light-soft.json'
import jannchieLightJson from '../themes/jannchie-light.json'

export interface ShikiTokenColor {
  scope: string | string[]
  settings: {
    background?: string
    fontStyle?: string
    foreground?: string
    [key: string]: unknown
  }
}

export interface JannchieShikiTheme {
  bg: string
  displayName: string
  fg: string
  name: string
  settings: ShikiTokenColor[]
  tokenColors: ShikiTokenColor[]
  type: 'dark' | 'light'
}

const jannchieBlack = jannchieBlackJson as JannchieShikiTheme
const jannchieDark = jannchieDarkJson as JannchieShikiTheme
const jannchieDarkSoft = jannchieDarkSoftJson as JannchieShikiTheme
const jannchieLight = jannchieLightJson as JannchieShikiTheme
const jannchieLightSoft = jannchieLightSoftJson as JannchieShikiTheme

export {
  jannchieBlack,
  jannchieDark,
  jannchieDarkSoft,
  jannchieLight,
  jannchieLightSoft,
}

export const themes = [
  jannchieDark,
  jannchieDarkSoft,
  jannchieBlack,
  jannchieLight,
  jannchieLightSoft,
]

export default themes
