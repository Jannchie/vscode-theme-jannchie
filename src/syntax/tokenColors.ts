import type { ColorResolver } from '../core/colorResolver'
import { semanticColors } from '../config/semanticColors'
import { opacity } from '../config/opacity'

export function buildTokenColors(colorResolver: ColorResolver, punctuation: string) {
  return [
    {
      scope: [
        'comment',
        'punctuation.definition.comment',
        'string.comment',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.comment),
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
        foreground: colorResolver.resolveColor(semanticColors.constant),
      },
    },
    {
      scope: ['entity', 'entity.name'],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.parameter),
      },
    },
    {
      scope: 'variable.parameter.function',
      settings: {
        foreground: colorResolver.getForegroundColor(
          semanticColors.foreground,
          semanticColors.blackForeground
        ),
      },
    },
    {
      scope: [
        'entity.name.tag',
        'tag.html',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.keyword),
      },
    },
    {
      scope: [
        'entity.other.attribute-name.html.meta.attribute.class.html',
        'support.class.component',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.type),
      },
    },
    {
      scope: 'entity.name.function',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.function),
      },
    },
    {
      scope: [
        'keyword',
        'storage.type.class.jsdoc',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.keyword),
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
        foreground: colorResolver.resolveColor(semanticColors.builtin),
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
        foreground: colorResolver.getForegroundColor(
          semanticColors.foreground,
          semanticColors.blackForeground
        ),
      },
    },
    {
      scope: [
        'string',
        'string punctuation.section.embedded source',
        'attribute.value',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.string),
      },
    },
    {
      scope: [
        'variable.other.object',
        'variable.other.readwrite',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.variable),
      },
    },
    {
      scope: [
        'variable.other.object.property',
        'variable.other.property',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.property),
      },
    },
    {
      scope: [
        'meta.function-call',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.function),
      },
    },
    {
      scope: [
        'punctuation.definition.string',
        'punctuation.support.type.property-name',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.string, '99'),
      },
    },
    {
      scope: ['support', 'support.type.property-name.toml'],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.property),
      },
    },
    {
      scope: [
        'support.type.property-name.table.toml',
        'support.type.property-name.array.toml',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.function),
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
        foreground: colorResolver.resolveColor(semanticColors.property),
      },
    },
    {
      scope: [
        'variable',
        'identifier',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.variable),
      },
    },
    {
      scope: [
        'variable.other.constant',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.constant),
      },
    },
    {
      scope: [
        'support.type.primitive',
        'entity.name.type',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.type),
      },
    },
    {
      scope: 'namespace',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.namespace),
      },
    },
    {
      scope: [
        'keyword.operator',
        'keyword.operator.assignment.compound',
        'meta.var.expr.ts',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.operator),
      },
    },
    {
      scope: 'invalid.broken',
      settings: {
        fontStyle: 'italic',
        foreground: colorResolver.resolveColor(semanticColors.red),
      },
    },
    {
      scope: 'invalid.deprecated',
      settings: {
        fontStyle: 'italic',
        foreground: colorResolver.resolveColor(semanticColors.red),
      },
    },
    {
      scope: 'invalid.illegal',
      settings: {
        fontStyle: 'italic',
        foreground: colorResolver.resolveColor(semanticColors.red),
      },
    },
    {
      scope: 'invalid.unimplemented',
      settings: {
        fontStyle: 'italic',
        foreground: colorResolver.resolveColor(semanticColors.red),
      },
    },
    {
      scope: 'carriage-return',
      settings: {
        fontStyle: 'italic underline',
        background: colorResolver.resolveColor(semanticColors.red),
        foreground: colorResolver.getBackgroundColor(
          semanticColors.background,
          semanticColors.softBackground,
          semanticColors.blackBackground
        ),
        content: '^M',
      },
    },
    {
      scope: 'message.error',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.red),
      },
    },
    {
      scope: 'string variable',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.string),
      },
    },
    {
      scope: ['source.regexp', 'string.regexp'],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.regex),
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
        foreground: colorResolver.resolveColor(semanticColors.string),
      },
    },
    {
      scope: 'string.regexp constant.character.escape',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.yellow),
      },
    },
    {
      scope: [
        'support.constant',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.constant),
      },
    },
    {
      scope: [
        'constant.numeric',
        'number',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.number),
      },
    },
    {
      scope: [
        'keyword.other.unit',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.builtin),
      },
    },
    {
      scope: [
        'constant.language.boolean',
        'constant.language',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.boolean),
      },
    },
    {
      scope: 'meta.module-reference',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.primary),
      },
    },
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.orange),
      },
    },
    {
      scope: ['markup.heading', 'markup.heading entity.name'],
      settings: {
        fontStyle: 'bold',
        foreground: colorResolver.resolveColor(semanticColors.function),
      },
    },
    {
      scope: 'markup.quote',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.interface),
      },
    },
    {
      scope: 'markup.italic',
      settings: {
        fontStyle: 'italic',
        foreground: colorResolver.getForegroundColor(
          semanticColors.foreground,
          semanticColors.blackForeground
        ),
      },
    },
    {
      scope: 'markup.bold',
      settings: {
        fontStyle: 'bold',
        foreground: colorResolver.getForegroundColor(
          semanticColors.foreground,
          semanticColors.blackForeground
        ),
      },
    },
    {
      scope: 'markup.raw',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.primary),
      },
    },
    {
      scope: [
        'markup.deleted',
        'meta.diff.header.from-file',
        'punctuation.definition.deleted',
      ],
      settings: {
        background: `${colorResolver.resolveColor(semanticColors.red)}${opacity.barely}`,
        foreground: colorResolver.resolveColor(semanticColors.red),
      },
    },
    {
      scope: [
        'markup.inserted',
        'meta.diff.header.to-file',
        'punctuation.definition.inserted',
      ],
      settings: {
        background: `${colorResolver.resolveColor(semanticColors.green)}${opacity.barely}`,
        foreground: colorResolver.resolveColor(semanticColors.green),
      },
    },
    {
      scope: ['markup.changed', 'punctuation.definition.changed'],
      settings: {
        background: `${colorResolver.resolveColor(semanticColors.orange)}${opacity.barely}`,
        foreground: colorResolver.resolveColor(semanticColors.orange),
      },
    },
    {
      scope: ['markup.ignored', 'markup.untracked'],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.mutedForeground),
        background: colorResolver.resolveColor(semanticColors.blue),
      },
    },
    {
      scope: 'meta.diff.range',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.magenta),
        fontStyle: 'bold',
      },
    },
    {
      scope: 'meta.diff.header',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.blue),
      },
    },
    {
      scope: 'meta.separator',
      settings: {
        fontStyle: 'bold',
        foreground: colorResolver.resolveColor(semanticColors.blue),
      },
    },
    {
      scope: 'meta.output',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.blue),
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
        foreground: colorResolver.resolveColor(semanticColors.mutedForeground),
      },
    },
    {
      scope: 'brackethighlighter.unmatched',
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.red),
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
        foreground: colorResolver.resolveColor(semanticColors.string),
      },
    },
    {
      scope: [
        'markup.underline.link.markdown',
        'markup.underline.link.image.markdown',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.secondaryForeground),
        fontStyle: 'underline',
      },
    },
    {
      scope: [
        'type.identifier',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.class),
      },
    },
    {
      scope: [
        'entity.other.attribute-name.html',
      ],
      settings: {
        foreground: colorResolver.resolveColor(semanticColors.parameter),
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