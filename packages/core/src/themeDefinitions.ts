import type { ThemeModifier, ThemeVariant } from './config/colorPalette'

export interface ThemeDefinition {
  filename: string
  modifier?: ThemeModifier
  name: string
  variant: ThemeVariant
}

export const themeDefinitions: ThemeDefinition[] = [
  {
    name: 'Jannchie Dark',
    filename: 'jannchie-dark.json',
    variant: 'dark',
  },
  {
    name: 'Jannchie Black',
    filename: 'jannchie-black.json',
    variant: 'dark',
    modifier: 'black',
  },
  {
    name: 'Jannchie Dark Soft',
    filename: 'jannchie-dark-soft.json',
    variant: 'dark',
    modifier: 'soft',
  },
  {
    name: 'Jannchie Light',
    filename: 'jannchie-light.json',
    variant: 'light',
  },
  {
    name: 'Jannchie Light Soft',
    filename: 'jannchie-light-soft.json',
    variant: 'light',
    modifier: 'soft',
  },
]
