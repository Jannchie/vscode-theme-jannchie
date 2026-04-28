import type { ColorResolver } from '@jannchie/theme-core'
import { resolveCodeBackground } from '@jannchie/theme-core'

export function buildUIColors(colorResolver: ColorResolver) {
  const color = colorResolver.resolve.bind(colorResolver)
  const colorByVariant = colorResolver.resolveByVariant.bind(colorResolver)
  const baseColor = colorResolver.resolveBase.bind(colorResolver)

  const foreground = color('text.primary')
  const chromeForeground = color('text.chrome')
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

  const stateError = color('state.error')
  const stateWarning = color('state.warning')
  const stateInfo = color('state.info')
  const stateHint = color('state.hint')
  const stateAdded = color('state.added')
  const stateModified = color('state.modified')
  const stateDeleted = color('state.deleted')
  const stateConflict = color('state.conflict')
  const stateUntracked = color('state.untracked')
  const stateIndicator = color('state.indicator')

  const selectedTabBackground = colorResolver.pick({
    light: activeBackground,
    dark: editorBackground,
  })
  const remoteBackground = stateIndicator
  const remoteForeground = colorResolver.pick({
    light: color('utility.terminalBlack'),
    dark: background,
  })
  const remoteHoverBackground = background
  const remoteHoverForeground = chromeForeground
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
  const insertedTextBackground = colorByVariant('state.added', {
    light: 'faint',
    dark: 'ghost',
  })
  const removedTextBackground = colorByVariant('state.deleted', {
    light: 'faint',
    dark: 'ghost',
  })
  const mergeCurrentBackground = color('state.added', 'barely')
  const mergeIncomingBackground = color('state.info', 'barely')
  const mergeCommonBackground = color('accent.magenta', 'barely')
  const scrollbarShadow = color('surface.shadow')
  const terminalBlack = color('utility.terminalBlack')
  const peekMatchBackground = color('utility.peekMatchBackground')

  return {
    'focusBorder': transparent,
    foreground,
    'descriptionForeground': secondaryForeground,
    'errorForeground': stateError,

    'textLink.foreground': stateInfo,
    'textLink.activeForeground': stateInfo,
    'textBlockQuote.background': background,
    'textBlockQuote.border': border,
    'textCodeBlock.background': background,
    'textPreformat.foreground': mutedForeground,
    'textSeparator.foreground': chromeForeground,

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
    'inputValidation.errorBackground': color('state.error', 'faint'),
    'inputValidation.errorForeground': stateError,
    'inputValidation.errorBorder': stateError,
    'inputValidation.warningBackground': color('state.warning', 'faint'),
    'inputValidation.warningForeground': stateWarning,
    'inputValidation.warningBorder': stateWarning,
    'inputValidation.infoBackground': color('state.info', 'faint'),
    'inputValidation.infoForeground': stateInfo,
    'inputValidation.infoBorder': stateInfo,

    'badge.foreground': background,
    'badge.background': indicatorColor,

    'progressBar.background': primary,

    'titleBar.activeForeground': chromeForeground,
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

    'sideBar.foreground': chromeForeground,
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
    'list.errorForeground': stateError,
    'list.warningForeground': stateWarning,

    'tree.indentGuidesStroke': activeBackground,

    'notificationCenterHeader.foreground': mutedForeground,
    'notificationCenterHeader.background': background,
    'notifications.foreground': foreground,
    'notifications.background': background,
    'notifications.border': border,
    'notificationsErrorIcon.foreground': stateError,
    'notificationsWarningIcon.foreground': stateWarning,
    'notificationsInfoIcon.foreground': stateInfo,

    'pickerGroup.border': border,
    'pickerGroup.foreground': foreground,
    'quickInput.background': background,
    'quickInput.foreground': foreground,
    'quickInputList.focusBackground': activeBackground,

    'statusBar.foreground': chromeForeground,
    'statusBar.background': background,
    'statusBar.border': border,
    'statusBar.noFolderBackground': background,
    'statusBar.debuggingBackground': activeBackground,
    'statusBar.debuggingForeground': chromeForeground,
    'statusBarItem.prominentBackground': activeBackground,
    'statusBarItem.remoteBackground': remoteBackground,
    'statusBarItem.remoteForeground': remoteForeground,
    'statusBarItem.remoteHoverBackground': remoteHoverBackground,
    'statusBarItem.remoteHoverForeground': remoteHoverForeground,
    'statusBarItem.errorBackground': stateError,
    'statusBarItem.errorForeground': background,
    'statusBarItem.warningBackground': stateWarning,
    'statusBarItem.warningForeground': background,

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
    'editorLineNumber.activeForeground': chromeForeground,
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

    'merge.currentHeaderBackground': color('state.added', 'subtle'),
    'merge.currentContentBackground': mergeCurrentBackground,
    'merge.incomingHeaderBackground': color('state.info', 'subtle'),
    'merge.incomingContentBackground': mergeIncomingBackground,
    'merge.commonHeaderBackground': color('accent.magenta', 'subtle'),
    'merge.commonContentBackground': mergeCommonBackground,
    'mergeEditor.change.background': color('state.modified', 'faint'),
    'mergeEditor.change.word.background': color('state.modified', 'ghost'),
    'mergeEditor.conflict.unhandledUnfocused.border': stateConflict,
    'mergeEditor.conflict.unhandledFocused.border': stateConflict,
    'mergeEditor.conflict.handledUnfocused.border': mutedForeground,
    'mergeEditor.conflict.handledFocused.border': mutedForeground,

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
    'terminal.ansiBrightBlack': colorResolver.pick({ light: chromeForeground, dark: mutedForeground }),
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

    'gitDecoration.addedResourceForeground': stateAdded,
    'gitDecoration.modifiedResourceForeground': stateModified,
    'gitDecoration.deletedResourceForeground': stateDeleted,
    'gitDecoration.untrackedResourceForeground': stateUntracked,
    'gitDecoration.ignoredResourceForeground': mutedForeground,
    'gitDecoration.conflictingResourceForeground': stateConflict,
    'gitDecoration.submoduleResourceForeground': secondaryForeground,
    'gitDecoration.stageDeletedResourceForeground': stateDeleted,
    'gitDecoration.stageModifiedResourceForeground': stateModified,

    'editorGutter.modifiedBackground': stateModified,
    'editorGutter.addedBackground': stateAdded,
    'editorGutter.deletedBackground': stateDeleted,

    'editorBracketHighlight.foreground1': color('accent.cyan'),
    'editorBracketHighlight.foreground2': color('accent.green'),
    'editorBracketHighlight.foreground3': color('accent.orange'),
    'editorBracketHighlight.foreground4': color('accent.magenta'),
    'editorBracketHighlight.foreground5': color('accent.yellow'),
    'editorBracketHighlight.foreground6': color('accent.blue'),

    'debugToolBar.background': background,
    'editor.stackFrameHighlightBackground': stackFrameHighlightBackground,
    'editor.focusedStackFrameHighlightBackground': focusedStackFrameHighlightBackground,
    'debugTokenExpression.name': color('syntax.property'),
    'debugTokenExpression.value': foreground,
    'debugTokenExpression.string': color('syntax.string'),
    'debugTokenExpression.boolean': color('syntax.boolean'),
    'debugTokenExpression.number': color('syntax.number'),
    'debugTokenExpression.error': stateError,
    'debugIcon.breakpointForeground': stateError,
    'debugIcon.breakpointDisabledForeground': mutedForeground,
    'debugIcon.startForeground': stateAdded,
    'debugIcon.pauseForeground': stateInfo,
    'debugIcon.stopForeground': stateError,
    'debugIcon.continueForeground': stateAdded,
    'debugIcon.stepOverForeground': stateInfo,

    'peekViewEditor.matchHighlightBackground': peekMatchBackground,
    'peekViewResult.matchHighlightBackground': peekMatchBackground,
    'peekViewEditor.background': background,
    'peekViewResult.background': background,

    'settings.headerForeground': foreground,
    'settings.modifiedItemIndicator': indicatorColor,
    'welcomePage.buttonBackground': activeBackground,
    'welcomePage.buttonHoverBackground': mutedForeground,

    'problemsErrorIcon.foreground': stateError,
    'problemsWarningIcon.foreground': stateWarning,
    'problemsInfoIcon.foreground': stateInfo,

    'editorError.foreground': stateError,
    'editorWarning.foreground': stateWarning,
    'editorInfo.foreground': stateInfo,
    'editorHint.foreground': stateHint,

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
    'ports.iconRunningProcessForeground': stateAdded,

    // Chat / Inline chat
    'chat.requestBackground': activeBackground,
    'chat.requestBorder': border,
    'chat.slashCommandForeground': primary,
    'chat.slashCommandBackground': color('accent.blue', 'faint'),
    'chat.editedFileForeground': stateModified,
    'inlineChat.background': background,
    'inlineChat.border': border,
    'inlineChat.shadow': scrollbarShadow,
    'inlineChatInput.border': border,
    'inlineChatInput.background': activeBackground,
    'inlineChatInput.focusBorder': primary,
    'inlineChatInput.placeholderForeground': secondaryForeground,

    // Notebook
    'notebook.editorBackground': editorBackground,
    'notebook.cellBorderColor': border,
    'notebook.cellHoverBackground': activeBackground,
    'notebook.cellInsertionIndicator': primary,
    'notebook.cellStatusBarItemHoverBackground': activeBackground,
    'notebook.cellToolbarSeparator': border,
    'notebook.focusedCellBorder': primary,
    'notebook.focusedEditorBorder': primary,
    'notebook.outputContainerBackgroundColor': activeBackground,
    'notebook.selectedCellBackground': activeBackground,
    'notebook.selectedCellBorder': border,
    'notebookStatusErrorIcon.foreground': stateError,
    'notebookStatusRunningIcon.foreground': primary,
    'notebookStatusSuccessIcon.foreground': stateAdded,

    // Testing
    'testing.iconPassed': stateAdded,
    'testing.iconFailed': stateError,
    'testing.iconErrored': stateError,
    'testing.iconQueued': stateWarning,
    'testing.iconUnset': mutedForeground,
    'testing.iconSkipped': mutedForeground,
    'testing.runAction': stateAdded,
    'testing.message.error.decorationForeground': stateError,
    'testing.message.info.decorationForeground': stateInfo,

    // Charts
    'charts.foreground': foreground,
    'charts.lines': mutedForeground,
    'charts.red': color('accent.red'),
    'charts.blue': color('accent.blue'),
    'charts.yellow': color('accent.yellow'),
    'charts.orange': color('accent.orange'),
    'charts.green': color('accent.green'),
    'charts.purple': color('accent.magenta'),

    // Comments view
    'commentsView.resolvedIcon': mutedForeground,
    'commentsView.unresolvedIcon': stateInfo,
  }
}
