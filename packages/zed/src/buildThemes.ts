import type { ThemeDefinition } from '@jannchie/theme-core'
import type { ZedThemeFamily, ZedThemeVariant } from './types'
import { ColorResolver, themeDefinitions } from '@jannchie/theme-core'
import { buildStyle } from './style/uiStyle'

const ZED_SCHEMA = 'https://zed.dev/schema/themes/v0.2.0.json'

export function buildThemeVariant(definition: ThemeDefinition): ZedThemeVariant {
  const colorResolver = new ColorResolver({
    variant: definition.variant,
    modifier: definition.modifier,
  })

  return {
    name: definition.name,
    appearance: definition.variant,
    style: buildStyle(colorResolver),
  }
}

export function buildThemeFamily(): ZedThemeFamily {
  return {
    $schema: ZED_SCHEMA,
    name: 'Jannchie Code',
    author: 'Jannchie <jannchie@gmail.com>',
    themes: themeDefinitions.map(buildThemeVariant),
  }
}
