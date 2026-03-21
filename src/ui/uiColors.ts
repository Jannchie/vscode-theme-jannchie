import type { ColorResolver } from '../core/colorResolver'

export function buildUIColors(colorResolver: ColorResolver) {
  const role = colorResolver.resolveRole.bind(colorResolver)
  const roleByVariant = colorResolver.resolveRoleByVariant.bind(colorResolver)
  const baseRole = colorResolver.resolveBaseRole.bind(colorResolver)
  const uiRole = colorResolver.resolveUiRole.bind(colorResolver)
  const uiRoleByVariant = colorResolver.resolveUiRoleByVariant.bind(colorResolver)
  const sharedColor = colorResolver.resolveSharedColor.bind(colorResolver)

  const foreground = role('foreground')
  const activeForeground = role('activeForeground')
  const secondaryForeground = role('secondaryForeground')
  const mutedForeground = role('mutedForeground')
  const subtleForeground = role('subtleForeground')
  const primary = role('primary')
  const background = role('background')
  const activeBackground = role('activeBackground')
  const border = role('border')
  const transparent = sharedColor('transparent')
  const selectionBackgroundInActive = uiRoleByVariant('overlayBase', {
    light: 'barely',
    dark: 'faint',
  }) ?? transparent
  const selectionBackgroundActive = uiRoleByVariant('overlayBase', {
    light: 'faint',
    dark: 'ghost',
  }) ?? transparent
  const selectionBackground = selectionBackgroundActive
  const foldBackground = uiRoleByVariant('overlayBase', {
    light: 'faint',
    dark: 'faint',
  }) ?? transparent
  const indentGuideBackground = uiRoleByVariant('guideBase', {
    light: 'faint',
    dark: 'faint',
  }) ?? transparent
  const indentGuideActiveBackground = uiRoleByVariant('guideBase', {
    light: 'subtle',
    dark: 'subtle',
  }) ?? transparent
  const findMatchBackground = roleByVariant('yellow', {
    light: 'subtle',
    dark: 'ghost',
  })
  const findMatchHighlightBackground = roleByVariant('yellow', {
    light: 'lower',
    dark: 'subtle',
  })
  const stackFrameHighlightBackground = roleByVariant('yellow', {
    light: 'ghost',
    dark: 'barely',
  })
  const focusedStackFrameHighlightBackground = roleByVariant('yellow', {
    light: 'faint',
    dark: 'faint',
  })
  const wordHighlightBackground = role('green', 'barely')
  const wordHighlightStrongBackground = role('green', 'faint')
  const bracketMatchBackground = role('green', 'ghost')
  const insertedTextBackground = roleByVariant('green', {
    light: 'faint',
    dark: 'ghost',
  })
  const removedTextBackground = roleByVariant('red', {
    light: 'faint',
    dark: 'ghost',
  })
  const scrollbarShadow = uiRole('scrollbarShadow') ?? transparent
  const terminalBlack = uiRole('terminalBlack') ?? background
  const peekMatchBackground = uiRole('peekMatchBackground')

  return {
    'focusBorder': transparent,
    foreground,
    'descriptionForeground': secondaryForeground,
    'errorForeground': role('red'),

    'textLink.foreground': role('blue'),
    'textLink.activeForeground': role('blue'),
    'textBlockQuote.background': background,
    'textBlockQuote.border': border,
    'textCodeBlock.background': background,
    'textPreformat.foreground': mutedForeground,
    'textSeparator.foreground': activeForeground,

    'button.background': primary,
    'button.foreground': foreground,
    'button.hoverBackground': primary,

    'checkbox.background': activeBackground,
    'checkbox.border': activeBackground,

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
    'badge.background': secondaryForeground,

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
    'activityBarBadge.background': activeForeground,
    'activityBar.activeBorder': primary,
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
    'list.hoverBackground': activeBackground,
    'list.inactiveSelectionBackground': activeBackground,
    'list.activeSelectionBackground': activeBackground,
    'list.inactiveFocusBackground': background,
    'list.focusBackground': activeBackground,
    'list.highlightForeground': primary,

    'tree.indentGuidesStroke': activeBackground,

    'notificationCenterHeader.foreground': mutedForeground,
    'notificationCenterHeader.background': background,
    'notifications.foreground': foreground,
    'notifications.background': background,
    'notifications.border': border,
    'notificationsErrorIcon.foreground': role('red'),
    'notificationsWarningIcon.foreground': role('orange'),
    'notificationsInfoIcon.foreground': role('blue'),

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
    'statusBarItem.remoteBackground': activeBackground,
    'statusBarItem.remoteForeground': activeForeground,
    'statusBarItem.remoteHoverBackground': role('yellow'),
    'statusBarItem.remoteHoverForeground': background,
    'statusBarItem.errorBackground': role('red'),
    'statusBarItem.errorForeground': background,

    'editorGroupHeader.tabsBackground': background,
    'editorGroupHeader.tabsBorder': border,
    'editorGroup.border': border,

    'tab.activeForeground': foreground,
    'tab.inactiveForeground': mutedForeground,
    'tab.inactiveBackground': background,
    'tab.activeBackground': background,
    'tab.hoverBackground': activeBackground,
    'tab.unfocusedHoverBackground': background,
    'tab.border': border,
    'tab.unfocusedActiveBorderTop': border,
    'tab.activeBorder': border,
    'tab.unfocusedActiveBorder': border,
    'tab.activeBorderTop': secondaryForeground,

    'breadcrumb.foreground': mutedForeground,
    'breadcrumb.focusForeground': foreground,
    'breadcrumb.background': activeBackground,
    'breadcrumb.activeSelectionForeground': selectionBackgroundActive,
    'breadcrumbPicker.background': background,

    'editor.foreground': foreground,
    'editor.background': background,
    'editorWidget.background': background,
    'editor.foldBackground': foldBackground,
    'editor.lineHighlightBackground': activeBackground,
    'editorLineNumber.foreground': mutedForeground,
    'editorLineNumber.activeForeground': activeForeground,
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
    'panelTitle.activeBorder': primary,
    'panelTitle.activeForeground': foreground,
    'panelTitle.inactiveForeground': mutedForeground,
    'panelInput.border': activeBackground,

    'terminal.foreground': foreground,
    'terminal.selectionBackground': selectionBackground,
    'terminal.ansiBrightBlack': colorResolver.pick({ light: activeForeground, dark: mutedForeground }),
    'terminal.ansiBrightBlue': role('blue'),
    'terminal.ansiBrightCyan': role('cyan'),
    'terminal.ansiBrightGreen': role('green'),
    'terminal.ansiBrightMagenta': role('magenta'),
    'terminal.ansiBrightRed': role('red'),
    'terminal.ansiBrightWhite': colorResolver.pick({ light: mutedForeground, dark: foreground }),
    'terminal.ansiBrightYellow': role('yellow'),
    'terminal.ansiBlack': terminalBlack,
    'terminal.ansiBlue': role('blue'),
    'terminal.ansiCyan': role('cyan'),
    'terminal.ansiGreen': role('green'),
    'terminal.ansiMagenta': role('magenta'),
    'terminal.ansiRed': role('red'),
    'terminal.ansiWhite': baseRole('foreground'),
    'terminal.ansiYellow': role('yellow'),

    'gitDecoration.addedResourceForeground': role('green'),
    'gitDecoration.modifiedResourceForeground': role('blue'),
    'gitDecoration.deletedResourceForeground': role('red'),
    'gitDecoration.untrackedResourceForeground': role('cyan'),
    'gitDecoration.ignoredResourceForeground': mutedForeground,
    'gitDecoration.conflictingResourceForeground': role('orange'),
    'gitDecoration.submoduleResourceForeground': secondaryForeground,

    'editorGutter.modifiedBackground': role('blue'),
    'editorGutter.addedBackground': role('green'),
    'editorGutter.deletedBackground': role('red'),

    'editorBracketHighlight.foreground1': role('cyan'),
    'editorBracketHighlight.foreground2': role('green'),
    'editorBracketHighlight.foreground3': role('orange'),
    'editorBracketHighlight.foreground4': role('magenta'),
    'editorBracketHighlight.foreground5': role('yellow'),
    'editorBracketHighlight.foreground6': role('blue'),

    'debugToolBar.background': background,
    'editor.stackFrameHighlightBackground': stackFrameHighlightBackground,
    'editor.focusedStackFrameHighlightBackground': focusedStackFrameHighlightBackground,

    'peekViewEditor.matchHighlightBackground': peekMatchBackground,
    'peekViewResult.matchHighlightBackground': peekMatchBackground,
    'peekViewEditor.background': background,
    'peekViewResult.background': background,

    'settings.headerForeground': foreground,
    'settings.modifiedItemIndicator': primary,
    'welcomePage.buttonBackground': activeBackground,
    'welcomePage.buttonHoverBackground': mutedForeground,

    'problemsErrorIcon.foreground': role('red'),
    'problemsWarningIcon.foreground': role('orange'),
    'problemsInfoIcon.foreground': role('blue'),

    'editorError.foreground': role('red'),
    'editorWarning.foreground': role('orange'),
    'editorInfo.foreground': role('blue'),
    'editorHint.foreground': role('green'),

    'editorGutter.commentRangeForeground': mutedForeground,
    'editorGutter.foldingControlForeground': secondaryForeground,

    'editorInlayHint.foreground': role('punctuation'),
    'editorInlayHint.background': transparent,

    'editorStickyScroll.background': activeBackground,
    'editorStickyScrollHover.background': activeBackground,

    'menu.separatorBackground': border,
  }
}
