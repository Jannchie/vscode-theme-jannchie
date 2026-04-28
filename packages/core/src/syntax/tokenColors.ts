import type { ColorResolver } from '../colorResolver'
import type { TokenColor } from '../types'
import { diffRules } from './groups/diff'
import { generalRules } from './groups/general'
import { languageRules } from './groups/languages'
import { markdownRules } from './groups/markdown'
import { markupRules } from './groups/markup'

export function buildTokenColors(colorResolver: ColorResolver): TokenColor[] {
  return [
    ...generalRules(colorResolver),
    ...markupRules(colorResolver),
    ...markdownRules(colorResolver),
    ...diffRules(colorResolver),
    ...languageRules(colorResolver),
  ]
}
