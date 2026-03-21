import type { ColorResolver } from '../core/colorResolver'

export function buildSemanticTokenColors(colorResolver: ColorResolver) {
  return {
    'namespace': {
      foreground: colorResolver.resolveRole('namespace'),
      underline: true,
    },
    'class': {
      foreground: colorResolver.resolveRole('class'),
      underline: true,
    },
    'class.defaultLibrary': {
      foreground: colorResolver.resolveRole('classBuiltin'),
    },
    'interface': {
      foreground: colorResolver.resolveRole('class'),
      underline: true,
    },
    'interface.defaultLibrary': {
      foreground: colorResolver.resolveRole('class'),
    },
    'struct': {
      foreground: colorResolver.resolveRole('class'),
      underline: true,
    },
    'typeParameter': colorResolver.resolveRole('type'),
    'type': {
      foreground: colorResolver.resolveRole('type'),
      underline: true,
    },
    'parameter': {
      foreground: colorResolver.resolveRole('parameter'),
    },
    'variable': colorResolver.resolveRole('variable'),
    'variable.readonly': {
      foreground: colorResolver.resolveRole('readonly'),
    },
    'variable.defaultLibrary': {
      foreground: colorResolver.resolveRole('variableBuiltin'),
    },
    'property': colorResolver.resolveRole('property'),
    'enum.declaration': {
      foreground: colorResolver.resolveRole('class'),
      underline: true,
    },
    'enum': {
      foreground: colorResolver.resolveRole('class'),
      underline: true,
    },
    'enumMember': {
      foreground: colorResolver.resolveRole('class'),
      underline: true,
    },
    'decorator': colorResolver.resolveRole('decorator'),
    'variable.decorator': {
      foreground: colorResolver.resolveRole('decorator'),
    },
    'event': colorResolver.resolveRole('function'),
    'function': colorResolver.resolveRole('function'),
    'function.builtin': colorResolver.resolveRole('functionBuiltin'),
    'function.defaultLibrary': colorResolver.resolveRole('functionBuiltin'),
    'method': colorResolver.resolveRole('function'),
    'method.defaultLibrary': colorResolver.resolveRole('functionBuiltin'),
    'method.builtin': colorResolver.resolveRole('functionBuiltin'),
    'macro': colorResolver.resolveRole('function'),
    'label': colorResolver.resolveRole('function'),
    'comment': colorResolver.resolveRole('comment'),
    'string': colorResolver.resolveRole('string'),
    'keyword': colorResolver.resolveRole('keyword'),
    'number': colorResolver.resolveRole('number'),
    'regexp': colorResolver.resolveRole('regex'),
    'operator': colorResolver.resolveRole('operator'),
    'builtinConstant': colorResolver.resolveRole('boolean'),
    'component': colorResolver.resolveRole('class'),
    'variable.builtin': {
      bold: true,
    },
  }
}
