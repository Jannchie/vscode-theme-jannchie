import type { ThemeModifier, ThemeVariant } from './config/colorPalette'

export interface ThemeDefinition {
  filename: string
  modifiers: ThemeModifier[]
  name: string
  variant: ThemeVariant
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
