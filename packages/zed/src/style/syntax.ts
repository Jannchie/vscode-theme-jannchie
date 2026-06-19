import type { ColorResolver } from '@jannchie/theme-core'
import type { ZedSyntaxStyle } from '../types'

/**
 * Maps Zed's flat highlight-capture names to the same `syntax.*` roles the
 * VS Code TextMate scopes consume, so both targets stay in lockstep.
 *
 * Capture set follows Zed's bundled themes (One / Ayu); unknown extra keys are
 * harmless, missing ones fall back to `editor.foreground`.
 */
export function buildSyntax(colorResolver: ColorResolver): Record<string, ZedSyntaxStyle> {
  const color = colorResolver.resolve.bind(colorResolver)
  const c = (path: Parameters<typeof color>[0], op?: Parameters<typeof color>[1]): ZedSyntaxStyle => ({
    color: color(path, op)!,
  })

  return {
    'attribute': c('syntax.property'),
    'boolean': c('syntax.boolean'),
    'comment': c('syntax.comment'),
    'comment.doc': c('syntax.comment'),
    'constant': c('syntax.constant'),
    'constructor': c('syntax.function'),
    'embedded': c('text.primary'),
    'emphasis': { ...c('text.primary'), font_style: 'italic' },
    'emphasis.strong': { ...c('text.primary'), font_weight: 700 },
    'enum': c('syntax.class'),
    'function': c('syntax.function'),
    'function.builtin': c('syntax.functionBuiltin'),
    'function.method': c('syntax.function'),
    'hint': c('state.hint'),
    'keyword': c('syntax.keyword'),
    // Zed resolves `keyword.import` per grammar capture and falls back to
    // `keyword` when a language doesn't emit it — best-effort import tint.
    'keyword.import': c('syntax.import'),
    'label': c('syntax.function'),
    'link_text': { ...c('syntax.string'), font_style: 'italic' },
    'link_uri': c('syntax.string'),
    'namespace': c('syntax.namespace'),
    'number': c('syntax.number'),
    'operator': c('syntax.punctuation'),
    'predictive': c('text.muted'),
    'preproc': c('syntax.keyword'),
    'primary': c('text.primary'),
    'property': c('syntax.property'),
    'punctuation': c('syntax.punctuation'),
    'punctuation.bracket': c('syntax.punctuation'),
    'punctuation.delimiter': c('syntax.punctuation'),
    'punctuation.list_marker': c('syntax.punctuation'),
    'punctuation.special': c('syntax.keyword'),
    'string': c('syntax.string'),
    'string.escape': c('accent.yellow'),
    'string.regex': c('syntax.regex'),
    'string.special': c('syntax.string'),
    'string.special.symbol': c('syntax.constant'),
    'tag': c('syntax.classBuiltin'),
    'text.literal': c('syntax.string'),
    'title': { ...c('syntax.function'), font_weight: 700 },
    'type': c('syntax.type'),
    'type.builtin': c('syntax.builtin'),
    'variable': c('syntax.variable'),
    'variable.parameter': c('syntax.parameter'),
    'variable.special': c('syntax.variableBuiltin'),
    'variant': c('syntax.constant'),
  }
}
