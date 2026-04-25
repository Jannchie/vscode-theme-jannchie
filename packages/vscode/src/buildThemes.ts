import type { ThemeDefinition } from '@jannchie/theme-core'
import type { VSCodeTheme } from './types'
import { themeDefinitions } from '@jannchie/theme-core'
import { ThemeBuilder } from './ThemeBuilder'

export interface BuiltTheme {
  filename: string
  theme: VSCodeTheme
}

export function buildTheme(definition: ThemeDefinition): VSCodeTheme {
  const themeBuilder = new ThemeBuilder({
    name: definition.name,
    variant: definition.variant,
    modifiers: definition.modifiers,
  })

  return themeBuilder.build()
}

export function buildAllThemes(): BuiltTheme[] {
  return themeDefinitions.map(definition => ({
    filename: definition.filename,
    theme: buildTheme(definition),
  }))
}
