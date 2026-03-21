import type { ColorResolver } from '../core/colorResolver'

export function buildSemanticTokenColors(colorResolver: ColorResolver) {
  const role = colorResolver.resolveRole.bind(colorResolver)

  return {
    'namespace': {
      foreground: role('namespace'),
      underline: true,
    },
    'class': {
      foreground: role('class'),
      underline: true,
    },
    'class.defaultLibrary': {
      foreground: role('classBuiltin'),
    },
    'interface': {
      foreground: role('class'),
      underline: true,
    },
    'interface.defaultLibrary': {
      foreground: role('class'),
    },
    'struct': {
      foreground: role('class'),
      underline: true,
    },
    'typeParameter': role('type'),
    'type': {
      foreground: role('type'),
      underline: true,
    },
    'parameter': {
      foreground: role('parameter'),
    },
    'variable': role('variable'),
    'variable.readonly': {
      foreground: role('readonly'),
    },
    'variable.defaultLibrary': {
      foreground: role('variableBuiltin'),
    },
    'property': role('property'),
    'enum.declaration': {
      foreground: role('class'),
      underline: true,
    },
    'enum': {
      foreground: role('class'),
      underline: true,
    },
    'enumMember': {
      foreground: role('class'),
      underline: true,
    },
    'decorator': role('decorator'),
    'variable.decorator': {
      foreground: role('decorator'),
    },
    'event': role('function'),
    'function': role('function'),
    'function.builtin': role('functionBuiltin'),
    'function.defaultLibrary': role('functionBuiltin'),
    'method': role('function'),
    'method.defaultLibrary': role('functionBuiltin'),
    'method.builtin': role('functionBuiltin'),
    'macro': role('function'),
    'label': role('function'),
    'comment': role('comment'),
    'string': role('string'),
    'keyword': role('keyword'),
    'number': role('number'),
    'regexp': role('regex'),
    'operator': role('operator'),
    'builtinConstant': role('boolean'),
    'component': role('class'),
    'variable.builtin': {
      bold: true,
    },
  }
}
