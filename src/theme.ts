import { it } from 'node:test'
import { toArray } from '@antfu/utils'
import { getColors } from './primer'
import { JannchieThemes, scheme } from './colors'

export default function getTheme({ style, name, soft = false, black = false }) {
  // Usage: `pick({ light: "lightblue", dark: "darkblue" })`
  const pick = options => options[style]

  const themeColor = (key: keyof typeof JannchieThemes, op = '') => pick({ light: JannchieThemes[key][1] + op, dark: JannchieThemes[key][0] + op })

  const primer = getColors(style)

  const foreground = black
    ? '#dbd7cacc'
    : themeColor('foreground')
  const secondaryForeground = themeColor('secondaryForeground')
  const activeForeground = themeColor('activeForeground')
  const primary = themeColor('primary')

  const border = soft
    ? themeColor('lowBorder')
    : themeColor('border')
  const background = black
    ? '#000'
    : soft
      ? themeColor('lowBackground')
      : themeColor('background')
  const activeBackground = black
    ? '#121212'
    : soft
      ? themeColor('lowActiveBackground')
      : themeColor('activeBackground')

  const punctuation = black
    ? themeColor('punctuation', 'cc')
    : themeColor('punctuation')

  const selectionBackgroundInActive = pick({ light: '#22222208', dark: '#eeeeee15' })
  const selectionBackgroundActive = pick({ light: '#22222215', dark: '#eeeeee25' })
  const selectionBackground = pick({ light: '#22222215', dark: '#eeeeee25' })

  const theme = {
    name,
    base: pick({ light: 'vs', dark: 'vs-dark' }),
    colors: {
      'focusBorder': '#00000000',
      foreground,
      'descriptionForeground': secondaryForeground,
      'errorForeground': themeColor('red'),

      'textLink.foreground': scheme.blue[6],
      'textLink.activeForeground': scheme.blue[5],
      'textBlockQuote.background': background,
      'textBlockQuote.border': border,
      'textCodeBlock.background': background,
      'textPreformat.foreground': primer.gray[6],
      'textSeparator.foreground': primer.gray[3],

      'button.background': primary,
      'button.foreground': foreground,
      'button.hoverBackground': primary,

      'checkbox.background': activeBackground,
      'checkbox.border': pick({ light: primer.gray[3], dark: primer.gray[1] }),

      'dropdown.background': background,
      'dropdown.border': border,
      'dropdown.foreground': foreground,
      'dropdown.listBackground': activeBackground,

      'input.background': activeBackground,
      'input.border': border,
      'input.foreground': foreground,
      'input.placeholderForeground': secondaryForeground,
      'inputOption.activeBackground': themeColor('ignored'),

      'badge.foreground': background,
      'badge.background': secondaryForeground,

      'progressBar.background': primary,

      'titleBar.activeForeground': activeForeground,
      'titleBar.activeBackground': background,
      'titleBar.inactiveForeground': primer.gray[5],
      'titleBar.inactiveBackground': background,
      'titleBar.border': activeBackground,

      'activityBar.foreground': foreground,
      'activityBar.inactiveForeground': themeColor('ignored'),
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

      'tree.indentGuidesStroke': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'notificationCenterHeader.foreground': primer.gray[5],
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
      'tab.inactiveForeground': primer.gray[5],
      'tab.inactiveBackground': background,
      'tab.activeBackground': background,
      'tab.hoverBackground': activeBackground,
      'tab.unfocusedHoverBackground': background,
      'tab.border': border,
      'tab.unfocusedActiveBorderTop': border,
      'tab.activeBorder': border,
      'tab.unfocusedActiveBorder': border,
      'tab.activeBorderTop': secondaryForeground,

      'breadcrumb.foreground': primer.gray[5],
      'breadcrumb.focusForeground': foreground,
      'breadcrumb.background': activeBackground,
      'breadcrumb.activeSelectionForeground': selectionBackgroundActive,
      'breadcrumbPicker.background': background,

      'editor.foreground': foreground,
      'editor.background': background,
      'editorWidget.background': background,
      'editor.foldBackground': pick({ light: '#22222210', dark: '#eeeeee10' }),
      'editor.lineHighlightBackground': activeBackground,
      'editorLineNumber.foreground': themeColor('ignored'),
      'editorLineNumber.activeForeground': activeForeground,
      'editorIndentGuide.background': pick({ light: '#00000015', dark: '#ffffff15' }),
      'editorIndentGuide.activeBackground': pick({ light: '#00000030', dark: '#ffffff30' }),
      'editorWhitespace.foreground': pick({ light: '#00000015', dark: '#ffffff15' }),
      // 'editorCursor.foreground': primary,

      'editor.findMatchBackground': pick({ light: '#e6cc7744', dark: '#e6cc7722' }),
      'editor.findMatchHighlightBackground': pick({ light: '#e6cc7766', dark: '#e6cc7744' }),
      'editor.inactiveSelectionBackground': selectionBackgroundInActive,
      'editor.selectionBackground': selectionBackground,
      'editor.selectionHighlightBackground': selectionBackgroundInActive,
      'editor.wordHighlightBackground': pick({ light: '#1c6b4805', dark: '#1c6b4805' }),
      'editor.wordHighlightStrongBackground': pick({ light: '#1c6b4810', dark: '#1c6b4810' }),
      'editorBracketMatch.background': pick({ light: '#1c6b4820', dark: '#4d937520' }),

      'diffEditor.insertedTextBackground': pick({ light: '#1c6b4815', dark: '#4d937522' }),
      'diffEditor.removedTextBackground': pick({ light: '#ab595910', dark: '#ab595922' }),

      'scrollbar.shadow': pick({ light: '#6a737d33', dark: '#0000' }),
      'scrollbarSlider.background': themeColor('faded'),
      'scrollbarSlider.hoverBackground': themeColor('ignored'),
      'scrollbarSlider.activeBackground': themeColor('ignored'),
      'editorOverviewRuler.border': primer.white,

      'panel.background': background,
      'panel.border': border,
      'panelTitle.activeBorder': primary,
      'panelTitle.activeForeground': foreground,
      'panelTitle.inactiveForeground': primer.gray[5],
      'panelInput.border': pick({ light: primer.gray[2], dark: primer.gray[1] }),

      'terminal.foreground': foreground,
      'terminal.selectionBackground': selectionBackground,
      'terminal.ansiBrightBlack': pick({ light: '#aaaaaa', dark: '#777777' }),
      'terminal.ansiBrightBlue': themeColor('blue'),
      'terminal.ansiBrightCyan': themeColor('cyan'),
      'terminal.ansiBrightGreen': themeColor('green'),
      'terminal.ansiBrightMagenta': themeColor('magenta'),
      'terminal.ansiBrightRed': themeColor('red'),
      'terminal.ansiBrightWhite': pick({ light: '#dddddd', dark: '#ffffff' }),
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
      'gitDecoration.ignoredResourceForeground': themeColor('ignored'),
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
      'editor.stackFrameHighlightBackground': pick({ light: primer.yellow[1], dark: '#a707' }),
      'editor.focusedStackFrameHighlightBackground': pick({ light: primer.yellow[2], dark: '#b808' }),

      'peekViewEditor.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewResult.matchHighlightBackground': pick({ dark: '#ffd33d33' }),
      'peekViewEditor.background': background,
      'peekViewResult.background': background,

      'settings.headerForeground': foreground,
      'settings.modifiedItemIndicator': primary,
      'welcomePage.buttonBackground': primer.gray[1],
      'welcomePage.buttonHoverBackground': primer.gray[2],

      'problemsErrorIcon.foreground': themeColor('red'),
      'problemsWarningIcon.foreground': themeColor('orange'),
      'problemsInfoIcon.foreground': themeColor('blue'),

      'editorError.foreground': themeColor('red'),
      'editorWarning.foreground': themeColor('orange'),
      'editorInfo.foreground': themeColor('blue'),
      'editorHint.foreground': themeColor('green'),

      'editorGutter.commentRangeForeground': themeColor('ignored'),
      'editorGutter.foldingControlForeground': themeColor('secondaryForeground'),

      'editorInlayHint.foreground': punctuation,
      'editorInlayHint.background': '#00000000',

      'editorStickyScroll.background': activeBackground,
      'editorStickyScrollHover.background': activeBackground,

      'menu.separatorBackground': border,

    },
    semanticHighlighting: true,
    semanticTokenColors: {
      'namespace': themeColor('namespace'),
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
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.deprecated',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.illegal',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'invalid.unimplemented',
        settings: {
          fontStyle: 'italic',
          foreground: primer.red[7],
        },
      },
      {
        scope: 'carriage-return',
        settings: {
          fontStyle: 'italic underline',
          background: pick({ light: primer.red[5], dark: primer.red[6] }),
          foreground: primer.gray[0],
          content: '^M',
        },
      },
      {
        scope: 'message.error',
        settings: {
          foreground: primer.red[7],
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
          background: primer.red[0],
          foreground: primer.red[7],
        },
      },
      {
        scope: [
          'markup.inserted',
          'meta.diff.header.to-file',
          'punctuation.definition.inserted',
        ],
        settings: {
          background: primer.green[0],
          foreground: primer.green[6],
        },
      },
      {
        scope: ['markup.changed', 'punctuation.definition.changed'],
        settings: {
          background: primer.orange[1],
          foreground: primer.orange[6],
        },
      },
      {
        scope: ['markup.ignored', 'markup.untracked'],
        settings: {
          foreground: primer.gray[1],
          background: primer.blue[6],
        },
      },
      {
        scope: 'meta.diff.range',
        settings: {
          foreground: pick({ light: primer.purple[5], dark: primer.purple[6] }),
          fontStyle: 'bold',
        },
      },
      {
        scope: 'meta.diff.header',
        settings: {
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.separator',
        settings: {
          fontStyle: 'bold',
          foreground: primer.blue[6],
        },
      },
      {
        scope: 'meta.output',
        settings: {
          foreground: primer.blue[6],
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
          foreground: primer.gray[6],
        },
      },
      {
        scope: 'brackethighlighter.unmatched',
        settings: {
          foreground: primer.red[7],
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
