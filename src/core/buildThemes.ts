import type { ThemeModifier, ThemeVariant } from '../config/colorPalette'
import type { VSCodeTheme } from './types'
import { ThemeBuilder } from './ThemeBuilder'

export interface ThemeDefinition {
  filename: string
  modifiers: ThemeModifier[]
  name: string
  variant: ThemeVariant
}

export interface BuiltTheme {
  filename: string
  theme: VSCodeTheme
}

export const themeDefinitions: ThemeDefinition[] = [
  {
    name: 'Jannchie Dark',
    filename: 'jannchie-dark.json',
    variant: 'dark',
    modifiers: [],
  },
  {
    name: 'Jannchie Black',
    filename: 'jannchie-black.json',
    variant: 'dark',
    modifiers: ['black'],
  },
  {
    name: 'Jannchie Dark Soft',
    filename: 'jannchie-dark-soft.json',
    variant: 'dark',
    modifiers: ['soft'],
  },
  {
    name: 'Jannchie Light',
    filename: 'jannchie-light.json',
    variant: 'light',
    modifiers: [],
  },
  {
    name: 'Jannchie Light Soft',
    filename: 'jannchie-light-soft.json',
    variant: 'light',
    modifiers: ['soft'],
  },
]

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
