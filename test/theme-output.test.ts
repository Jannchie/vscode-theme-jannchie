import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { buildAllShikiThemes } from '../packages/shiki/src/buildShikiThemes'
import { buildAllThemes } from '../packages/vscode/src/buildThemes'

describe('theme output', () => {
  it('matches the checked-in generated vs code themes', () => {
    const builtThemes = buildAllThemes()

    for (const builtTheme of builtThemes) {
      const themePath = path.resolve('packages/vscode/themes', builtTheme.filename)
      const expected = readFileSync(themePath, 'utf8')
      const actual = `${JSON.stringify(builtTheme.theme, null, 2)}\n`

      expect(actual).toBe(expected)
    }
  })

  it('matches the checked-in generated shiki themes', () => {
    const builtThemes = buildAllShikiThemes()

    for (const builtTheme of builtThemes) {
      const themePath = path.resolve('packages/shiki/themes', builtTheme.filename)
      const expected = readFileSync(themePath, 'utf8')
      const actual = `${JSON.stringify(builtTheme.theme, null, 2)}\n`

      expect(actual).toBe(expected)
    }
  })
})
