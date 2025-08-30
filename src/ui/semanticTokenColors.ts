import type { ColorResolver } from '../core/colorResolver'
import { semanticColors } from '../config/semanticColors'

export function buildSemanticTokenColors(colorResolver: ColorResolver) {
  return {
    'namespace': {
      foreground: colorResolver.resolveColor(semanticColors.namespace),
      underline: true,
    },
    'class': {
      foreground: colorResolver.resolveColor(semanticColors.class),
      underline: true,
    },
    'class.defaultLibrary': {
      foreground: colorResolver.resolveColor(semanticColors.classBuiltin),
    },
    'interface': {
      foreground: colorResolver.resolveColor(semanticColors.class),
      underline: true,
    },
    'interface.defaultLibrary': {
      foreground: colorResolver.resolveColor(semanticColors.class),
    },
    'struct': {
      foreground: colorResolver.resolveColor(semanticColors.class),
      underline: true,
    },
    'typeParameter': colorResolver.resolveColor(semanticColors.type),
    'type': {
      foreground: colorResolver.resolveColor(semanticColors.type),
      underline: true,
    },
    'parameter': {
      foreground: colorResolver.resolveColor(semanticColors.parameter),
    },
    'variable': colorResolver.resolveColor(semanticColors.variable),
    'variable.readonly': {
      foreground: colorResolver.resolveColor(semanticColors.readonly),
    },
    'variable.defaultLibrary': {
      foreground: colorResolver.resolveColor(semanticColors.variableBuiltin),
    },
    'property': colorResolver.resolveColor(semanticColors.property),
    'enum.declaration': {
      foreground: colorResolver.resolveColor(semanticColors.class),
      underline: true,
    },
    'enum': {
      foreground: colorResolver.resolveColor(semanticColors.class),
      underline: true,
    },
    'enumMember': {
      foreground: colorResolver.resolveColor(semanticColors.class),
      underline: true,
    },
    'decorator': colorResolver.resolveColor(semanticColors.decorator),
    'variable.decorator': {
      foreground: colorResolver.resolveColor(semanticColors.decorator),
    },
    'event': colorResolver.resolveColor(semanticColors.function),
    'function': colorResolver.resolveColor(semanticColors.function),
    'function.builtin': colorResolver.resolveColor(semanticColors.functionBuiltin),
    'function.defaultLibrary': colorResolver.resolveColor(semanticColors.functionBuiltin),
    'method': colorResolver.resolveColor(semanticColors.function),
    'method.defaultLibrary': colorResolver.resolveColor(semanticColors.functionBuiltin),
    'method.builtin': colorResolver.resolveColor(semanticColors.functionBuiltin),
    'macro': colorResolver.resolveColor(semanticColors.function),
    'label': colorResolver.resolveColor(semanticColors.function),
    'comment': colorResolver.resolveColor(semanticColors.comment),
    'string': colorResolver.resolveColor(semanticColors.string),
    'keyword': colorResolver.resolveColor(semanticColors.keyword),
    'number': colorResolver.resolveColor(semanticColors.number),
    'regexp': colorResolver.resolveColor(semanticColors.regex),
    'operator': colorResolver.resolveColor(semanticColors.operator),
    'builtinConstant': colorResolver.resolveColor(semanticColors.boolean),
    'component': colorResolver.resolveColor(semanticColors.class),
    'variable.builtin': {
      bold: true,
    },
  }
}