import type { ColorResolver } from '../../colorResolver'
import type { TokenColor } from '../../types'

/**
 * Diff and brackethighlighter scopes.
 */
export function diffRules(colorResolver: ColorResolver): TokenColor[] {
  const color = colorResolver.resolve.bind(colorResolver)
  const mutedForeground = color('text.muted')

  return [
    {
      scope: [
        'markup.deleted',
        'meta.diff.header.from-file',
        'punctuation.definition.deleted',
      ],
      settings: {
        background: color('state.deleted', 'barely'),
        foreground: color('state.deleted'),
      },
    },
    {
      scope: [
        'markup.inserted',
        'meta.diff.header.to-file',
        'punctuation.definition.inserted',
      ],
      settings: {
        background: color('state.added', 'barely'),
        foreground: color('state.added'),
      },
    },
    {
      scope: ['markup.changed', 'punctuation.definition.changed'],
      settings: {
        background: color('state.modified', 'barely'),
        foreground: color('accent.orange'),
      },
    },
    {
      scope: ['markup.ignored', 'markup.untracked'],
      settings: {
        foreground: mutedForeground,
        background: color('state.untracked'),
      },
    },
    {
      scope: 'meta.diff.range',
      settings: { foreground: color('accent.magenta'), fontStyle: 'bold' },
    },
    {
      scope: 'meta.diff.header',
      settings: { foreground: color('accent.blue') },
    },
    {
      scope: 'meta.separator',
      settings: { fontStyle: 'bold', foreground: color('accent.blue') },
    },
    {
      scope: 'meta.output',
      settings: { foreground: color('accent.blue') },
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
      settings: { foreground: mutedForeground },
    },
    {
      scope: 'brackethighlighter.unmatched',
      settings: { foreground: color('accent.red') },
    },
  ]
}
