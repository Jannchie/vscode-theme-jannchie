import type { ColorResolver } from '../core/colorResolver'

export function buildTokenColors(colorResolver: ColorResolver) {
  const role = colorResolver.resolveRole.bind(colorResolver)

  const punctuation = role('punctuation')
  const foreground = role('foreground')
  const background = role('background')
  const mutedForeground = role('mutedForeground')
  const primary = role('primary')

  return [
    {
      scope: [
        'comment',
        'punctuation.definition.comment',
        'string.comment',
      ],
      settings: {
        foreground: role('comment'),
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
        foreground: role('constant'),
      },
    },
    {
      scope: ['entity', 'entity.name'],
      settings: {
        foreground: role('parameter'),
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
        foreground: role('keyword'),
      },
    },
    {
      scope: [
        'entity.other.attribute-name.html.meta.attribute.class.html',
        'support.class.component',
      ],
      settings: {
        foreground: role('type'),
      },
    },
    {
      scope: 'entity.name.function',
      settings: {
        foreground: role('function'),
      },
    },
    {
      scope: [
        'keyword',
        'storage.type.class.jsdoc',
      ],
      settings: {
        foreground: role('keyword'),
      },
    },
    {
      scope: [
        'storage',
        'storage.type',
        'support.type.builtin',
        'constant.language.undefined',
        'constant.language.null',
      ],
      settings: {
        foreground: role('builtin'),
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
        foreground: role('string'),
      },
    },
    {
      scope: [
        'variable.other.object',
        'variable.other.readwrite',
      ],
      settings: {
        foreground: role('variable'),
      },
    },
    {
      scope: [
        'variable.other.object.property',
        'variable.other.property',
      ],
      settings: {
        foreground: role('property'),
      },
    },
    {
      scope: [
        'meta.function-call',
      ],
      settings: {
        foreground: role('function'),
      },
    },
    {
      scope: [
        'punctuation.definition.string',
        'punctuation.support.type.property-name',
      ],
      settings: {
        foreground: role('string', 'veil'),
      },
    },
    {
      scope: ['support', 'support.type.property-name.toml'],
      settings: {
        foreground: role('property'),
      },
    },
    {
      scope: [
        'support.type.property-name.table.toml',
        'support.type.property-name.array.toml',
      ],
      settings: {
        foreground: role('function'),
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
        foreground: role('property'),
      },
    },
    {
      scope: [
        'variable',
        'identifier',
      ],
      settings: {
        foreground: role('variable'),
      },
    },
    {
      scope: [
        'variable.other.constant',
      ],
      settings: {
        foreground: role('constant'),
      },
    },
    {
      scope: [
        'support.type.primitive',
        'entity.name.type',
      ],
      settings: {
        foreground: role('type'),
      },
    },
    {
      scope: 'namespace',
      settings: {
        foreground: role('namespace'),
      },
    },
    {
      scope: [
        'keyword.operator',
        'keyword.operator.assignment.compound',
        'meta.var.expr.ts',
      ],
      settings: {
        foreground: role('operator'),
      },
    },
    {
      scope: 'invalid.broken',
      settings: {
        fontStyle: 'italic',
        foreground: role('red'),
      },
    },
    {
      scope: 'invalid.deprecated',
      settings: {
        fontStyle: 'italic',
        foreground: role('red'),
      },
    },
    {
      scope: 'invalid.illegal',
      settings: {
        fontStyle: 'italic',
        foreground: role('red'),
      },
    },
    {
      scope: 'invalid.unimplemented',
      settings: {
        fontStyle: 'italic',
        foreground: role('red'),
      },
    },
    {
      scope: 'carriage-return',
      settings: {
        fontStyle: 'italic underline',
        background: role('red'),
        foreground: background,
        content: '^M',
      },
    },
    {
      scope: 'message.error',
      settings: {
        foreground: role('red'),
      },
    },
    {
      scope: 'string variable',
      settings: {
        foreground: role('string'),
      },
    },
    {
      scope: ['source.regexp', 'string.regexp'],
      settings: {
        foreground: role('regex'),
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
        foreground: role('string'),
      },
    },
    {
      scope: 'string.regexp constant.character.escape',
      settings: {
        foreground: role('yellow'),
      },
    },
    {
      scope: [
        'support.constant',
      ],
      settings: {
        foreground: role('constant'),
      },
    },
    {
      scope: [
        'constant.numeric',
        'number',
      ],
      settings: {
        foreground: role('number'),
      },
    },
    {
      scope: [
        'keyword.other.unit',
      ],
      settings: {
        foreground: role('builtin'),
      },
    },
    {
      scope: [
        'constant.language.boolean',
        'constant.language',
      ],
      settings: {
        foreground: role('boolean'),
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
        foreground: role('orange'),
      },
    },
    {
      scope: ['markup.heading', 'markup.heading entity.name'],
      settings: {
        fontStyle: 'bold',
        foreground: role('function'),
      },
    },
    {
      scope: 'markup.quote',
      settings: {
        foreground: role('interface'),
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
      scope: 'markup.raw',
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
        background: role('red', 'barely'),
        foreground: role('red'),
      },
    },
    {
      scope: [
        'markup.inserted',
        'meta.diff.header.to-file',
        'punctuation.definition.inserted',
      ],
      settings: {
        background: role('green', 'barely'),
        foreground: role('green'),
      },
    },
    {
      scope: ['markup.changed', 'punctuation.definition.changed'],
      settings: {
        background: role('orange', 'barely'),
        foreground: role('orange'),
      },
    },
    {
      scope: ['markup.ignored', 'markup.untracked'],
      settings: {
        foreground: mutedForeground,
        background: role('blue'),
      },
    },
    {
      scope: 'meta.diff.range',
      settings: {
        foreground: role('magenta'),
        fontStyle: 'bold',
      },
    },
    {
      scope: 'meta.diff.header',
      settings: {
        foreground: role('blue'),
      },
    },
    {
      scope: 'meta.separator',
      settings: {
        fontStyle: 'bold',
        foreground: role('blue'),
      },
    },
    {
      scope: 'meta.output',
      settings: {
        foreground: role('blue'),
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
        foreground: role('red'),
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
        foreground: role('string'),
      },
    },
    {
      scope: [
        'markup.underline.link.markdown',
        'markup.underline.link.image.markdown',
      ],
      settings: {
        foreground: role('secondaryForeground'),
        fontStyle: 'underline',
      },
    },
    {
      scope: [
        'type.identifier',
      ],
      settings: {
        foreground: role('class'),
      },
    },
    {
      scope: [
        'entity.other.attribute-name.html',
      ],
      settings: {
        foreground: role('parameter'),
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
