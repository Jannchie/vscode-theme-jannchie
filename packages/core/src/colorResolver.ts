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
  modifier?: ThemeModifier
  variant: ThemeVariant
}

/**
 * Resolves theme color paths against the active variant and (optional) modifier.
 *
 * Each theme is identified by exactly one (variant, modifier?) pair; modifiers
 * are mutually exclusive and never stack.
 */
export class ColorResolver {
  private variant: ThemeVariant
  private modifier?: ThemeModifier

  constructor(options: ColorResolverOptions) {
    this.variant = options.variant
    this.modifier = options.modifier
  }

  pick<T>(options: VariantValue<T>): T {
    return options[this.variant]
  }

  resolve<Path extends ThemeColorPath>(path: Path, op: OpacityLevel | string = ''): ResolvedThemeColor<Path> {
    return this.withOptionalOpacity(this.getColor(path), op) as ResolvedThemeColor<Path>
  }

  resolveBase<Path extends ThemeColorPath>(path: Path, op: OpacityLevel | string = ''): ResolvedThemeColor<Path> {
    return this.withOptionalOpacity(this.getBaseColor(path), op) as ResolvedThemeColor<Path>
  }

  resolveByVariant<Path extends ThemeColorPath>(path: Path, opacityByVariant: VariantValue<OpacityLevel | string>): ResolvedThemeColor<Path> {
    return this.resolve(path, this.pick(opacityByVariant))
  }

  hasModifier(modifier: ThemeModifier): boolean {
    return this.modifier === modifier
  }

  private getColor<Path extends ThemeColorPath>(path: Path): ResolvedThemeColor<Path> {
    const baseColor = this.getBaseColor(path)
    if (!this.modifier) {
      return baseColor
    }

    const [group, key] = this.parsePath(path)
    const modifierGroups = themeColorConfig.modifiers[this.modifier]?.[this.variant]
    const override = modifierGroups?.[group]?.[key]
    return (override ?? baseColor) as ResolvedThemeColor<Path>
  }

  private getBaseColor<Path extends ThemeColorPath>(path: Path): ResolvedThemeColor<Path> {
    const [group, key] = this.parsePath(path)
    return themeColorConfig.baseColors[this.variant][group][key] as ResolvedThemeColor<Path>
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
