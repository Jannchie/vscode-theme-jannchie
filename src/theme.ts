import { toArray } from '@antfu/utils'
import { getColors } from './primer'
import { JannchieThemes, scheme, opacity } from './colors'

export default function getTheme({ style, name, soft = false, black = false }) {
  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = options => options[style]

  const themeColor = (key: keyof typeof JannchieThemes, op = '') => pick({ light: JannchieThemes[key][1] + op, dark: JannchieThemes[key][0] + op })

  const primer = getColors(style)

  const foreground = black
    ? themeColor('blackForeground')
    : themeColor('foreground')
  const secondaryForeground = themeColor('secondaryForeground')
  const mutedForeground = themeColor('mutedForeground')
  const subtleForeground = themeColor('subtleForeground')
  const activeForeground = themeColor('activeForeground')
  const primary = themeColor('primary')

  const border = soft
    ? themeColor('softBorder')
    : themeColor('border')
  const background = black
    ? themeColor('blackBackground')
    : soft
      ? themeColor('softBackground')
      : themeColor('background')
  const activeBackground = black
    ? themeColor('blackActiveBackground')
    : soft
      ? themeColor('softActiveBackground')
      : themeColor('activeBackground')

  const punctuation = black
    ? themeColor('punctuation', opacity.medium)
    : themeColor('punctuation')

  const selectionBackgroundInActive = pick({ light: `${themeColor('foreground')}${opacity.barely}`, dark: `#eeeeee${opacity.faint}` })
  const selectionBackgroundActive = pick({ light: `${themeColor('foreground')}${opacity.faint}`, dark: `#eeeeee${opacity.ghost}` })
  const selectionBackground = pick({ light: `${themeColor('foreground')}${opacity.faint}`, dark: `#eeeeee${opacity.ghost}` })

  const theme = {
    name,
    base: pick({ light: 'vs', dark: 'vs-dark' }),
    colors: {
      'focusBorder': '#00000000',
      foreground,
      'descriptionForeground': secondaryForeground,
      'errorForeground': themeColor('red'),

      'textLink.foreground': themeColor('blue'),
      'textLink.activeForeground': themeColor('blue'),
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
      'notificationsErrorIcon.foreground': themeColor('red'),
      'notificationsWarningIcon.foreground': themeColor('orange'),
      'notificationsInfoIcon.foreground': themeColor('blue'),

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
      'statusBarItem.remoteHoverBackground': themeColor('yellow'),
      'statusBarItem.remoteHoverForeground': background,
      'statusBarItem.errorBackground': themeColor('red'),
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
      'editor.foldBackground': pick({ light: `${themeColor('foreground')}${opacity.faint}`, dark: `#eeeeee${opacity.faint}` }),
      'editor.lineHighlightBackground': activeBackground,
      'editorLineNumber.foreground': mutedForeground,
      'editorLineNumber.activeForeground': activeForeground,
      'editorIndentGuide.background': pick({ light: `${themeColor('foreground')}${opacity.faint}`, dark: `#ffffff${opacity.faint}` }),
      'editorIndentGuide.activeBackground': pick({ light: `${themeColor('foreground')}${opacity.subtle}`, dark: `#ffffff${opacity.subtle}` }),
      'editorWhitespace.foreground': pick({ light: `${themeColor('foreground')}${opacity.faint}`, dark: `#ffffff${opacity.faint}` }),
      // 'editorCursor.foreground': primary,

      'editor.findMatchBackground': pick({ light: `${themeColor('yellow')}${opacity.subtle}`, dark: `${themeColor('yellow')}${opacity.ghost}` }),
      'editor.findMatchHighlightBackground': pick({ light: `${themeColor('yellow')}${opacity.lower}`, dark: `${themeColor('yellow')}${opacity.subtle}` }),
      'editor.inactiveSelectionBackground': selectionBackgroundInActive,
      'editor.selectionBackground': selectionBackground,
      'editor.selectionHighlightBackground': selectionBackgroundInActive,
      'editor.wordHighlightBackground': pick({ light: `${themeColor('green')}${opacity.barely}`, dark: `${themeColor('green')}${opacity.barely}` }),
      'editor.wordHighlightStrongBackground': pick({ light: `${themeColor('green')}${opacity.faint}`, dark: `${themeColor('green')}${opacity.faint}` }),
      'editorBracketMatch.background': pick({ light: `${themeColor('green')}${opacity.ghost}`, dark: `${themeColor('green')}${opacity.ghost}` }),

      'diffEditor.insertedTextBackground': pick({ light: `${themeColor('green')}${opacity.faint}`, dark: `${themeColor('green')}${opacity.ghost}` }),
      'diffEditor.removedTextBackground': pick({ light: `${themeColor('red')}${opacity.faint}`, dark: `${themeColor('red')}${opacity.ghost}` }),

      'scrollbar.shadow': pick({ light: '#6a737d33', dark: '#0000' }),
      'scrollbarSlider.background': subtleForeground,
      'scrollbarSlider.hoverBackground': mutedForeground,
      'scrollbarSlider.activeBackground': mutedForeground,
      'editorOverviewRuler.border': pick({ light: themeColor('border'), dark: '#ffffff' }),

      'panel.background': background,
      'panel.border': border,
      'panelTitle.activeBorder': primary,
      'panelTitle.activeForeground': foreground,
      'panelTitle.inactiveForeground': mutedForeground,
      'panelInput.border': activeBackground,

      'terminal.foreground': foreground,
      'terminal.selectionBackground': selectionBackground,
      'terminal.ansiBrightBlack': pick({ light: activeForeground, dark: mutedForeground }),
      'terminal.ansiBrightBlue': themeColor('blue'),
      'terminal.ansiBrightCyan': themeColor('cyan'),
      'terminal.ansiBrightGreen': themeColor('green'),
      'terminal.ansiBrightMagenta': themeColor('magenta'),
      'terminal.ansiBrightRed': themeColor('red'),
      'terminal.ansiBrightWhite': pick({ light: mutedForeground, dark: foreground }),
      'terminal.ansiBrightYellow': themeColor('yellow'),
      'terminal.ansiBlack': pick({ light: JannchieThemes.background[0], dark: JannchieThemes.foreground[1] }),
      'terminal.ansiBlue': themeColor('blue'),
      'terminal.ansiCyan': themeColor('cyan'),
      'terminal.ansiGreen': themeColor('green'),
      'terminal.ansiMagenta': themeColor('magenta'),
      'terminal.ansiRed': themeColor('red'),
      'terminal.ansiWhite': pick({ light: JannchieThemes.foreground[0], dark: JannchieThemes.foreground[0] }),
      'terminal.ansiYellow': themeColor('yellow'),

      'gitDecoration.addedResourceForeground': themeColor('green'),
      'gitDecoration.modifiedResourceForeground': themeColor('blue'),
      'gitDecoration.deletedResourceForeground': themeColor('red'),
      'gitDecoration.untrackedResourceForeground': themeColor('cyan'),
      'gitDecoration.ignoredResourceForeground': mutedForeground,
      'gitDecoration.conflictingResourceForeground': themeColor('orange'),
      'gitDecoration.submoduleResourceForeground': themeColor('secondaryForeground'),

      'editorGutter.modifiedBackground': themeColor('blue'),
      'editorGutter.addedBackground': themeColor('green'),
      'editorGutter.deletedBackground': themeColor('red'),

      'editorBracketHighlight.foreground1': themeColor('cyan'),
      'editorBracketHighlight.foreground2': themeColor('green'),
      'editorBracketHighlight.foreground3': themeColor('orange'),
      'editorBracketHighlight.foreground4': themeColor('magenta'),
      'editorBracketHighlight.foreground5': themeColor('yellow'),
      'editorBracketHighlight.foreground6': themeColor('blue'),

      'debugToolBar.background': background,
      'editor.stackFrameHighlightBackground': pick({ light: themeColor('yellow', opacity.ghost), dark: `${themeColor('yellow')}${opacity.barely}` }),
      'editor.focusedStackFrameHighlightBackground': pick({ light: themeColor('yellow', opacity.faint), dark: `${themeColor('yellow')}${opacity.faint}` }),

      'peekViewEditor.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewResult.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewEditor.background': background,
      'peekViewResult.background': background,

      'settings.headerForeground': foreground,
      'settings.modifiedItemIndicator': primary,
      'welcomePage.buttonBackground': activeBackground,
      'welcomePage.buttonHoverBackground': mutedForeground,

      'problemsErrorIcon.foreground': themeColor('red'),
      'problemsWarningIcon.foreground': themeColor('orange'),
      'problemsInfoIcon.foreground': themeColor('blue'),

      'editorError.foreground': themeColor('red'),
      'editorWarning.foreground': themeColor('orange'),
      'editorInfo.foreground': themeColor('blue'),
      'editorHint.foreground': themeColor('green'),

      'editorGutter.commentRangeForeground': mutedForeground,
      'editorGutter.foldingControlForeground': themeColor('secondaryForeground'),

      'editorInlayHint.foreground': punctuation,
      'editorInlayHint.background': '#00000000',

      'editorStickyScroll.background': activeBackground,
      'editorStickyScrollHover.background': activeBackground,

      'menu.separatorBackground': border,

    },
    semanticHighlighting: true,
    semanticTokenColors: {
      'namespace': {
        foreground: themeColor('namespace'),
        underline: true,
      },
      'class': {
        foreground: themeColor('class'),
        underline: true,
      },
      'class.defaultLibrary': {
        foreground: themeColor('classBuiltin'),
      },
      'interface': {
        foreground: themeColor('class'),
        underline: true,
      },
      'interface.defaultLibrary': {
        foreground: themeColor('class'),
      },
      'struct': {
        foreground: themeColor('class'),
        underline: true,
      },
      'typeParameter': themeColor('type'),
      'type': {
        foreground: themeColor('type'),
        underline: true,
      },
      'parameter': {
        foreground: themeColor('parameter'),
      },
      'variable': themeColor('variable'),
      'variable.readonly': {
        foreground: themeColor('readonly'),
      },
      'variable.defaultLibrary': {
        foreground: themeColor('variableBuiltin'),
      },
      'property': themeColor('property'),
      'enum.declaration': {
        foreground: themeColor('class'),
        underline: true,
      },
      'enum': {
        foreground: themeColor('class'),
        underline: true,
      },
      'enumMember': {
        foreground: themeColor('class'),
        underline: true,
      },
      'decorator': themeColor('decorator'),
      'variable.decorator': {
        foreground: themeColor('decorator'),
      },
      'event': themeColor('function'),
      'function': themeColor('function'),
      'function.builtin': themeColor('functionBuiltin'),
      'function.defaultLibrary': themeColor('functionBuiltin'),
      'method': themeColor('function'),
      'method.defaultLibrary': themeColor('functionBuiltin'),
      'method.builtin': themeColor('functionBuiltin'),
      'macro': themeColor('function'),
      'label': themeColor('function'),
      'comment': themeColor('comment'),
      'string': themeColor('string'),
      'keyword': themeColor('keyword'),
      'number': themeColor('number'),
      'regexp': themeColor('regex'),
      'operator': themeColor('operator'),
      'builtinConstant': themeColor('boolean'),
      'component': themeColor('class'),
      'variable.builtin': {
        bold: true,
      },
    },
    tokenColors: [
      {
        scope: [
          'comment',
          'punctuation.definition.comment',
          'string.comment',
        ],
        settings: {
          foreground: themeColor('comment'),
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
          foreground: themeColor('constant'),
        },
      },
      {
        scope: ['entity', 'entity.name'],
        settings: {
          foreground: themeColor('parameter'),
        },
      },
      {
        scope: 'variable.parameter.function',
        settings: {
          foreground,
        },
      },
      {
        scope: [
          'entity.name.tag',
          'tag.html',
        ],
        settings: {
          foreground: themeColor('keyword'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name.html.meta.attribute.class.html',
          'support.class.component',
        ],
        settings: {
          foreground: themeColor('type'),
        },
      },
      {
        scope: 'entity.name.function',
        settings: {
          foreground: themeColor('function'),
        },
      },
      {
        scope: [
          'keyword',
          'storage.type.class.jsdoc',
        ],
        settings: {
          foreground: themeColor('keyword'),
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
          foreground: themeColor('builtin'),
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
          foreground,
        },
      },
      {
        scope: [
          'string',
          'string punctuation.section.embedded source',
          'attribute.value',
        ],
        settings: {
          foreground: themeColor('string'),
        },
      },
      {
        scope: [
          'variable.other.object',
          'variable.other.readwrite',
        ],
        settings: {
          foreground: themeColor('variable'),
        },
      },
      {
        scope: [
          'variable.other.object.property',
          'variable.other.property',
        ],
        settings: {
          foreground: themeColor('property'),
        },
      },
      {
        scope: [
          'meta.function-call',
        ],
        settings: {
          foreground: themeColor('function'),
        },
      },
      {
        scope: [
          'punctuation.definition.string',
          'punctuation.support.type.property-name',
        ],
        settings: {
          foreground: themeColor('string', '99'),
        },
      },
      {
        scope: ['support', 'support.type.property-name.toml'],
        settings: {
          foreground: themeColor('property'),
        },
      },
      {
        scope: [
          'support.type.property-name.table.toml',
          'support.type.property-name.array.toml',
        ],
        settings: {
          foreground: themeColor('function'),
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
          foreground: themeColor('property'),
        },
      },
      {
        scope: [
          'variable',
          'identifier',
        ],
        settings: {
          foreground: themeColor('variable'),
        },
      },
      {
        scope: [
          'variable.other.constant',
        ],
        settings: {
          foreground: themeColor('constant'),
        },
      },
      {
        scope: [
          'support.type.primitive',
          'entity.name.type',
        ],
        settings: {
          foreground: themeColor('type'),
        },
      },
      {
        scope: 'namespace',
        settings: {
          foreground: themeColor('namespace'),
        },
      },
      {
        scope: [
          'keyword.operator',
          'keyword.operator.assignment.compound',
          'meta.var.expr.ts',
        ],
        settings: {
          foreground: themeColor('operator'),
        },
      },
      {
        scope: 'invalid.broken',
        settings: {
          fontStyle: 'italic',
          foreground: themeColor('red'),
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: themeColor('red'),
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: themeColor('red'),
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: themeColor('red'),
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: themeColor('red'),
          foreground: background,
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: themeColor('red'),
        },
      },
      {
        scope: 'string variable',
        settings: {
          foreground: themeColor('string'),
        },
      },
      {
        scope: ['source.regexp', 'string.regexp'],
        settings: {
          foreground: themeColor('regex'),
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
          foreground: themeColor('string'),
        },
      },
      {
        scope: 'string.regexp constant.character.escape',
        settings: {
          foreground: themeColor('yellow'),
        },
      },
      {
        scope: [
          'support.constant',
        ],
        settings: {
          foreground: themeColor('constant'),
        },
      },
      {
        scope: [
          'constant.numeric',
          'number',
        ],
        settings: {
          foreground: themeColor('number'),
        },
      },
      {
        scope: [
          'keyword.other.unit',
        ],
        settings: {
          foreground: themeColor('builtin'),
        },
      },
      {
        scope: [
          'constant.language.boolean',
          'constant.language',
        ],
        settings: {
          foreground: themeColor('boolean'),
        },
      },
      {
        scope: 'meta.module-reference',
        settings: {
          foreground: primary,
        },
      },
      {
        scope: 'punctuation.definition.list.begin.markdown',
        settings: {
          foreground: themeColor('orange'),
        },
      },
      {
        scope: ['markup.heading', 'markup.heading entity.name'],
        settings: {
          fontStyle: 'bold',
          foreground: themeColor('function'),
        },
      },
      {
        scope: 'markup.quote',
        settings: {
          foreground: themeColor('interface'),
        },
      },
      {
        scope: 'markup.italic',
        settings: {
          fontStyle: 'italic',
          foreground,
        },
      },
      {
        scope: 'markup.bold',
        settings: {
          fontStyle: 'bold',
          foreground,
        },
      },
      {
        scope: 'markup.raw',
        settings: {
          foreground: primary,
        },
      },
      {
        scope: [
          'markup.deleted',
          'meta.diff.header.from-file',
          'punctuation.definition.deleted',
        ],
        settings: {
          background: `${themeColor('red')}${opacity.barely}`,
          foreground: themeColor('red'),
        },
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted',
        ],
        settings: {
          background: `${themeColor('green')}${opacity.barely}`,
          foreground: themeColor('green'),
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: `${themeColor('orange')}${opacity.barely}`,
          foreground: themeColor('orange'),
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: mutedForeground,
          background: themeColor('blue'),
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: themeColor('magenta'),
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: themeColor('blue'),
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: themeColor('blue'),
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: themeColor('blue'),
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
          foreground: mutedForeground,
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: themeColor('red'),
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
          foreground: themeColor('string'),
        },
      },
      {
        scope: [
          'markup.underline.link.markdown',
          'markup.underline.link.image.markdown',
        ],
        settings: {
          foreground: secondaryForeground,
          fontStyle: 'underline',
        },
      },
      {
        scope: [
          'type.identifier',
        ],
        settings: {
          foreground: themeColor('class'),
        },
      },
      {
        scope: [
          'entity.other.attribute-name.html',
        ],
        settings: {
          foreground: themeColor('parameter'),
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
    ],
    rules: [],
  }

  // monaco rules
  const rules: any[] = []

  theme.tokenColors.forEach(({ scope, settings }: any) => {
    for (const s of toArray(scope)) {
      rules.push({
        token: s,
        foreground: settings.foreground?.replace('#', ''),
      })
    }
  })

  theme.rules = rules

  return theme
}
