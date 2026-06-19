import type { ColorResolver } from '@jannchie/theme-core'
import type { ZedPlayer, ZedStyle } from '../types'
import { resolveCodeBackground } from '@jannchie/theme-core'
import { buildSyntax } from './syntax'

/**
 * Builds a Zed `style` object from the shared color tokens.
 *
 * Local aliases mirror `packages/vscode/src/ui/uiColors.ts` so the two targets
 * read against the same semantic vocabulary; only the destination key names
 * differ (Zed's dotted UI keys vs. VS Code's `workbench.colorCustomizations`).
 */
export function buildStyle(colorResolver: ColorResolver): ZedStyle {
  const color = colorResolver.resolve.bind(colorResolver)
  const colorByVariant = colorResolver.resolveByVariant.bind(colorResolver)
  const baseColor = colorResolver.resolveBase.bind(colorResolver)

  const foreground = color('text.primary')
  const chromeForeground = color('text.chrome')
  const secondaryForeground = color('text.secondary')
  const mutedForeground = color('text.muted')
  const subtleForeground = color('text.subtle')
  const primary = color('accent.primary')
  const background = color('surface.canvas')
  const activeBackground = color('surface.panel')
  const border = color('surface.border')
  const transparent = color('utility.transparent')
  const editorBackground = resolveCodeBackground(colorResolver)

  const stateError = color('state.error')
  const stateWarning = color('state.warning')
  const stateInfo = color('state.info')
  const stateHint = color('state.hint')
  const stateAdded = color('state.added')
  const stateModified = color('state.modified')
  const stateDeleted = color('state.deleted')
  const stateConflict = color('state.conflict')

  const selectedTabBackground = colorResolver.pick({
    light: activeBackground,
    dark: editorBackground,
  })
  const selectionBackgroundActive = colorByVariant('surface.overlay', {
    light: 'faint',
    dark: 'ghost',
  })
  const selectionBackground = selectionBackgroundActive
  const indentGuideBackground = colorByVariant('surface.guide', {
    light: 'faint',
    dark: 'faint',
  })
  const indentGuideActiveBackground = colorByVariant('surface.guide', {
    light: 'subtle',
    dark: 'subtle',
  })
  const findMatchBackground = colorByVariant('accent.yellow', {
    light: 'subtle',
    dark: 'ghost',
  })
  const dragAndDropBackground = colorByVariant('accent.blue', {
    light: 'ghost',
    dark: 'barely',
  })
  const wordHighlightBackground = color('accent.green', 'barely')
  const wordHighlightStrongBackground = color('accent.green', 'faint')
  const bracketMatchBackground = color('accent.green', 'ghost')
  const terminalAnsiBlack = color('utility.terminalAnsiBlack')

  const players: ZedPlayer[] = [
    { cursor: primary, background: primary, selection: selectionBackground },
    { cursor: color('accent.magenta'), background: color('accent.magenta'), selection: color('accent.magenta', 'ghost') },
    { cursor: color('accent.green'), background: color('accent.green'), selection: color('accent.green', 'ghost') },
    { cursor: color('accent.orange'), background: color('accent.orange'), selection: color('accent.orange', 'ghost') },
    { cursor: color('accent.cyan'), background: color('accent.cyan'), selection: color('accent.cyan', 'ghost') },
    { cursor: color('accent.red'), background: color('accent.red'), selection: color('accent.red', 'ghost') },
    { cursor: color('accent.yellow'), background: color('accent.yellow'), selection: color('accent.yellow', 'ghost') },
    { cursor: color('accent.blue'), background: color('accent.blue'), selection: color('accent.blue', 'ghost') },
  ]

  return {
    'border': border,
    'border.variant': border,
    'border.focused': primary,
    'border.selected': primary,
    'border.transparent': transparent,
    'border.disabled': border,

    'elevated_surface.background': background,
    'surface.background': background,
    'background': background,

    'element.background': transparent,
    'element.hover': activeBackground,
    'element.active': selectionBackgroundActive,
    'element.selected': activeBackground,
    'element.disabled': transparent,
    'drop_target.background': dragAndDropBackground,

    'ghost_element.background': transparent,
    'ghost_element.hover': activeBackground,
    'ghost_element.active': selectionBackgroundActive,
    'ghost_element.selected': activeBackground,
    'ghost_element.disabled': transparent,

    'text': foreground,
    'text.muted': secondaryForeground,
    'text.placeholder': mutedForeground,
    'text.disabled': subtleForeground,
    'text.accent': primary,

    'icon': foreground,
    'icon.muted': secondaryForeground,
    'icon.disabled': subtleForeground,
    'icon.placeholder': mutedForeground,
    'icon.accent': primary,

    'status_bar.background': background,
    'title_bar.background': background,
    'title_bar.inactive_background': background,
    'toolbar.background': editorBackground,
    'tab_bar.background': background,
    'tab.inactive_background': background,
    'tab.active_background': selectedTabBackground,

    'search.match_background': findMatchBackground,

    'panel.background': background,
    'panel.focused_border': primary,
    'panel.indent_guide': indentGuideBackground,
    'panel.indent_guide_active': indentGuideActiveBackground,
    'panel.indent_guide_hover': indentGuideActiveBackground,

    'pane.focused_border': primary,
    'pane_group.border': border,

    'scrollbar.thumb.background': subtleForeground,
    'scrollbar.thumb.hover_background': mutedForeground,
    'scrollbar.thumb.border': transparent,
    'scrollbar.track.background': transparent,
    'scrollbar.track.border': border,

    'editor.foreground': foreground,
    'editor.background': editorBackground,
    'editor.gutter.background': editorBackground,
    'editor.subheader.background': activeBackground,
    'editor.active_line.background': activeBackground,
    'editor.highlighted_line.background': activeBackground,
    'editor.line_number': mutedForeground,
    'editor.active_line_number': chromeForeground,
    'editor.invisible': indentGuideBackground,
    'editor.wrap_guide': indentGuideBackground,
    'editor.active_wrap_guide': indentGuideActiveBackground,
    'editor.indent_guide': indentGuideBackground,
    'editor.indent_guide_active': indentGuideActiveBackground,
    'editor.document_highlight.read_background': wordHighlightBackground,
    'editor.document_highlight.write_background': wordHighlightStrongBackground,
    'editor.document_highlight.bracket_background': bracketMatchBackground,

    'terminal.background': editorBackground,
    'terminal.foreground': foreground,
    'terminal.bright_foreground': foreground,
    'terminal.dim_foreground': secondaryForeground,
    'terminal.ansi.black': terminalAnsiBlack,
    'terminal.ansi.red': color('accent.red'),
    'terminal.ansi.green': color('accent.green'),
    'terminal.ansi.yellow': color('accent.yellow'),
    'terminal.ansi.blue': color('accent.blue'),
    'terminal.ansi.magenta': color('accent.magenta'),
    'terminal.ansi.cyan': color('accent.cyan'),
    'terminal.ansi.white': baseColor('text.primary'),
    'terminal.ansi.bright_black': colorResolver.pick({ light: chromeForeground, dark: mutedForeground }),
    'terminal.ansi.bright_red': color('accent.red'),
    'terminal.ansi.bright_green': color('accent.green'),
    'terminal.ansi.bright_yellow': color('accent.yellow'),
    'terminal.ansi.bright_blue': color('accent.blue'),
    'terminal.ansi.bright_magenta': color('accent.magenta'),
    'terminal.ansi.bright_cyan': color('accent.cyan'),
    'terminal.ansi.bright_white': colorResolver.pick({ light: mutedForeground, dark: foreground }),
    'terminal.ansi.dim_black': color('accent.red', 'low'),
    'terminal.ansi.dim_red': color('accent.red', 'low'),
    'terminal.ansi.dim_green': color('accent.green', 'low'),
    'terminal.ansi.dim_yellow': color('accent.yellow', 'low'),
    'terminal.ansi.dim_blue': color('accent.blue', 'low'),
    'terminal.ansi.dim_magenta': color('accent.magenta', 'low'),
    'terminal.ansi.dim_cyan': color('accent.cyan', 'low'),
    'terminal.ansi.dim_white': secondaryForeground,

    'link_text.hover': stateInfo,

    'conflict': stateConflict,
    'conflict.background': color('state.conflict', 'faint'),
    'conflict.border': stateConflict,
    'created': stateAdded,
    'created.background': color('state.added', 'faint'),
    'created.border': stateAdded,
    'deleted': stateDeleted,
    'deleted.background': color('state.deleted', 'faint'),
    'deleted.border': stateDeleted,
    'error': stateError,
    'error.background': color('state.error', 'faint'),
    'error.border': stateError,
    'hidden': mutedForeground,
    'hidden.background': background,
    'hidden.border': border,
    'hint': stateHint,
    'hint.background': color('state.hint', 'faint'),
    'hint.border': stateHint,
    'ignored': mutedForeground,
    'ignored.background': background,
    'ignored.border': border,
    'info': stateInfo,
    'info.background': color('state.info', 'faint'),
    'info.border': stateInfo,
    'modified': stateModified,
    'modified.background': color('state.modified', 'faint'),
    'modified.border': stateModified,
    'predictive': mutedForeground,
    'predictive.background': color('state.hint', 'faint'),
    'predictive.border': stateHint,
    'renamed': stateModified,
    'renamed.background': color('state.modified', 'faint'),
    'renamed.border': stateModified,
    'success': stateAdded,
    'success.background': color('state.added', 'faint'),
    'success.border': stateAdded,
    'unreachable': mutedForeground,
    'unreachable.background': background,
    'unreachable.border': border,
    'warning': stateWarning,
    'warning.background': color('state.warning', 'faint'),
    'warning.border': stateWarning,

    'players': players,
    'syntax': buildSyntax(colorResolver),
  }
}
