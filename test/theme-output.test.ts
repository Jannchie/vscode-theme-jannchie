import { readFileSync } from 'node:fs'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { buildAllThemes } from '../src/core/buildThemes'

describe('theme output', () => {
  it('matches the checked-in generated themes', () => {
    const builtThemes = buildAllThemes()

    for (const builtTheme of builtThemes) {
      const themePath = path.resolve('themes', builtTheme.filename)
      const expected = readFileSync(themePath, 'utf8')
      const actual = `${JSON.stringify(builtTheme.theme, null, 2)}\n`

      expect(actual).toBe(expected)
    }
  })
})
