import type { ColorResolver } from '@jannchie/theme-core'
import { resolveCodeBackground } from '@jannchie/theme-core'

export function buildUIColors(colorResolver: ColorResolver) {
  const color = colorResolver.resolve.bind(colorResolver)
  const colorByVariant = colorResolver.resolveByVariant.bind(colorResolver)
  const baseColor = colorResolver.resolveBase.bind(colorResolver)

  const foreground = color('text.primary')
  const activeForeground = color('text.active')
  const secondaryForeground = color('text.secondary')
  const mutedForeground = color('text.muted')
  const subtleForeground = color('text.subtle')
  const primary = color('accent.primary')
  const indicatorColor = secondaryForeground
  const background = color('surface.canvas')
  const activeBackground = color('surface.panel')
  const border = color('surface.border')
  const transparent = color('utility.transparent')
  const editorBackground = resolveCodeBackground(colorResolver)
  const selectedTabBackground = colorResolver.pick({
    light: activeBackground,
    dark: editorBackground,
  })
  const remoteBackground = colorResolver.pick({
    light: '#d59600',
    dark: color('accent.yellow'),
  })
  const remoteForeground = colorResolver.pick({
    light: '#ffffff',
    dark: background,
  })
  const remoteHoverBackground = colorResolver.pick({
    light: background,
    dark: background,
  })
  const remoteHoverForeground = colorResolver.pick({
    light: activeForeground,
    dark: activeForeground,
  })
  const selectionBackgroundInActive = colorByVariant('surface.overlay', {
    light: 'barely',
    dark: 'faint',
  })
  const selectionBackgroundActive = colorByVariant('surface.overlay', {
    light: 'faint',
    dark: 'ghost',
  })
  const selectionBackground = selectionBackgroundActive
  const foldBackground = colorByVariant('surface.overlay', {
    light: 'faint',
    dark: 'faint',
  })
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
  const findMatchHighlightBackground = colorByVariant('accent.yellow', {
    light: 'lower',
    dark: 'subtle',
  })
  const focusBackground = colorByVariant('accent.blue', {
    light: 'barely',
    dark: 'ghost',
  })
  const dragAndDropBackground = colorByVariant('accent.blue', {
    light: 'ghost',
    dark: 'barely',
  })
  const stackFrameHighlightBackground = colorByVariant('accent.yellow', {
    light: 'ghost',
    dark: 'barely',
  })
  const focusedStackFrameHighlightBackground = colorByVariant('accent.yellow', {
    light: 'faint',
    dark: 'faint',
  })
  const wordHighlightBackground = color('accent.green', 'barely')
  const wordHighlightStrongBackground = color('accent.green', 'faint')
  const bracketMatchBackground = color('accent.green', 'ghost')
  const insertedTextBackground = colorByVariant('accent.green', {
    light: 'faint',
    dark: 'ghost',
  })
  const removedTextBackground = colorByVariant('accent.red', {
    light: 'faint',
    dark: 'ghost',
  })
  const scrollbarShadow = color('surface.shadow')
  const terminalBlack = color('utility.terminalBlack')
  const peekMatchBackground = color('utility.peekMatchBackground')

  return {
    'focusBorder': transparent,
    foreground,
    'descriptionForeground': secondaryForeground,
    'errorForeground': color('accent.red'),

    'textLink.foreground': color('accent.blue'),
    'textLink.activeForeground': color('accent.blue'),
    'textBlockQuote.background': background,
    'textBlockQuote.border': border,
    'textCodeBlock.background': background,
    'textPreformat.foreground': mutedForeground,
    'textSeparator.foreground': activeForeground,

    'button.background': primary,
    'button.foreground': foreground,
    'button.hoverBackground': primary,

    'checkbox.background': activeBackground,
    'checkbox.border': secondaryForeground,

    'dropdown.background': background,
    'dropdown.border': border,
    'dropdown.foreground': foreground,
    'dropdown.listBackground': activeBackground,

    'input.background': activeBackground,
    'input.border': border,
    'input.foreground': foreground,
    'input.placeholderForeground': secondaryForeground,
    'inputOption.activeBackground': mutedForeground,

    'badge.foreground': background,
    'badge.background': indicatorColor,

    'progressBar.background': primary,

    'titleBar.activeForeground': activeForeground,
    'titleBar.activeBackground': background,
    'titleBar.inactiveForeground': mutedForeground,
    'titleBar.inactiveBackground': background,
    'titleBar.border': activeBackground,

    'activityBar.foreground': foreground,
    'activityBar.inactiveForeground': secondaryForeground,
    'activityBar.background': background,
    'activityBarBadge.foreground': background,
    'activityBarBadge.background': indicatorColor,
    'activityBar.activeBorder': indicatorColor,
    'activityBar.border': border,

    'sideBar.foreground': activeForeground,
    'sideBar.background': background,
    'sideBar.border': border,
    'sideBarTitle.foreground': foreground,
    'sideBarSectionHeader.foreground': foreground,
    'sideBarSectionHeader.background': background,
    'sideBarSectionHeader.border': border,

    'list.hoverForeground': foreground,
    'list.inactiveSelectionForeground': foreground,
    'list.activeSelectionForeground': foreground,
    'list.activeSelectionIconForeground': foreground,
    'list.hoverBackground': activeBackground,
    'list.inactiveSelectionBackground': activeBackground,
    'list.activeSelectionBackground': activeBackground,
    'list.inactiveFocusBackground': background,
    'list.focusBackground': activeBackground,
    'list.highlightForeground': primary,
    'list.dropBackground': dragAndDropBackground,

    'tree.indentGuidesStroke': activeBackground,

    'notificationCenterHeader.foreground': mutedForeground,
    'notificationCenterHeader.background': background,
    'notifications.foreground': foreground,
    'notifications.background': background,
    'notifications.border': border,
    'notificationsErrorIcon.foreground': color('accent.red'),
    'notificationsWarningIcon.foreground': color('accent.orange'),
    'notificationsInfoIcon.foreground': color('accent.blue'),

    'pickerGroup.border': border,
    'pickerGroup.foreground': foreground,
    'quickInput.background': background,
    'quickInput.foreground': foreground,
    'quickInputList.focusBackground': activeBackground,

    'statusBar.foreground': activeForeground,
    'statusBar.background': background,
    'statusBar.border': border,
    'statusBar.noFolderBackground': background,
    'statusBar.debuggingBackground': activeBackground,
    'statusBar.debuggingForeground': activeForeground,
    'statusBarItem.prominentBackground': activeBackground,
    'statusBarItem.remoteBackground': remoteBackground,
    'statusBarItem.remoteForeground': remoteForeground,
    'statusBarItem.remoteHoverBackground': remoteHoverBackground,
    'statusBarItem.remoteHoverForeground': remoteHoverForeground,
    'statusBarItem.errorBackground': color('accent.red'),
    'statusBarItem.errorForeground': background,

    'editorGroupHeader.tabsBackground': background,
    'editorGroupHeader.tabsBorder': border,
    'editorGroup.border': border,

    'tab.activeForeground': foreground,
    'tab.inactiveForeground': mutedForeground,
    'tab.inactiveBackground': background,
    'tab.activeBackground': selectedTabBackground,
    'tab.selectedForeground': foreground,
    'tab.selectedBackground': selectedTabBackground,
    'tab.hoverBackground': activeBackground,
    'tab.unfocusedHoverBackground': background,
    'tab.border': border,
    'tab.lastPinnedBorder': border,
    'tab.unfocusedActiveBorderTop': border,
    'tab.activeBorder': border,
    'tab.unfocusedActiveBorder': border,
    'tab.activeBorderTop': secondaryForeground,

    'breadcrumb.foreground': mutedForeground,
    'breadcrumb.focusForeground': foreground,
    'breadcrumb.background': selectedTabBackground,
    'breadcrumb.activeSelectionForeground': selectionBackgroundActive,
    'breadcrumbPicker.background': background,

    'editor.foreground': foreground,
    'editor.background': editorBackground,
    'editorWidget.background': background,
    'editor.foldBackground': foldBackground,
    'editor.lineHighlightBackground': activeBackground,
    'editorLineNumber.foreground': mutedForeground,
    'editorLineNumber.activeForeground': activeForeground,
    'editorIndentGuide.background1': indentGuideBackground,
    'editorIndentGuide.activeBackground1': indentGuideActiveBackground,
    'editorIndentGuide.background': indentGuideBackground,
    'editorIndentGuide.activeBackground': indentGuideActiveBackground,
    'editorWhitespace.foreground': indentGuideBackground,

    'editor.findMatchBackground': findMatchBackground,
    'editor.findMatchHighlightBackground': findMatchHighlightBackground,
    'editor.inactiveSelectionBackground': selectionBackgroundInActive,
    'editor.selectionBackground': selectionBackground,
    'editor.selectionHighlightBackground': selectionBackgroundInActive,
    'editor.wordHighlightBackground': wordHighlightBackground,
    'editor.wordHighlightStrongBackground': wordHighlightStrongBackground,
    'editorBracketMatch.background': bracketMatchBackground,

    'diffEditor.insertedTextBackground': insertedTextBackground,
    'diffEditor.removedTextBackground': removedTextBackground,

    'scrollbar.shadow': scrollbarShadow,
    'scrollbarSlider.background': subtleForeground,
    'scrollbarSlider.hoverBackground': mutedForeground,
    'scrollbarSlider.activeBackground': mutedForeground,
    'editorOverviewRuler.border': border,

    'panel.background': background,
    'panel.border': border,
    'panelTitle.activeBorder': indicatorColor,
    'panelTitle.activeForeground': foreground,
    'panelTitle.inactiveForeground': mutedForeground,
    'panelInput.border': activeBackground,

    'terminal.foreground': foreground,
    'terminal.selectionBackground': selectionBackground,
    'terminal.inactiveSelectionBackground': selectionBackgroundInActive,
    'terminal.ansiBrightBlack': colorResolver.pick({ light: activeForeground, dark: mutedForeground }),
    'terminal.ansiBrightBlue': color('accent.blue'),
    'terminal.ansiBrightCyan': color('accent.cyan'),
    'terminal.ansiBrightGreen': color('accent.green'),
    'terminal.ansiBrightMagenta': color('accent.magenta'),
    'terminal.ansiBrightRed': color('accent.red'),
    'terminal.ansiBrightWhite': colorResolver.pick({ light: mutedForeground, dark: foreground }),
    'terminal.ansiBrightYellow': color('accent.yellow'),
    'terminal.ansiBlack': terminalBlack,
    'terminal.ansiBlue': color('accent.blue'),
    'terminal.ansiCyan': color('accent.cyan'),
    'terminal.ansiGreen': color('accent.green'),
    'terminal.ansiMagenta': color('accent.magenta'),
    'terminal.ansiRed': color('accent.red'),
    'terminal.ansiWhite': baseColor('text.primary'),
    'terminal.ansiYellow': color('accent.yellow'),

    'gitDecoration.addedResourceForeground': color('accent.green'),
    'gitDecoration.modifiedResourceForeground': color('accent.blue'),
    'gitDecoration.deletedResourceForeground': color('accent.red'),
    'gitDecoration.untrackedResourceForeground': color('accent.cyan'),
    'gitDecoration.ignoredResourceForeground': mutedForeground,
    'gitDecoration.conflictingResourceForeground': color('accent.orange'),
    'gitDecoration.submoduleResourceForeground': secondaryForeground,

    'editorGutter.modifiedBackground': color('accent.blue'),
    'editorGutter.addedBackground': color('accent.green'),
    'editorGutter.deletedBackground': color('accent.red'),

    'editorBracketHighlight.foreground1': color('accent.cyan'),
    'editorBracketHighlight.foreground2': color('accent.green'),
    'editorBracketHighlight.foreground3': color('accent.orange'),
    'editorBracketHighlight.foreground4': color('accent.magenta'),
    'editorBracketHighlight.foreground5': color('accent.yellow'),
    'editorBracketHighlight.foreground6': color('accent.blue'),

    'debugToolBar.background': background,
    'editor.stackFrameHighlightBackground': stackFrameHighlightBackground,
    'editor.focusedStackFrameHighlightBackground': focusedStackFrameHighlightBackground,

    'peekViewEditor.matchHighlightBackground': peekMatchBackground,
    'peekViewResult.matchHighlightBackground': peekMatchBackground,
    'peekViewEditor.background': background,
    'peekViewResult.background': background,

    'settings.headerForeground': foreground,
    'settings.modifiedItemIndicator': indicatorColor,
    'welcomePage.buttonBackground': activeBackground,
    'welcomePage.buttonHoverBackground': mutedForeground,

    'problemsErrorIcon.foreground': color('accent.red'),
    'problemsWarningIcon.foreground': color('accent.orange'),
    'problemsInfoIcon.foreground': color('accent.blue'),

    'editorError.foreground': color('accent.red'),
    'editorWarning.foreground': color('accent.orange'),
    'editorInfo.foreground': color('accent.blue'),
    'editorHint.foreground': color('accent.green'),

    'editorGutter.commentRangeForeground': mutedForeground,
    'editorGutter.foldingControlForeground': secondaryForeground,

    'editorInlayHint.foreground': color('syntax.punctuation'),
    'editorInlayHint.background': transparent,

    'editorStickyScroll.background': activeBackground,
    'editorStickyScrollHover.background': activeBackground,

    'menu.background': background,
    'menu.foreground': foreground,
    'menu.border': border,
    'menu.separatorBackground': border,
    'menu.selectionBackground': focusBackground,

    'widget.border': border,
    'actionBar.toggledBackground': focusBackground,
    'ports.iconRunningProcessForeground': color('accent.green'),
  }
}
