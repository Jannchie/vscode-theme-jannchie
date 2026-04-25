import type { ColorResolver } from '../core/colorResolver'

export function buildSemanticTokenColors(colorResolver: ColorResolver) {
  const color = colorResolver.resolve.bind(colorResolver)
  const foreground = color('text.primary')
  const punctuation = color('syntax.punctuation')

  return {
    'namespace': {
      foreground: color('syntax.namespace'),
    },
    'class': {
      foreground: color('syntax.class'),
    },
    'class.defaultLibrary': {
      foreground: color('syntax.classBuiltin'),
    },
    'interface': {
      foreground: color('syntax.class'),
    },
    'interface.defaultLibrary': {
      foreground: color('syntax.class'),
    },
    'struct': {
      foreground: color('syntax.class'),
    },
    'typeParameter': color('syntax.type'),
    'type': {
      foreground: color('syntax.type'),
    },
    'parameter': {
      foreground: color('syntax.parameter'),
    },
    'variable': color('syntax.variable'),
    'variable.readonly': {
      foreground: color('syntax.readonly'),
    },
    'variable.defaultLibrary': {
      foreground: color('syntax.variableBuiltin'),
    },
    'property': color('syntax.property'),
    'enum.declaration': {
      foreground: color('syntax.class'),
    },
    'enum': {
      foreground: color('syntax.class'),
    },
    'enumMember': {
      foreground: color('syntax.class'),
    },
    'decorator': color('syntax.decorator'),
    'variable.decorator': {
      foreground: color('syntax.decorator'),
    },
    'event': color('syntax.function'),
    'function': color('syntax.function'),
    'function.builtin': color('syntax.functionBuiltin'),
    'function.defaultLibrary': color('syntax.functionBuiltin'),
    'method': color('syntax.function'),
    'method.defaultLibrary': color('syntax.functionBuiltin'),
    'method.builtin': color('syntax.functionBuiltin'),
    'macro': color('syntax.function'),
    'label': color('syntax.function'),
    'comment': color('syntax.comment'),
    'string': color('syntax.string'),
    'stringLiteral': color('syntax.string'),
    'keyword': color('syntax.keyword'),
    'number': color('syntax.number'),
    'numberLiteral': color('syntax.number'),
    'regexp': color('syntax.regex'),
    'operator': punctuation,
    'newOperator': foreground,
    'customLiteral': foreground,
    'builtinConstant': color('syntax.boolean'),
    'component': color('syntax.class'),
    'variable.builtin': {
      bold: true,
    },
  }
}
