import type { ColorResolver } from '../core/colorResolver'

export function buildTokenColors(colorResolver: ColorResolver) {
  const color = colorResolver.resolve.bind(colorResolver)

  const punctuation = color('syntax.punctuation')
  const foreground = color('text.primary')
  const background = color('surface.canvas')
  const mutedForeground = color('text.muted')
  const primary = color('accent.primary')

  return [
    {
      scope: [
        'comment',
        'punctuation.definition.comment',
        'string.comment',
      ],
      settings: {
        foreground: color('syntax.comment'),
      },
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
      settings: {
        foreground: punctuation,
      },
    },
    {
      scope: [
        'constant',
        'entity.name.constant',
        'variable.language',
        'meta.definition.variable',
      ],
      settings: {
        foreground: color('syntax.constant'),
      },
    },
    {
      scope: ['entity', 'entity.name'],
      settings: {
        foreground,
      },
    },
    {
      scope: 'variable.parameter.function',
      settings: {
        foreground,
      },
    },
    {
      scope: [
        'entity.name.tag',
        'tag.html',
      ],
      settings: {
        foreground: color('syntax.keyword'),
      },
    },
    {
      scope: [
        'entity.other.attribute-name.html.meta.attribute.class.html',
        'support.class.component',
      ],
      settings: {
        foreground: color('syntax.type'),
      },
    },
    {
      scope: 'entity.name.function',
      settings: {
        foreground: color('syntax.function'),
      },
    },
    {
      scope: [
        'keyword',
        'storage.type.class.jsdoc',
      ],
      settings: {
        foreground: color('syntax.keyword'),
      },
    },
    {
      scope: [
        'storage',
        'storage.type',
      ],
      settings: {
        foreground: color('syntax.keyword'),
      },
    },
    {
      scope: [
        'support.type.builtin',
        'constant.language.undefined',
        'constant.language.null',
      ],
      settings: {
        foreground: color('syntax.builtin'),
      },
    },
    {
      scope: [
        'text.html.derivative',
        'storage.modifier.package',
        'storage.modifier.import',
        'storage.type.java',
      ],
      settings: {
        foreground,
      },
    },
    {
      scope: [
        'string',
        'string punctuation.section.embedded source',
        'attribute.value',
      ],
      settings: {
        foreground: color('syntax.string'),
      },
    },
    {
      scope: [
        'variable.other.object',
        'variable.other.readwrite',
      ],
      settings: {
        foreground: color('syntax.variable'),
      },
    },
    {
      scope: [
        'variable.other.object.property',
        'variable.other.property',
      ],
      settings: {
        foreground: color('syntax.property'),
      },
    },
    {
      scope: [
        'meta.function-call',
      ],
      settings: {
        foreground: color('syntax.function'),
      },
    },
    {
      scope: [
        'punctuation.definition.string',
        'punctuation.support.type.property-name',
      ],
      settings: {
        foreground: color('syntax.string', 'veil'),
      },
    },
    {
      scope: ['support', 'support.type.property-name.toml'],
      settings: {
        foreground: color('syntax.property'),
      },
    },
    {
      scope: [
        'support.type.property-name.table.toml',
        'support.type.property-name.array.toml',
      ],
      settings: {
        foreground: color('syntax.function'),
      },
    },
    {
      scope: [
        'property',
        'meta.property-name',
        'meta.object-literal.key',
        'entity.name.tag.yaml',
        'attribute.name',
      ],
      settings: {
        foreground: color('syntax.property'),
      },
    },
    {
      scope: [
        'variable',
        'identifier',
      ],
      settings: {
        foreground: color('syntax.variable'),
      },
    },
    {
      scope: [
        'variable.other.constant',
      ],
      settings: {
        foreground: color('syntax.constant'),
      },
    },
    {
      scope: [
        'support.type.primitive',
        'entity.name.type',
      ],
      settings: {
        foreground: color('syntax.type'),
      },
    },
    {
      scope: 'namespace',
      settings: {
        foreground: color('syntax.namespace'),
      },
    },
    {
      scope: [
        'keyword.operator',
        'keyword.operator.assignment.compound',
        'meta.var.expr.ts',
      ],
      settings: {
        foreground: punctuation,
      },
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
      settings: {
        foreground: color('syntax.keyword'),
      },
    },
    {
      scope: 'invalid.broken',
      settings: {
        fontStyle: 'italic',
        foreground: color('accent.red'),
      },
    },
    {
      scope: 'invalid.deprecated',
      settings: {
        fontStyle: 'italic',
        foreground: color('accent.red'),
      },
    },
    {
      scope: 'invalid.illegal',
      settings: {
        fontStyle: 'italic',
        foreground: color('accent.red'),
      },
    },
    {
      scope: 'invalid.unimplemented',
      settings: {
        fontStyle: 'italic',
        foreground: color('accent.red'),
      },
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
      settings: {
        foreground: color('accent.red'),
      },
    },
    {
      scope: 'string variable',
      settings: {
        foreground: color('syntax.string'),
      },
    },
    {
      scope: ['source.regexp', 'string.regexp'],
      settings: {
        foreground: color('syntax.regex'),
      },
    },
    {
      scope: 'constant.regexp',
      settings: {
        foreground: color('syntax.regex'),
      },
    },
    {
      scope: [
        'string.regexp.character-class',
        'string.regexp constant.character.escape',
        'string.regexp source.ruby.embedded',
        'string.regexp string.regexp.arbitrary-repitition',
      ],
      settings: {
        foreground: color('syntax.string'),
      },
    },
    {
      scope: 'string.regexp constant.character.escape',
      settings: {
        foreground: color('accent.yellow'),
      },
    },
    {
      scope: [
        'support.constant',
      ],
      settings: {
        foreground: color('syntax.constant'),
      },
    },
    {
      scope: [
        'constant.numeric',
        'number',
      ],
      settings: {
        foreground: color('syntax.number'),
      },
    },
    {
      scope: [
        'keyword.other.unit',
      ],
      settings: {
        foreground: color('syntax.builtin'),
      },
    },
    {
      scope: [
        'constant.language.boolean',
        'constant.language',
      ],
      settings: {
        foreground: color('syntax.boolean'),
      },
    },
    {
      scope: 'meta.module-reference',
      settings: {
        foreground: primary,
      },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: color('accent.orange'),
      },
    },
    {
      scope: 'punctuation.definition.quote.begin.markdown',
      settings: {
        foreground: color('syntax.comment'),
      },
    },
    {
      scope: ['markup.heading', 'markup.heading entity.name'],
      settings: {
        fontStyle: 'bold',
        foreground: color('syntax.function'),
      },
    },
    {
      scope: 'markup.quote',
      settings: {
        foreground: color('syntax.interface'),
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        fontStyle: 'italic',
        foreground,
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        fontStyle: 'bold',
        foreground,
      },
    },
    {
      scope: 'strong',
      settings: {
        fontStyle: 'bold',
      },
    },
    {
      scope: 'emphasis',
      settings: {
        fontStyle: 'italic',
      },
    },
    {
      scope: 'markup.underline',
      settings: {
        fontStyle: 'underline',
      },
    },
    {
      scope: 'markup.strikethrough',
      settings: {
        fontStyle: 'strikethrough',
      },
    },
    {
      scope: 'markup.raw',
      settings: {
        foreground: primary,
      },
    },
    {
      scope: 'markup.inline.raw',
      settings: {
        foreground: primary,
      },
    },
    {
      scope: [
        'markup.deleted',
        'meta.diff.header.from-file',
        'punctuation.definition.deleted',
      ],
      settings: {
        background: color('accent.red', 'barely'),
        foreground: color('accent.red'),
      },
    },
    {
      scope: [
        'markup.inserted',
        'meta.diff.header.to-file',
        'punctuation.definition.inserted',
      ],
      settings: {
        background: color('accent.green', 'barely'),
        foreground: color('accent.green'),
      },
    },
    {
      scope: ['markup.changed', 'punctuation.definition.changed'],
      settings: {
        background: color('accent.orange', 'barely'),
        foreground: color('accent.orange'),
      },
    },
    {
      scope: ['markup.ignored', 'markup.untracked'],
      settings: {
        foreground: mutedForeground,
        background: color('accent.blue'),
      },
    },
    {
      scope: 'meta.diff.range',
      settings: {
        foreground: color('accent.magenta'),
        fontStyle: 'bold',
      },
    },
    {
      scope: 'meta.diff.header',
      settings: {
        foreground: color('accent.blue'),
      },
    },
    {
      scope: 'meta.separator',
      settings: {
        fontStyle: 'bold',
        foreground: color('accent.blue'),
      },
    },
    {
      scope: 'meta.output',
      settings: {
        foreground: color('accent.blue'),
      },
    },
    {
      scope: [
        'brackethighlighter.tag',
        'brackethighlighter.curly',
        'brackethighlighter.round',
        'brackethighlighter.square',
        'brackethighlighter.angle',
        'brackethighlighter.quote',
      ],
      settings: {
        foreground: mutedForeground,
      },
    },
    {
      scope: 'brackethighlighter.unmatched',
      settings: {
        foreground: color('accent.red'),
      },
    },
    {
      scope: [
        'constant.other.reference.link',
        'string.other.link',
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
      ],
      settings: {
        foreground: color('syntax.string'),
      },
    },
    {
      scope: [
        'markup.underline.link.markdown',
        'markup.underline.link.image.markdown',
      ],
      settings: {
        foreground: color('text.secondary'),
        fontStyle: 'underline',
      },
    },
    {
      scope: [
        'type.identifier',
      ],
      settings: {
        foreground: color('syntax.class'),
      },
    },
    {
      scope: [
        'entity.other.attribute-name.html',
      ],
      settings: {
        foreground: color('syntax.parameter'),
      },
    },
    {
      scope: [
        'entity.other.attribute-name',
        'support.type.property-name',
        'support.type.vendored.property-name',
        'meta.structure.dictionary.key.python',
      ],
      settings: {
        foreground: color('syntax.property'),
      },
    },
    {
      scope: [
        'entity.name.tag.css',
        'entity.name.tag.less',
      ],
      settings: {
        foreground: color('syntax.function'),
      },
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
      settings: {
        foreground: color('syntax.type'),
      },
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
      settings: {
        foreground,
      },
    },
    {
      scope: [
        'punctuation.definition.template-expression.begin',
        'punctuation.definition.template-expression.end',
        'punctuation.section.embedded.begin.php',
        'punctuation.section.embedded.end.php',
      ],
      settings: {
        foreground: color('syntax.keyword'),
      },
    },
    {
      scope: [
        'meta.preprocessor',
        'entity.name.function.preprocessor',
      ],
      settings: {
        foreground: color('syntax.keyword'),
      },
    },
    {
      scope: 'meta.preprocessor.string',
      settings: {
        foreground: color('syntax.string'),
      },
    },
    {
      scope: 'meta.preprocessor.numeric',
      settings: {
        foreground: color('syntax.number'),
      },
    },
    {
      scope: [
        'string.tag',
        'string.value',
      ],
      settings: {
        foreground: color('syntax.string'),
      },
    },
    {
      scope: [
        'source.css variable',
        'support.function.git-rebase',
      ],
      settings: {
        foreground: color('syntax.property'),
      },
    },
    {
      scope: [
        'constant.sha.git-rebase',
        'variable.other.enummember',
      ],
      settings: {
        foreground: color('syntax.constant'),
      },
    },
    {
      scope: [
        'keyword.operator.plus.exponent',
        'keyword.operator.minus.exponent',
      ],
      settings: {
        foreground: color('syntax.number'),
      },
    },
    {
      scope: [
        'storage.modifier',
        'storage.modifier.import.java',
        'storage.modifier.package.java',
      ],
      settings: {
        foreground: color('syntax.keyword'),
      },
    },
    {
      scope: 'variable.language.wildcard.java',
      settings: {
        foreground,
      },
    },
    {
      scope: [
        'invalid',
      ],
      settings: {
        foreground: color('accent.red'),
      },
    },
    {
      scope: 'punctuation.definition.tag',
      settings: {
        foreground: punctuation,
      },
    },
    {
      scope: [
        'invalid.illegal.unrecognized-tag.html',
      ],
      settings: {
        fontStyle: 'normal',
      },
    },
  ]
}
