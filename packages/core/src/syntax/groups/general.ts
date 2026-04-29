import type { ColorResolver } from '../../colorResolver'
import type { TokenColor } from '../../types'

/**
 * Language-agnostic TextMate scopes (comments, strings, keywords, variables).
 */
export function generalRules(colorResolver: ColorResolver): TokenColor[] {
  const color = colorResolver.resolve.bind(colorResolver)
  const punctuation = color('syntax.punctuation')
  const foreground = color('text.primary')
  const background = color('surface.canvas')

  return [
    {
      scope: [
        'comment',
        'punctuation.definition.comment',
        'string.comment',
      ],
      settings: { foreground: color('syntax.comment') },
    },
    {
      scope: [
        'delimiter.bracket',
        'delimiter',
        'invalid.illegal.character-not-allowed-here.html',
        'keyword.operator.rest',
        'keyword.operator.spread',
        'keyword.operator.type.annotation',
        'keyword.operator.relational',
        'keyword.operator.assignment',
        'meta.brace',
        'meta.tag.block.any.html',
        'meta.tag.inline.any.html',
        'meta.tag.structure.input.void.html',
        'meta.type.annotation',
        'meta.embedded.block.github-actions-expression',
        'storage.type.function.arrow',
        'keyword.operator.type',
        'meta.objectliteral.ts',
        'punctuation',
      ],
      settings: { foreground: punctuation },
    },
    {
      scope: [
        'constant',
        'entity.name.constant',
        'variable.language',
        'meta.definition.variable',
      ],
      settings: { foreground: color('syntax.constant') },
    },
    {
      scope: ['entity', 'entity.name'],
      settings: { foreground },
    },
    {
      scope: 'variable.parameter.function',
      settings: { foreground },
    },
    {
      // Native markup tags (HTML/Vue/Svelte/JSX intrinsic). They are the
      // language's built-in vocabulary, so they share `syntax.classBuiltin`
      // with `class.defaultLibrary` and CSS type selectors (see markup.ts).
      scope: ['entity.name.tag', 'tag.html'],
      settings: { foreground: color('syntax.classBuiltin') },
    },
    {
      scope: ['entity.other.attribute-name.html.meta.attribute.class.html'],
      settings: { foreground: color('syntax.type') },
    },
    {
      // User-defined components (Vue / JSX / Svelte). They are the user's own
      // declarations — like a class — and so share `syntax.class` (emerald),
      // visually distinct from the built-in markup tags above.
      scope: [
        'support.class.component',
        'support.class.component.html',
        'support.class.component.jsx',
        'support.class.component.tsx',
        'meta.tag.other.unrecognized.html.derivative entity.name.tag',
      ],
      settings: { foreground: color('syntax.class') },
    },
    {
      scope: 'entity.name.function',
      settings: { foreground: color('syntax.function') },
    },
    {
      scope: ['keyword', 'storage.type.class.jsdoc'],
      settings: { foreground: color('syntax.keyword') },
    },
    {
      scope: ['storage', 'storage.type'],
      settings: { foreground: color('syntax.keyword') },
    },
    {
      scope: [
        'support.type.builtin',
        'constant.language.undefined',
        'constant.language.null',
      ],
      settings: { foreground: color('syntax.builtin') },
    },
    {
      scope: [
        'text.html.derivative',
        'storage.modifier.package',
        'storage.modifier.import',
        'storage.type.java',
      ],
      settings: { foreground },
    },
    {
      scope: [
        'string',
        'string punctuation.section.embedded source',
        'attribute.value',
      ],
      settings: { foreground: color('syntax.string') },
    },
    {
      scope: [
        'variable.other.object',
        'variable.other.readwrite',
      ],
      settings: { foreground: color('syntax.variable') },
    },
    {
      scope: [
        'variable.other.object.property',
        'variable.other.property',
      ],
      settings: { foreground: color('syntax.property') },
    },
    {
      scope: ['meta.function-call'],
      settings: { foreground: color('syntax.function') },
    },
    {
      scope: [
        'punctuation.definition.string',
        'punctuation.support.type.property-name',
      ],
      settings: { foreground: color('syntax.string', 'veil') },
    },
    {
      scope: ['support', 'support.type.property-name.toml'],
      settings: { foreground: color('syntax.property') },
    },
    {
      scope: [
        'support.type.property-name.table.toml',
        'support.type.property-name.array.toml',
      ],
      settings: { foreground: color('syntax.function') },
    },
    {
      scope: [
        'property',
        'meta.property-name',
        'meta.object-literal.key',
        'entity.name.tag.yaml',
        'attribute.name',
      ],
      settings: { foreground: color('syntax.property') },
    },
    {
      scope: ['variable', 'identifier'],
      settings: { foreground: color('syntax.variable') },
    },
    {
      scope: ['variable.other.constant'],
      settings: { foreground: color('syntax.constant') },
    },
    {
      scope: [
        'support.type.primitive',
        'entity.name.type',
      ],
      settings: { foreground: color('syntax.type') },
    },
    {
      scope: 'namespace',
      settings: { foreground: color('syntax.namespace') },
    },
    {
      scope: [
        'keyword.operator',
        'keyword.operator.assignment.compound',
        'meta.var.expr.ts',
      ],
      settings: { foreground: punctuation },
    },
    {
      scope: [
        'keyword.control',
        'keyword.operator.new',
        'keyword.operator.expression',
        'keyword.operator.cast',
        'keyword.operator.sizeof',
        'keyword.operator.alignof',
        'keyword.operator.typeid',
        'keyword.operator.alignas',
        'keyword.operator.instanceof',
        'keyword.operator.logical.python',
        'keyword.operator.wordlike',
        'keyword.operator.noexcept',
      ],
      settings: { foreground: color('syntax.keyword') },
    },
    {
      scope: ['keyword.control.import'],
      settings: { foreground: color('syntax.import') },
    },
    {
      scope: 'invalid.broken',
      settings: { fontStyle: 'italic', foreground: color('accent.red') },
    },
    {
      scope: 'invalid.deprecated',
      settings: { fontStyle: 'italic', foreground: color('accent.red') },
    },
    {
      scope: 'invalid.illegal',
      settings: { fontStyle: 'italic', foreground: color('accent.red') },
    },
    {
      scope: 'invalid.unimplemented',
      settings: { fontStyle: 'italic', foreground: color('accent.red') },
    },
    {
      scope: 'carriage-return',
      settings: {
        fontStyle: 'italic underline',
        background: color('accent.red'),
        foreground: background,
        content: '^M',
      },
    },
    {
      scope: 'message.error',
      settings: { foreground: color('accent.red') },
    },
    {
      scope: 'string variable',
      settings: { foreground: color('syntax.string') },
    },
    {
      scope: ['source.regexp', 'string.regexp'],
      settings: { foreground: color('syntax.regex') },
    },
    {
      scope: 'constant.regexp',
      settings: { foreground: color('syntax.regex') },
    },
    {
      scope: [
        'string.regexp.character-class',
        'string.regexp constant.character.escape',
        'string.regexp source.ruby.embedded',
        'string.regexp string.regexp.arbitrary-repitition',
      ],
      settings: { foreground: color('syntax.string') },
    },
    {
      scope: 'string.regexp constant.character.escape',
      settings: { foreground: color('accent.yellow') },
    },
    {
      scope: ['support.constant'],
      settings: { foreground: color('syntax.constant') },
    },
    {
      scope: ['constant.numeric', 'number'],
      settings: { foreground: color('syntax.number') },
    },
    {
      scope: ['keyword.other.unit'],
      settings: { foreground: color('syntax.builtin') },
    },
    {
      scope: ['constant.language.boolean', 'constant.language'],
      settings: { foreground: color('syntax.boolean') },
    },
    {
      scope: 'meta.module-reference',
      settings: { foreground: color('accent.primary') },
    },
    {
      scope: [
        'meta.embedded',
        'source.groovy.embedded',
        'meta.embedded.assembly',
        'source.coffee.embedded',
        'punctuation.section.embedded',
        'string meta.image.inline.markdown',
        'variable.legacy.builtin.python',
        'meta.template.expression',
      ],
      settings: { foreground },
    },
    {
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded.begin.php',
        'punctuation.section.embedded.end.php',
      ],
      settings: { foreground: color('syntax.keyword') },
    },
    {
      scope: ['meta.preprocessor', 'entity.name.function.preprocessor'],
      settings: { foreground: color('syntax.keyword') },
    },
    {
      scope: 'meta.preprocessor.string',
      settings: { foreground: color('syntax.string') },
    },
    {
      scope: 'meta.preprocessor.numeric',
      settings: { foreground: color('syntax.number') },
    },
    {
      scope: ['string.tag', 'string.value'],
      settings: { foreground: color('syntax.string') },
    },
    {
      scope: [
        'keyword.operator.plus.exponent',
        'keyword.operator.minus.exponent',
      ],
      settings: { foreground: color('syntax.number') },
    },
    {
      scope: [
        'storage.modifier',
        'storage.modifier.import.java',
        'storage.modifier.package.java',
      ],
      settings: { foreground: color('syntax.keyword') },
    },
    {
      scope: 'variable.language.wildcard.java',
      settings: { foreground },
    },
    {
      scope: ['invalid'],
      settings: { foreground: color('accent.red') },
    },
    {
      scope: 'punctuation.definition.tag',
      settings: { foreground: punctuation },
    },
    {
      scope: ['invalid.illegal.unrecognized-tag.html'],
      settings: { fontStyle: 'normal' },
    },
    {
      scope: [
        'type.identifier',
      ],
      settings: { foreground: color('syntax.class') },
    },
    {
      scope: [
        'entity.other.attribute-name',
        'support.type.property-name',
        'support.type.vendored.property-name',
        'meta.structure.dictionary.key.python',
      ],
      settings: { foreground: color('syntax.property') },
    },
  ]
}
