import { mkdirSync, writeFileSync } from 'node:fs'
import { buildThemeFamily } from './buildThemes'

mkdirSync('./themes', { recursive: true })

writeFileSync(
  './themes/jannchie.json',
  `${JSON.stringify(buildThemeFamily(), null, 2)}\n`,
)
