import { mkdirSync, writeFileSync } from 'node:fs'
import { buildAllShikiThemes } from './buildShikiThemes'

mkdirSync('./themes', { recursive: true })

for (const builtTheme of buildAllShikiThemes()) {
  writeFileSync(
    `./themes/${builtTheme.filename}`,
    `${JSON.stringify(builtTheme.theme, null, 2)}\n`,
  )
}
