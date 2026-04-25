import type {
  OpacityLevel,
  ResolvedThemeColor,
  ThemeColorGroup,
  ThemeColorGroups,
  ThemeColorPath,
  ThemeModifier,
  ThemeVariant,
  VariantValue,
} from './config/colorPalette'
import { applyOpacity, themeColorConfig } from './config/colorPalette'

export interface ColorResolverOptions {
  modifiers: ThemeModifier[]
  variant: ThemeVariant
}

/**
 * Color resolver utility for picking appropriate colors based on theme variant
 */
export class ColorResolver {
  private variant: ThemeVariant
  private modifiers: ThemeModifier[]

  constructor(options: ColorResolverOptions) {
    this.variant = options.variant
    this.modifiers = options.modifiers
  }

  /**
   * Pick color from variant pair
   */
  pick<T>(options: VariantValue<T>): T {
    return options[this.variant]
  }

  /**
   * Resolve semantic role with optional opacity
   */
  resolve<Path extends ThemeColorPath>(path: Path, op: OpacityLevel | string = ''): ResolvedThemeColor<Path> {
    const color = this.getColor(path)
    return this.withOptionalOpacity(color, op) as ResolvedThemeColor<Path>
  }

  /**
   * Resolve theme color without modifier overrides
   */
  resolveBase<Path extends ThemeColorPath>(path: Path, op: OpacityLevel | string = ''): ResolvedThemeColor<Path> {
    const color = this.getBaseColor(path)
    return this.withOptionalOpacity(color, op) as ResolvedThemeColor<Path>
  }

  /**
   * Resolve theme color with variant-specific opacity
   */
  resolveByVariant<Path extends ThemeColorPath>(path: Path, opacityByVariant: VariantValue<OpacityLevel | string>): ResolvedThemeColor<Path> {
    return this.resolve(path, this.pick(opacityByVariant))
  }

  /**
   * Check if a specific modifier is active
   */
  hasModifier(modifier: ThemeModifier): boolean {
    return this.modifiers.includes(modifier)
  }

  private getColor<Path extends ThemeColorPath>(path: Path): ResolvedThemeColor<Path> {
    let resolvedColor = this.getBaseColor(path)
    for (const modifier of themeColorConfig.modifierPrecedence) {
      if (!this.hasModifier(modifier)) {
        continue
      }

      const override = this.getModifierColor(themeColorConfig.modifiers[modifier]?.[this.variant], path)
      if (override !== undefined) {
        resolvedColor = override as ResolvedThemeColor<Path>
      }
    }

    return resolvedColor
  }

  private getBaseColor<Path extends ThemeColorPath>(path: Path): ResolvedThemeColor<Path> {
    const [group, key] = this.parsePath(path)
    return themeColorConfig.baseColors[this.variant][group][key] as ResolvedThemeColor<Path>
  }

  private getModifierColor<Path extends ThemeColorPath>(
    modifierGroup: Partial<ThemeColorGroups> | undefined,
    path: Path,
  ): ResolvedThemeColor<Path> | undefined {
    if (!modifierGroup) {
      return undefined
    }

    const [group, key] = this.parsePath(path)
    return modifierGroup[group]?.[key] as ResolvedThemeColor<Path> | undefined
  }

  private parsePath<Path extends ThemeColorPath>(path: Path): [
    ThemeColorGroup,
    keyof ThemeColorGroups[ThemeColorGroup],
  ] {
    const [group, key] = path.split('.') as [
      ThemeColorGroup,
      keyof ThemeColorGroups[ThemeColorGroup],
    ]

    return [group, key]
  }

  private withOptionalOpacity(color: string | undefined, op: OpacityLevel | string = ''): string | undefined {
    if (color === undefined || !op) {
      return color
    }

    return applyOpacity(color, op)
  }
}
