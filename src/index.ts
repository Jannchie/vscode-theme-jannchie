import { mkdirSync, writeFileSync } from 'node:fs'
import { buildAllThemes } from './core/buildThemes'

mkdirSync('./themes', { recursive: true })

for (const builtTheme of buildAllThemes()) {
  writeFileSync(
    `./themes/${builtTheme.filename}`,
    `${JSON.stringify(builtTheme.theme, null, 2)}\n`,
  )
}
