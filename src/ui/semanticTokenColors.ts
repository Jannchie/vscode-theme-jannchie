import type { ColorResolver } from '../core/colorResolver'

export function buildSemanticTokenColors(colorResolver: ColorResolver) {
  const color = colorResolver.resolve.bind(colorResolver)

  return {
    'namespace': {
      foreground: color('syntax.namespace'),
      underline: true,
    },
    'class': {
      foreground: color('syntax.class'),
      underline: true,
    },
    'class.defaultLibrary': {
      foreground: color('syntax.classBuiltin'),
    },
    'interface': {
      foreground: color('syntax.class'),
      underline: true,
    },
    'interface.defaultLibrary': {
      foreground: color('syntax.class'),
    },
    'struct': {
      foreground: color('syntax.class'),
      underline: true,
    },
    'typeParameter': color('syntax.type'),
    'type': {
      foreground: color('syntax.type'),
      underline: true,
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
      underline: true,
    },
    'enum': {
      foreground: color('syntax.class'),
      underline: true,
    },
    'enumMember': {
      foreground: color('syntax.class'),
      underline: true,
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
    'keyword': color('syntax.keyword'),
    'number': color('syntax.number'),
    'regexp': color('syntax.regex'),
    'operator': color('syntax.operator'),
    'builtinConstant': color('syntax.boolean'),
    'component': color('syntax.class'),
    'variable.builtin': {
      bold: true,
    },
  }
}
