import { mkdirSync, writeFileSync } from 'node:fs'
import { buildAllShikiThemes } from './buildShikiThemes'

const JSON_EXTENSION_RE = /\.json$/
const THEME_EXPORT_ORDER = [
  'jannchieDark',
  'jannchieDarkSoft',
  'jannchieBlack',
  'jannchieLight',
  'jannchieLightSoft',
]

mkdirSync('./themes', { recursive: true })
mkdirSync('./dist', { recursive: true })

const builtThemes = buildAllShikiThemes()

for (const builtTheme of builtThemes) {
  writeFileSync(
    `./themes/${builtTheme.filename}`,
    `${JSON.stringify(builtTheme.theme, null, 2)}\n`,
  )
}

const exportItems = builtThemes.map(builtTheme => ({
  name: toExportName(builtTheme.filename),
  theme: builtTheme.theme,
}))

writeFileSync('./dist/index.js', buildIndexJs(exportItems))
writeFileSync('./dist/index.d.ts', buildIndexDts(exportItems.map(item => item.name)))

function toExportName(filename: string): string {
  const [first = '', ...rest] = filename.replace(JSON_EXTENSION_RE, '').split('-')
  return [
    first,
    ...rest.map(part => `${part.charAt(0).toUpperCase()}${part.slice(1)}`),
  ].join('')
}

function buildIndexJs(items: Array<{ name: string, theme: unknown }>): string {
  const declarations = items
    .map(item => `const ${item.name} = ${JSON.stringify(item.theme, null, 2)}`)
    .join('\n\n')
  const names = items.map(item => item.name)
  const themeNames = THEME_EXPORT_ORDER.filter(name => names.includes(name))

  return `${declarations}

const themes = [
  ${themeNames.join(',\n  ')},
]

export {
  ${[...names, 'themes'].join(',\n  ')},
}

export default themes
`
}

function buildIndexDts(names: string[]): string {
  return `export interface ShikiTokenColor {
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

${names.map(name => `export declare const ${name}: JannchieShikiTheme`).join('\n')}
export declare const themes: JannchieShikiTheme[]

export default themes
`
}
