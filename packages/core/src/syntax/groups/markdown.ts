import type { ColorResolver } from '../../colorResolver'
import type { TokenColor } from '../../types'

/**
 * Markdown headings, lists, quotes, raw text, links, and inline emphasis.
 */
export function markdownRules(colorResolver: ColorResolver): TokenColor[] {
  const color = colorResolver.resolve.bind(colorResolver)
  const foreground = color('text.primary')
  const inlineCode = color('syntax.interface')

  return [
    {
      scope: 'punctuation.definition.list.begin.markdown',
      settings: { foreground: color('accent.orange') },
    },
    {
      scope: 'punctuation.definition.quote.begin.markdown',
      settings: { foreground: color('syntax.comment') },
    },
    {
      scope: ['markup.heading', 'markup.heading entity.name'],
      settings: { fontStyle: 'bold', foreground: color('syntax.function') },
    },
    {
      scope: 'markup.quote',
      settings: { foreground: color('syntax.interface') },
    },
    {
      scope: 'markup.italic',
      settings: { fontStyle: 'italic', foreground },
    },
    {
      scope: 'markup.bold',
      settings: { fontStyle: 'bold', foreground },
    },
    {
      scope: 'strong',
      settings: { fontStyle: 'bold' },
    },
    {
      scope: 'emphasis',
      settings: { fontStyle: 'italic' },
    },
    {
      scope: 'markup.underline',
      settings: { fontStyle: 'underline' },
    },
    {
      scope: 'markup.strikethrough',
      settings: { fontStyle: 'strikethrough' },
    },
    {
      scope: 'markup.raw',
      settings: { foreground: inlineCode },
    },
    {
      scope: 'markup.inline.raw',
      settings: { foreground: inlineCode },
    },
    {
      scope: [
        'constant.other.reference.link',
        'string.other.link',
        'punctuation.definition.string.begin.markdown',
        'punctuation.definition.string.end.markdown',
      ],
      settings: { foreground: color('syntax.string') },
    },
    {
      scope: [
        'markup.underline.link.markdown',
        'markup.underline.link.image.markdown',
      ],
      settings: { foreground: color('text.secondary'), fontStyle: 'underline' },
    },
  ]
}
