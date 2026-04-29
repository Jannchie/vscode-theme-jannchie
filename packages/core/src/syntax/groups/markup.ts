import type { ColorResolver } from '../../colorResolver'
import type { TokenColor } from '../../types'

/**
 * HTML / CSS / SCSS / Less / Git-rebase markup scopes.
 */
export function markupRules(colorResolver: ColorResolver): TokenColor[] {
  const color = colorResolver.resolve.bind(colorResolver)

  return [
    {
      scope: ['entity.other.attribute-name.html'],
      settings: { foreground: color('syntax.parameter') },
    },
    {
      // HTML id="x" — colored as the matching CSS `#x` selector so that the
      // identifier reference is visually paired across files. Mirrors the
      // existing rule for class="x" ↔ `.x` (in general.ts).
      scope: [
        'entity.other.attribute-name.html.meta.attribute.id.html',
        'meta.attribute.id.html string.quoted',
      ],
      settings: { foreground: color('syntax.type') },
    },
    {
      // CSS type selectors (`body`, `a`, …) reference HTML built-in element
      // names, so they share `syntax.classBuiltin` with `entity.name.tag`
      // for identifier correspondence across files.
      scope: ['entity.name.tag.css', 'entity.name.tag.less'],
      settings: { foreground: color('syntax.classBuiltin') },
    },
    {
      scope: [
        'entity.other.attribute-name.class.css',
        'source.css entity.other.attribute-name.class',
        'entity.other.attribute-name.id.css',
        'entity.other.attribute-name.parent-selector.css',
        'entity.other.attribute-name.parent.less',
        'source.css entity.other.attribute-name.pseudo-class',
        'entity.other.attribute-name.pseudo-element.css',
        'source.css.less entity.other.attribute-name.id',
        'entity.other.attribute-name.scss',
      ],
      settings: { foreground: color('syntax.type') },
    },
    {
      scope: [
        'source.css variable',
        'support.function.git-rebase',
      ],
      settings: { foreground: color('syntax.property') },
    },
    {
      scope: [
        'constant.sha.git-rebase',
        'variable.other.enummember',
      ],
      settings: { foreground: color('syntax.constant') },
    },
  ]
}
