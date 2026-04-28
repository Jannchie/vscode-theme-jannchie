import type { ColorResolver } from './colorResolver'

export function resolveCodeBackground(colorResolver: ColorResolver): string {
  return colorResolver.resolve('surface.editor')!
}

export function resolveCodeForeground(colorResolver: ColorResolver): string {
  return colorResolver.resolve('text.primary')!
}
