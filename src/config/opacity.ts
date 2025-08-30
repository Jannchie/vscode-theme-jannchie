// Opacity levels for consistent transparency across theme
export const opacity = {
  full: 'ff',      // 100%
  high: 'e6',      // 90%
  medium: 'cc',    // 80%
  low: 'aa',       // 67%
  lower: '80',     // 50%
  subtle: '4d',    // 30%
  ghost: '33',     // 20%
  faint: '1a',     // 10%
  barely: '0d',    // 5%
}

export type OpacityLevel = keyof typeof opacity