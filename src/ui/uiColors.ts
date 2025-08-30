import type { ColorResolver } from '../core/colorResolver'
import { semanticColors } from '../config/semanticColors'
import { opacity } from '../config/opacity'

export function buildUIColors(colorResolver: ColorResolver) {
  // Core color variables
  const foreground = colorResolver.getForegroundColor(
    semanticColors.foreground,
    semanticColors.blackForeground
  )
  const activeForeground = colorResolver.resolveColor(semanticColors.activeForeground)
  const secondaryForeground = colorResolver.resolveColor(semanticColors.secondaryForeground)
  const mutedForeground = colorResolver.resolveColor(semanticColors.mutedForeground)
  const subtleForeground = colorResolver.resolveColor(semanticColors.subtleForeground)
  const primary = colorResolver.resolveColor(semanticColors.primary)

  const background = colorResolver.getBackgroundColor(
    semanticColors.background,
    semanticColors.softBackground,
    semanticColors.blackBackground
  )
  const activeBackground = colorResolver.getBackgroundColor(
    semanticColors.activeBackground,
    semanticColors.softActiveBackground,
    semanticColors.blackActiveBackground
  )
  const border = colorResolver.getBackgroundColor(
    semanticColors.border,
    semanticColors.softBorder
  )

  // Selection colors
  const selectionBackgroundInActive = colorResolver.pick({ 
    light: `${colorResolver.resolveColor(semanticColors.foreground)}${opacity.barely}`, 
    dark: `#eeeeee${opacity.faint}` 
  })
  const selectionBackgroundActive = colorResolver.pick({ 
    light: `${colorResolver.resolveColor(semanticColors.foreground)}${opacity.faint}`, 
    dark: `#eeeeee${opacity.ghost}` 
  })
  const selectionBackground = colorResolver.pick({ 
    light: `${colorResolver.resolveColor(semanticColors.foreground)}${opacity.faint}`, 
    dark: `#eeeeee${opacity.ghost}` 
  })

  return {
    'focusBorder': '#00000000',
    foreground,
    'descriptionForeground': secondaryForeground,
    'errorForeground': colorResolver.resolveColor(semanticColors.red),

    'textLink.foreground': colorResolver.resolveColor(semanticColors.blue),
    'textLink.activeForeground': colorResolver.resolveColor(semanticColors.blue),
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
    'notificationsErrorIcon.foreground': colorResolver.resolveColor(semanticColors.red),
    'notificationsWarningIcon.foreground': colorResolver.resolveColor(semanticColors.orange),
    'notificationsInfoIcon.foreground': colorResolver.resolveColor(semanticColors.blue),

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
    'statusBarItem.remoteHoverBackground': colorResolver.resolveColor(semanticColors.yellow),
    'statusBarItem.remoteHoverForeground': background,
    'statusBarItem.errorBackground': colorResolver.resolveColor(semanticColors.red),
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
      light: `${colorResolver.resolveColor(semanticColors.foreground)}${opacity.faint}`, 
      dark: `#eeeeee${opacity.faint}` 
    }),
    'editor.lineHighlightBackground': activeBackground,
    'editorLineNumber.foreground': mutedForeground,
    'editorLineNumber.activeForeground': activeForeground,
    'editorIndentGuide.background': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.foreground)}${opacity.faint}`, 
      dark: `#ffffff${opacity.faint}` 
    }),
    'editorIndentGuide.activeBackground': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.foreground)}${opacity.subtle}`, 
      dark: `#ffffff${opacity.subtle}` 
    }),
    'editorWhitespace.foreground': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.foreground)}${opacity.faint}`, 
      dark: `#ffffff${opacity.faint}` 
    }),

    'editor.findMatchBackground': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.yellow)}${opacity.subtle}`, 
      dark: `${colorResolver.resolveColor(semanticColors.yellow)}${opacity.ghost}` 
    }),
    'editor.findMatchHighlightBackground': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.yellow)}${opacity.lower}`, 
      dark: `${colorResolver.resolveColor(semanticColors.yellow)}${opacity.subtle}` 
    }),
    'editor.inactiveSelectionBackground': selectionBackgroundInActive,
    'editor.selectionBackground': selectionBackground,
    'editor.selectionHighlightBackground': selectionBackgroundInActive,
    'editor.wordHighlightBackground': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.green)}${opacity.barely}`, 
      dark: `${colorResolver.resolveColor(semanticColors.green)}${opacity.barely}` 
    }),
    'editor.wordHighlightStrongBackground': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.green)}${opacity.faint}`, 
      dark: `${colorResolver.resolveColor(semanticColors.green)}${opacity.faint}` 
    }),
    'editorBracketMatch.background': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.green)}${opacity.ghost}`, 
      dark: `${colorResolver.resolveColor(semanticColors.green)}${opacity.ghost}` 
    }),

    'diffEditor.insertedTextBackground': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.green)}${opacity.faint}`, 
      dark: `${colorResolver.resolveColor(semanticColors.green)}${opacity.ghost}` 
    }),
    'diffEditor.removedTextBackground': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.red)}${opacity.faint}`, 
      dark: `${colorResolver.resolveColor(semanticColors.red)}${opacity.ghost}` 
    }),

    'scrollbar.shadow': colorResolver.pick({ light: '#6a737d33', dark: '#0000' }),
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
    'terminal.ansiBrightBlue': colorResolver.resolveColor(semanticColors.blue),
    'terminal.ansiBrightCyan': colorResolver.resolveColor(semanticColors.cyan),
    'terminal.ansiBrightGreen': colorResolver.resolveColor(semanticColors.green),
    'terminal.ansiBrightMagenta': colorResolver.resolveColor(semanticColors.magenta),
    'terminal.ansiBrightRed': colorResolver.resolveColor(semanticColors.red),
    'terminal.ansiBrightWhite': colorResolver.pick({ light: mutedForeground, dark: foreground }),
    'terminal.ansiBrightYellow': colorResolver.resolveColor(semanticColors.yellow),
    'terminal.ansiBlack': colorResolver.pick({ 
      light: colorResolver.resolveColor(semanticColors.background), 
      dark: '#393a34' 
    }),
    'terminal.ansiBlue': colorResolver.resolveColor(semanticColors.blue),
    'terminal.ansiCyan': colorResolver.resolveColor(semanticColors.cyan),
    'terminal.ansiGreen': colorResolver.resolveColor(semanticColors.green),
    'terminal.ansiMagenta': colorResolver.resolveColor(semanticColors.magenta),
    'terminal.ansiRed': colorResolver.resolveColor(semanticColors.red),
    'terminal.ansiWhite': colorResolver.pick({ 
      light: colorResolver.resolveColor(semanticColors.foreground), 
      dark: colorResolver.resolveColor(semanticColors.foreground) 
    }),
    'terminal.ansiYellow': colorResolver.resolveColor(semanticColors.yellow),

    'gitDecoration.addedResourceForeground': colorResolver.resolveColor(semanticColors.green),
    'gitDecoration.modifiedResourceForeground': colorResolver.resolveColor(semanticColors.blue),
    'gitDecoration.deletedResourceForeground': colorResolver.resolveColor(semanticColors.red),
    'gitDecoration.untrackedResourceForeground': colorResolver.resolveColor(semanticColors.cyan),
    'gitDecoration.ignoredResourceForeground': mutedForeground,
    'gitDecoration.conflictingResourceForeground': colorResolver.resolveColor(semanticColors.orange),
    'gitDecoration.submoduleResourceForeground': secondaryForeground,

    'editorGutter.modifiedBackground': colorResolver.resolveColor(semanticColors.blue),
    'editorGutter.addedBackground': colorResolver.resolveColor(semanticColors.green),
    'editorGutter.deletedBackground': colorResolver.resolveColor(semanticColors.red),

    'editorBracketHighlight.foreground1': colorResolver.resolveColor(semanticColors.cyan),
    'editorBracketHighlight.foreground2': colorResolver.resolveColor(semanticColors.green),
    'editorBracketHighlight.foreground3': colorResolver.resolveColor(semanticColors.orange),
    'editorBracketHighlight.foreground4': colorResolver.resolveColor(semanticColors.magenta),
    'editorBracketHighlight.foreground5': colorResolver.resolveColor(semanticColors.yellow),
    'editorBracketHighlight.foreground6': colorResolver.resolveColor(semanticColors.blue),

    'debugToolBar.background': background,
    'editor.stackFrameHighlightBackground': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.yellow)}${opacity.ghost}`, 
      dark: `${colorResolver.resolveColor(semanticColors.yellow)}${opacity.barely}` 
    }),
    'editor.focusedStackFrameHighlightBackground': colorResolver.pick({ 
      light: `${colorResolver.resolveColor(semanticColors.yellow)}${opacity.faint}`, 
      dark: `${colorResolver.resolveColor(semanticColors.yellow)}${opacity.faint}` 
    }),

    'peekViewEditor.matchHighlightBackground': colorResolver.pick({ dark: '#ffd33d33' }),
    'peekViewResult.matchHighlightBackground': colorResolver.pick({ dark: '#ffd33d33' }),
    'peekViewEditor.background': background,
    'peekViewResult.background': background,

    'settings.headerForeground': foreground,
    'settings.modifiedItemIndicator': primary,
    'welcomePage.buttonBackground': activeBackground,
    'welcomePage.buttonHoverBackground': mutedForeground,

    'problemsErrorIcon.foreground': colorResolver.resolveColor(semanticColors.red),
    'problemsWarningIcon.foreground': colorResolver.resolveColor(semanticColors.orange),
    'problemsInfoIcon.foreground': colorResolver.resolveColor(semanticColors.blue),

    'editorError.foreground': colorResolver.resolveColor(semanticColors.red),
    'editorWarning.foreground': colorResolver.resolveColor(semanticColors.orange),
    'editorInfo.foreground': colorResolver.resolveColor(semanticColors.blue),
    'editorHint.foreground': colorResolver.resolveColor(semanticColors.green),

    'editorGutter.commentRangeForeground': mutedForeground,
    'editorGutter.foldingControlForeground': secondaryForeground,

    'editorInlayHint.foreground': colorResolver.getPunctuationColor(semanticColors.punctuation),
    'editorInlayHint.background': '#00000000',

    'editorStickyScroll.background': activeBackground,
    'editorStickyScrollHover.background': activeBackground,

    'menu.separatorBackground': border,
  }
}