import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { buildAllShikiThemes } from '../packages/shiki/src/buildShikiThemes'
import { buildAllThemes } from '../packages/vscode/src/buildThemes'
import { buildThemeFamily } from '../packages/zed/src/buildThemes'

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

  it('matches the checked-in generated zed theme', () => {
    const themePath = path.resolve('packages/zed/themes', 'jannchie.json')
    const expected = readFileSync(themePath, 'utf8')
    const actual = `${JSON.stringify(buildThemeFamily(), null, 2)}\n`

    expect(actual).toBe(expected)
  })
})
