import type { ColorResolver } from '../core/colorResolver'
import { opacity } from '../config/opacity'

export function buildTokenColors(colorResolver: ColorResolver) {
  const punctuation = colorResolver.resolveRole('punctuation')
  const foreground = colorResolver.resolveRole('foreground')
  const background = colorResolver.resolveRole('background')
  const mutedForeground = colorResolver.resolveRole('mutedForeground')
  const primary = colorResolver.resolveRole('primary')

  return [
    {
      scope: [
        'comment',
        'punctuation.definition.comment',
        'string.comment',
      ],
      settings: {
        foreground: colorResolver.resolveRole('comment'),
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
        foreground: colorResolver.resolveRole('constant'),
      },
    },
    {
      scope: ['entity', 'entity.name'],
      settings: {
        foreground: colorResolver.resolveRole('parameter'),
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
        foreground: colorResolver.resolveRole('keyword'),
      },
    },
    {
      scope: [
        'entity.other.attribute-name.html.meta.attribute.class.html',
        'support.class.component',
      ],
      settings: {
        foreground: colorResolver.resolveRole('type'),
      },
    },
    {
      scope: 'entity.name.function',
      settings: {
        foreground: colorResolver.resolveRole('function'),
      },
    },
    {
      scope: [
        'keyword',
        'storage.type.class.jsdoc',
      ],
      settings: {
        foreground: colorResolver.resolveRole('keyword'),
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
        foreground: colorResolver.resolveRole('builtin'),
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
        foreground: colorResolver.resolveRole('string'),
      },
    },
    {
      scope: [
        'variable.other.object',
        'variable.other.readwrite',
      ],
      settings: {
        foreground: colorResolver.resolveRole('variable'),
      },
    },
    {
      scope: [
        'variable.other.object.property',
        'variable.other.property',
      ],
      settings: {
        foreground: colorResolver.resolveRole('property'),
      },
    },
    {
      scope: [
        'meta.function-call',
      ],
      settings: {
        foreground: colorResolver.resolveRole('function'),
      },
    },
    {
      scope: [
        'punctuation.definition.string',
        'punctuation.support.type.property-name',
      ],
      settings: {
        foreground: colorResolver.resolveRole('string', '99'),
      },
    },
    {
      scope: ['support', 'support.type.property-name.toml'],
      settings: {
        foreground: colorResolver.resolveRole('property'),
      },
    },
    {
      scope: [
        'support.type.property-name.table.toml',
        'support.type.property-name.array.toml',
      ],
      settings: {
        foreground: colorResolver.resolveRole('function'),
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
        foreground: colorResolver.resolveRole('property'),
      },
    },
    {
      scope: [
        'variable',
        'identifier',
      ],
      settings: {
        foreground: colorResolver.resolveRole('variable'),
      },
    },
    {
      scope: [
        'variable.other.constant',
      ],
      settings: {
        foreground: colorResolver.resolveRole('constant'),
      },
    },
    {
      scope: [
        'support.type.primitive',
        'entity.name.type',
      ],
      settings: {
        foreground: colorResolver.resolveRole('type'),
      },
    },
    {
      scope: 'namespace',
      settings: {
        foreground: colorResolver.resolveRole('namespace'),
      },
    },
    {
      scope: [
        'keyword.operator',
        'keyword.operator.assignment.compound',
        'meta.var.expr.ts',
      ],
      settings: {
        foreground: colorResolver.resolveRole('operator'),
      },
    },
    {
      scope: 'invalid.broken',
      settings: {
        fontStyle: 'italic',
        foreground: colorResolver.resolveRole('red'),
      },
    },
    {
      scope: 'invalid.deprecated',
      settings: {
        fontStyle: 'italic',
        foreground: colorResolver.resolveRole('red'),
      },
    },
    {
      scope: 'invalid.illegal',
      settings: {
        fontStyle: 'italic',
        foreground: colorResolver.resolveRole('red'),
      },
    },
    {
      scope: 'invalid.unimplemented',
      settings: {
        fontStyle: 'italic',
        foreground: colorResolver.resolveRole('red'),
      },
    },
    {
      scope: 'carriage-return',
      settings: {
        fontStyle: 'italic underline',
        background: colorResolver.resolveRole('red'),
        foreground: background,
        content: '^M',
      },
    },
    {
      scope: 'message.error',
      settings: {
        foreground: colorResolver.resolveRole('red'),
      },
    },
    {
      scope: 'string variable',
      settings: {
        foreground: colorResolver.resolveRole('string'),
      },
    },
    {
      scope: ['source.regexp', 'string.regexp'],
      settings: {
        foreground: colorResolver.resolveRole('regex'),
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
        foreground: colorResolver.resolveRole('string'),
      },
    },
    {
      scope: 'string.regexp constant.character.escape',
      settings: {
        foreground: colorResolver.resolveRole('yellow'),
      },
    },
    {
      scope: [
        'support.constant',
      ],
      settings: {
        foreground: colorResolver.resolveRole('constant'),
      },
    },
    {
      scope: [
        'constant.numeric',
        'number',
      ],
      settings: {
        foreground: colorResolver.resolveRole('number'),
      },
    },
    {
      scope: [
        'keyword.other.unit',
      ],
      settings: {
        foreground: colorResolver.resolveRole('builtin'),
      },
    },
    {
      scope: [
        'constant.language.boolean',
        'constant.language',
      ],
      settings: {
        foreground: colorResolver.resolveRole('boolean'),
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
        foreground: colorResolver.resolveRole('orange'),
      },
    },
    {
      scope: ['markup.heading', 'markup.heading entity.name'],
      settings: {
        fontStyle: 'bold',
        foreground: colorResolver.resolveRole('function'),
      },
    },
    {
      scope: 'markup.quote',
      settings: {
        foreground: colorResolver.resolveRole('interface'),
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
        background: `${colorResolver.resolveRole('red')}${opacity.barely}`,
        foreground: colorResolver.resolveRole('red'),
      },
    },
    {
      scope: [
        'markup.inserted',
        'meta.diff.header.to-file',
        'punctuation.definition.inserted',
      ],
      settings: {
        background: `${colorResolver.resolveRole('green')}${opacity.barely}`,
        foreground: colorResolver.resolveRole('green'),
      },
    },
    {
      scope: ['markup.changed', 'punctuation.definition.changed'],
      settings: {
        background: `${colorResolver.resolveRole('orange')}${opacity.barely}`,
        foreground: colorResolver.resolveRole('orange'),
      },
    },
    {
      scope: ['markup.ignored', 'markup.untracked'],
      settings: {
        foreground: mutedForeground,
        background: colorResolver.resolveRole('blue'),
      },
    },
    {
      scope: 'meta.diff.range',
      settings: {
        foreground: colorResolver.resolveRole('magenta'),
        fontStyle: 'bold',
      },
    },
    {
      scope: 'meta.diff.header',
      settings: {
        foreground: colorResolver.resolveRole('blue'),
      },
    },
    {
      scope: 'meta.separator',
      settings: {
        fontStyle: 'bold',
        foreground: colorResolver.resolveRole('blue'),
      },
    },
    {
      scope: 'meta.output',
      settings: {
        foreground: colorResolver.resolveRole('blue'),
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
        foreground: colorResolver.resolveRole('red'),
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
        foreground: colorResolver.resolveRole('string'),
      },
    },
    {
      scope: [
        'markup.underline.link.markdown',
        'markup.underline.link.image.markdown',
      ],
      settings: {
        foreground: colorResolver.resolveRole('secondaryForeground'),
        fontStyle: 'underline',
      },
    },
    {
      scope: [
        'type.identifier',
      ],
      settings: {
        foreground: colorResolver.resolveRole('class'),
      },
    },
    {
      scope: [
        'entity.other.attribute-name.html',
      ],
      settings: {
        foreground: colorResolver.resolveRole('parameter'),
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
