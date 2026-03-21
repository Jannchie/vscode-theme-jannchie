import { execFileSync } from 'node:child_process'
import path from 'node:path'
import { describe, expect, it } from 'vitest'
import { buildAllThemes } from '../src/core/buildThemes'

describe('theme output', () => {
  it('matches the checked-in generated themes', () => {
    const builtThemes = buildAllThemes()

    for (const builtTheme of builtThemes) {
      const gitPath = path.posix.join('themes', builtTheme.filename)
      const expected = execFileSync('git', ['show', `HEAD:${gitPath}`], {
        encoding: 'utf8',
      })
      const actual = `${JSON.stringify(builtTheme.theme, null, 2)}\n`

      expect(actual).toBe(expected)
    }
  })
})
