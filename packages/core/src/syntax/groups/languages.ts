import type { ColorResolver } from '../../colorResolver'
import type { TokenColor } from '../../types'

/**
 * Language-specific scopes that need highlighting different from the
 * generic TextMate fallbacks (Rust, Go, JSX/TSX, Python decorators, JSON).
 */
export function languageRules(colorResolver: ColorResolver): TokenColor[] {
  const color = colorResolver.resolve.bind(colorResolver)

  return [
    // Rust
    {
      scope: [
        'entity.name.lifetime.rust',
        'storage.modifier.lifetime.rust',
        'punctuation.definition.lifetime.rust',
      ],
      settings: { foreground: color('syntax.keyword'), fontStyle: 'italic' },
    },
    {
      scope: [
        'meta.attribute.rust',
        'punctuation.brackets.attribute.rust',
        'meta.attribute.rust entity.name.function',
      ],
      settings: { foreground: color('syntax.decorator') },
    },
    {
      scope: [
        'entity.name.macro.rust',
        'entity.name.function.macro.rust',
        'support.macro.rust',
      ],
      settings: { foreground: color('syntax.function') },
    },
    {
      scope: [
        'entity.name.namespace.rust',
        'entity.name.module.rust',
      ],
      settings: { foreground: color('syntax.namespace') },
    },
    {
      scope: [
        'storage.type.rust',
        'storage.modifier.mut.rust',
        'storage.modifier.static.rust',
        'storage.modifier.const.rust',
      ],
      settings: { foreground: color('syntax.keyword') },
    },
    {
      scope: [
        'entity.name.type.struct.rust',
        'entity.name.type.enum.rust',
        'entity.name.type.trait.rust',
      ],
      settings: { foreground: color('syntax.class') },
    },

    // Go
    {
      scope: [
        'keyword.import.go',
        'keyword.package.go',
        'keyword.function.go',
        'keyword.var.go',
      ],
      settings: { foreground: color('syntax.keyword') },
    },
    {
      scope: [
        'entity.name.import.go',
        'entity.name.package.go',
      ],
      settings: { foreground: color('syntax.namespace') },
    },
    {
      scope: [
        'entity.name.label.go',
      ],
      settings: { foreground: color('syntax.constant') },
    },
    {
      scope: [
        'support.type.builtin.go',
      ],
      settings: { foreground: color('syntax.builtin') },
    },

    // JSX / TSX — user-defined components use `syntax.class` (emerald),
    // distinct from native intrinsic tags which use `syntax.classBuiltin`.
    {
      scope: [
        'support.class.component.jsx',
        'support.class.component.tsx',
        'entity.name.tag.jsx support.class.component',
        'entity.name.tag.tsx support.class.component',
      ],
      settings: { foreground: color('syntax.class') },
    },

    // SQL — keywords are dense (every clause begins with one), so the global
    // `syntax.keyword` red would dominate the page. Route SQL keywords to
    // `syntax.builtin` (blue) instead: they are DSL vocabulary, not control
    // flow. SQL types stay on the same blue family for visual cohesion.
    {
      scope: [
        'keyword.other.DML.sql',
        'keyword.other.DDL.sql',
        'keyword.other.DCL.sql',
        'keyword.other.LUW.sql',
        'keyword.other.create.sql',
        'keyword.other.alter.sql',
        'keyword.other.alias.sql',
        'keyword.other.sql',
        'keyword.other.authorization.sql',
        'keyword.other.data-integrity.sql',
        'keyword.other.object-comments.sql',
        'keyword.other.cte.sql',
        'storage.modifier.sql',
        'storage.type.sql',
      ],
      settings: { foreground: color('syntax.builtin') },
    },
    {
      scope: [
        'punctuation.definition.tag.begin.jsx',
        'punctuation.definition.tag.end.jsx',
        'punctuation.definition.tag.begin.tsx',
        'punctuation.definition.tag.end.tsx',
      ],
      settings: { foreground: color('syntax.punctuation') },
    },

    // Python
    {
      scope: [
        'meta.function.decorator.python',
        'meta.function.decorator.python entity.name.function',
        'meta.function.decorator.python support.function',
        'punctuation.definition.decorator.python',
      ],
      settings: { foreground: color('syntax.decorator') },
    },
    {
      scope: [
        'support.type.exception.python',
      ],
      settings: { foreground: color('syntax.class') },
    },
    {
      scope: [
        'storage.type.string.python',
        'storage.type.format.python',
      ],
      settings: { foreground: color('syntax.string', 'veil') },
    },

    // JSON
    {
      scope: [
        'support.type.property-name.json',
      ],
      settings: { foreground: color('syntax.property') },
    },

    // C / C++
    {
      scope: [
        'storage.modifier.specifier.cpp',
        'storage.type.modifier.cpp',
        'meta.template.cpp',
      ],
      settings: { foreground: color('syntax.keyword') },
    },
    {
      scope: [
        'entity.name.scope-resolution.cpp',
        'entity.name.namespace.cpp',
      ],
      settings: { foreground: color('syntax.namespace') },
    },

    // Shell / Bash
    {
      scope: [
        'variable.other.normal.shell',
        'variable.other.special.shell',
      ],
      settings: { foreground: color('syntax.variable') },
    },
    {
      scope: [
        'punctuation.definition.variable.shell',
      ],
      settings: { foreground: color('syntax.punctuation') },
    },
  ]
}
