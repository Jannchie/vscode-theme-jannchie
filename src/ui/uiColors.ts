import type { ColorResolver } from '../core/colorResolver'
import { themePalette } from '../config/colorPalette'
import { opacity } from '../config/opacity'

export function buildUIColors(colorResolver: ColorResolver) {
  const foreground = colorResolver.resolveRole('foreground')
  const activeForeground = colorResolver.resolveRole('activeForeground')
  const secondaryForeground = colorResolver.resolveRole('secondaryForeground')
  const mutedForeground = colorResolver.resolveRole('mutedForeground')
  const subtleForeground = colorResolver.resolveRole('subtleForeground')
  const primary = colorResolver.resolveRole('primary')
  const background = colorResolver.resolveRole('background')
  const activeBackground = colorResolver.resolveRole('activeBackground')
  const border = colorResolver.resolveRole('border')
  const overlayBase = colorResolver.pick({
    light: themePalette.light.ui.overlayBase,
    dark: themePalette.dark.ui.overlayBase,
  })
  const guideBase = colorResolver.pick({
    light: themePalette.light.ui.guideBase,
    dark: themePalette.dark.ui.guideBase,
  })

  const selectionBackgroundInActive = colorResolver.pick({
    light: `${overlayBase}${opacity.barely}`,
    dark: `${overlayBase}${opacity.faint}`,
  })
  const selectionBackgroundActive = colorResolver.pick({
    light: `${overlayBase}${opacity.faint}`,
    dark: `${overlayBase}${opacity.ghost}`,
  })
  const selectionBackground = colorResolver.pick({
    light: `${overlayBase}${opacity.faint}`,
    dark: `${overlayBase}${opacity.ghost}`,
  })

  return {
    'focusBorder': themePalette.shared.transparent,
    foreground,
    'descriptionForeground': secondaryForeground,
    'errorForeground': colorResolver.resolveRole('red'),

    'textLink.foreground': colorResolver.resolveRole('blue'),
    'textLink.activeForeground': colorResolver.resolveRole('blue'),
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
    'notificationsErrorIcon.foreground': colorResolver.resolveRole('red'),
    'notificationsWarningIcon.foreground': colorResolver.resolveRole('orange'),
    'notificationsInfoIcon.foreground': colorResolver.resolveRole('blue'),

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
    'statusBarItem.remoteHoverBackground': colorResolver.resolveRole('yellow'),
    'statusBarItem.remoteHoverForeground': background,
    'statusBarItem.errorBackground': colorResolver.resolveRole('red'),
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
    'editor.foldBackground': colorResolver.pick({
      light: `${overlayBase}${opacity.faint}`,
      dark: `${overlayBase}${opacity.faint}`,
    }),
    'editor.lineHighlightBackground': activeBackground,
    'editorLineNumber.foreground': mutedForeground,
    'editorLineNumber.activeForeground': activeForeground,
    'editorIndentGuide.background': colorResolver.pick({
      light: `${guideBase}${opacity.faint}`,
      dark: `${guideBase}${opacity.faint}`,
    }),
    'editorIndentGuide.activeBackground': colorResolver.pick({
      light: `${guideBase}${opacity.subtle}`,
      dark: `${guideBase}${opacity.subtle}`,
    }),
    'editorWhitespace.foreground': colorResolver.pick({
      light: `${guideBase}${opacity.faint}`,
      dark: `${guideBase}${opacity.faint}`,
    }),

    'editor.findMatchBackground': colorResolver.pick({
      light: `${colorResolver.resolveRole('yellow')}${opacity.subtle}`,
      dark: `${colorResolver.resolveRole('yellow')}${opacity.ghost}`,
    }),
    'editor.findMatchHighlightBackground': colorResolver.pick({
      light: `${colorResolver.resolveRole('yellow')}${opacity.lower}`,
      dark: `${colorResolver.resolveRole('yellow')}${opacity.subtle}`,
    }),
    'editor.inactiveSelectionBackground': selectionBackgroundInActive,
    'editor.selectionBackground': selectionBackground,
    'editor.selectionHighlightBackground': selectionBackgroundInActive,
    'editor.wordHighlightBackground': colorResolver.pick({
      light: `${colorResolver.resolveRole('green')}${opacity.barely}`,
      dark: `${colorResolver.resolveRole('green')}${opacity.barely}`,
    }),
    'editor.wordHighlightStrongBackground': colorResolver.pick({
      light: `${colorResolver.resolveRole('green')}${opacity.faint}`,
      dark: `${colorResolver.resolveRole('green')}${opacity.faint}`,
    }),
    'editorBracketMatch.background': colorResolver.pick({
      light: `${colorResolver.resolveRole('green')}${opacity.ghost}`,
      dark: `${colorResolver.resolveRole('green')}${opacity.ghost}`,
    }),

    'diffEditor.insertedTextBackground': colorResolver.pick({
      light: `${colorResolver.resolveRole('green')}${opacity.faint}`,
      dark: `${colorResolver.resolveRole('green')}${opacity.ghost}`,
    }),
    'diffEditor.removedTextBackground': colorResolver.pick({
      light: `${colorResolver.resolveRole('red')}${opacity.faint}`,
      dark: `${colorResolver.resolveRole('red')}${opacity.ghost}`,
    }),

    'scrollbar.shadow': colorResolver.pick({
      light: themePalette.light.ui.scrollbarShadow,
      dark: themePalette.dark.ui.scrollbarShadow,
    }),
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
    'terminal.ansiBrightBlue': colorResolver.resolveRole('blue'),
    'terminal.ansiBrightCyan': colorResolver.resolveRole('cyan'),
    'terminal.ansiBrightGreen': colorResolver.resolveRole('green'),
    'terminal.ansiBrightMagenta': colorResolver.resolveRole('magenta'),
    'terminal.ansiBrightRed': colorResolver.resolveRole('red'),
    'terminal.ansiBrightWhite': colorResolver.pick({ light: mutedForeground, dark: foreground }),
    'terminal.ansiBrightYellow': colorResolver.resolveRole('yellow'),
    'terminal.ansiBlack': colorResolver.pick({
      light: themePalette.light.ui.terminalBlack,
      dark: themePalette.dark.ui.terminalBlack,
    }),
    'terminal.ansiBlue': colorResolver.resolveRole('blue'),
    'terminal.ansiCyan': colorResolver.resolveRole('cyan'),
    'terminal.ansiGreen': colorResolver.resolveRole('green'),
    'terminal.ansiMagenta': colorResolver.resolveRole('magenta'),
    'terminal.ansiRed': colorResolver.resolveRole('red'),
    'terminal.ansiWhite': colorResolver.pick({
      light: colorResolver.resolveBaseRole('foreground'),
      dark: colorResolver.resolveBaseRole('foreground'),
    }),
    'terminal.ansiYellow': colorResolver.resolveRole('yellow'),

    'gitDecoration.addedResourceForeground': colorResolver.resolveRole('green'),
    'gitDecoration.modifiedResourceForeground': colorResolver.resolveRole('blue'),
    'gitDecoration.deletedResourceForeground': colorResolver.resolveRole('red'),
    'gitDecoration.untrackedResourceForeground': colorResolver.resolveRole('cyan'),
    'gitDecoration.ignoredResourceForeground': mutedForeground,
    'gitDecoration.conflictingResourceForeground': colorResolver.resolveRole('orange'),
    'gitDecoration.submoduleResourceForeground': secondaryForeground,

    'editorGutter.modifiedBackground': colorResolver.resolveRole('blue'),
    'editorGutter.addedBackground': colorResolver.resolveRole('green'),
    'editorGutter.deletedBackground': colorResolver.resolveRole('red'),

    'editorBracketHighlight.foreground1': colorResolver.resolveRole('cyan'),
    'editorBracketHighlight.foreground2': colorResolver.resolveRole('green'),
    'editorBracketHighlight.foreground3': colorResolver.resolveRole('orange'),
    'editorBracketHighlight.foreground4': colorResolver.resolveRole('magenta'),
    'editorBracketHighlight.foreground5': colorResolver.resolveRole('yellow'),
    'editorBracketHighlight.foreground6': colorResolver.resolveRole('blue'),

    'debugToolBar.background': background,
    'editor.stackFrameHighlightBackground': colorResolver.pick({
      light: `${colorResolver.resolveRole('yellow')}${opacity.ghost}`,
      dark: `${colorResolver.resolveRole('yellow')}${opacity.barely}`,
    }),
    'editor.focusedStackFrameHighlightBackground': colorResolver.pick({
      light: `${colorResolver.resolveRole('yellow')}${opacity.faint}`,
      dark: `${colorResolver.resolveRole('yellow')}${opacity.faint}`,
    }),

    'peekViewEditor.matchHighlightBackground': colorResolver.pick<string | undefined>({
      light: undefined,
      dark: themePalette.dark.ui.peekMatchBackground,
    }),
    'peekViewResult.matchHighlightBackground': colorResolver.pick<string | undefined>({
      light: undefined,
      dark: themePalette.dark.ui.peekMatchBackground,
    }),
    'peekViewEditor.background': background,
    'peekViewResult.background': background,

    'settings.headerForeground': foreground,
    'settings.modifiedItemIndicator': primary,
    'welcomePage.buttonBackground': activeBackground,
    'welcomePage.buttonHoverBackground': mutedForeground,

    'problemsErrorIcon.foreground': colorResolver.resolveRole('red'),
    'problemsWarningIcon.foreground': colorResolver.resolveRole('orange'),
    'problemsInfoIcon.foreground': colorResolver.resolveRole('blue'),

    'editorError.foreground': colorResolver.resolveRole('red'),
    'editorWarning.foreground': colorResolver.resolveRole('orange'),
    'editorInfo.foreground': colorResolver.resolveRole('blue'),
    'editorHint.foreground': colorResolver.resolveRole('green'),

    'editorGutter.commentRangeForeground': mutedForeground,
    'editorGutter.foldingControlForeground': secondaryForeground,

    'editorInlayHint.foreground': colorResolver.resolveRole('punctuation'),
    'editorInlayHint.background': themePalette.shared.transparent,

    'editorStickyScroll.background': activeBackground,
    'editorStickyScrollHover.background': activeBackground,

    'menu.separatorBackground': border,
  }
}
