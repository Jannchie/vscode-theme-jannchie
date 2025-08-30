import { promises as fs } from 'node:fs'
import process from 'node:process'
import { ThemeBuilder } from './core/ThemeBuilder'

const themes = [
  {
    name: 'Jannchie Dark',
    filename: 'jannchie-dark.json',
    variant: 'dark' as const,
    modifiers: [] as const
  },
  {
    name: 'Jannchie Black',
    filename: 'jannchie-black.json',
    variant: 'dark' as const,
    modifiers: ['black'] as const
  },
  {
    name: 'Jannchie Dark Soft',
    filename: 'jannchie-dark-soft.json',
    variant: 'dark' as const,
    modifiers: ['soft'] as const
  },
  {
    name: 'Jannchie Light',
    filename: 'jannchie-light.json',
    variant: 'light' as const,
    modifiers: [] as const
  },
  {
    name: 'Jannchie Light Soft',
    filename: 'jannchie-light-soft.json',
    variant: 'light' as const,
    modifiers: ['soft'] as const
  },
]

fs.mkdir('./themes', { recursive: true })
  .then(() => Promise.all(
    themes.map(config => {
      const themeBuilder = new ThemeBuilder({
        name: config.name,
        variant: config.variant,
        modifiers: config.modifiers
      })
      
      const theme = themeBuilder.build()
      
      return fs.writeFile(
        `./themes/${config.filename}`,
        `${JSON.stringify(theme, null, 2)}\n`
      )
    })
  ))
  .catch(() => process.exit(1))
