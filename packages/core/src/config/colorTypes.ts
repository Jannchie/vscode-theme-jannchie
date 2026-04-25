export interface VariantValue<T> {
  dark: T
  light: T
}

export type ThemeVariant = keyof VariantValue<unknown>
export type ThemeModifier = 'soft' | 'black'

export interface ThemeColorGroups {
  accent: {
    blue: string
    cyan: string
    green: string
    magenta: string
    orange: string
    primary: string
    red: string
    yellow: string
  }
  surface: {
    border: string
    canvas: string
    guide: string
    overlay: string
    panel: string
    shadow: string
  }
  syntax: {
    boolean: string
    builtin: string
    class: string
    classBuiltin: string
    comment: string
    constant: string
    decorator: string
    function: string
    functionBuiltin: string
    interface: string
    keyword: string
    namespace: string
    number: string
    operator: string
    parameter: string
    property: string
    punctuation: string
    readonly: string
    regex: string
    string: string
    type: string
    variable: string
    variableBuiltin: string
  }
  text: {
    active: string
    muted: string
    primary: string
    secondary: string
    subtle: string
  }
  utility: {
    peekMatchBackground: string | undefined
    terminalBlack: string
    transparent: string
  }
}

export type ThemeColorGroup = keyof ThemeColorGroups
export type ThemeColorPath = {
  [Group in ThemeColorGroup]: `${Group}.${Extract<keyof ThemeColorGroups[Group], string>}`
}[ThemeColorGroup]

export type ResolvedThemeColor<Path extends ThemeColorPath>
  = Path extends `${infer Group}.${infer Key}`
    ? Group extends ThemeColorGroup
      ? Key extends keyof ThemeColorGroups[Group]
        ? ThemeColorGroups[Group][Key]
        : never
      : never
    : never

export type ModifierColorGroups = Partial<{
  [Group in ThemeColorGroup]: Partial<ThemeColorGroups[Group]>
}>

export interface ThemeColorConfig {
  baseColors: Record<ThemeVariant, ThemeColorGroups>
  modifierPrecedence: readonly ThemeModifier[]
  modifiers: Record<ThemeModifier, Partial<Record<ThemeVariant, ModifierColorGroups>>>
  opacity: Record<string, string>
}
