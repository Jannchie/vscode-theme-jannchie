import type { ColorResolver } from './colorResolver'

export function resolveCodeBackground(colorResolver: ColorResolver): string {
  let darkEditorBackground = '#0a0a0a'
  if (colorResolver.hasModifier('black')) {
    darkEditorBackground = '#000000'
  }
  else if (colorResolver.hasModifier('soft')) {
    darkEditorBackground = '#141414'
  }

  return colorResolver.pick({
    light: colorResolver.resolve('surface.canvas'),
    dark: darkEditorBackground,
  })!
}

export function resolveCodeForeground(colorResolver: ColorResolver): string {
  return colorResolver.resolve('text.primary')!
}
