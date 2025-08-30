// Base color palette - all color values from the original theme
export const colors = {
  black: '#111',
  white: '#fff',
  gray: ['#fafbfc', '#f6f8fa', '#e1e4e8', '#d1d5da', '#959da5', '#6a737d', '#586069', '#444d56', '#2f363d', '#24292e'],
  blue: ['#f1f8ff', '#dbedff', '#c8e1ff', '#79b8ff', '#2188ff', '#0366d6', '#005cc5', '#044289', '#032f62', '#05264c'],
  green: ['#f0fff4', '#dcffe4', '#bef5cb', '#85e89d', '#34d058', '#28a745', '#22863a', '#176f2c', '#165c26', '#144620'],
  yellow: ['#fffdef', '#fffbdd', '#fff5b1', '#ffea7f', '#ffdf5d', '#ffd33d', '#f9c513', '#dbab09', '#b08800', '#735c0f'],
  orange: ['#fff8f2', '#ffebda', '#ffd1ac', '#ffab70', '#fb8532', '#f66a0a', '#e36209', '#d15704', '#c24e00', '#a04100'],
  red: ['#ffeef0', '#ffdce0', '#fdaeb7', '#f97583', '#ea4a5a', '#d73a49', '#cb2431', '#b31d28', '#9e1c23', '#86181d'],
  purple: ['#f5f0ff', '#e6dcfd', '#d1bcf9', '#b392f0', '#8a63d2', '#6f42c1', '#5a32a3', '#4c2889', '#3a1d6e', '#29134e'],
  pink: ['#ffeef8', '#fedbf0', '#f9b3dd', '#f692ce', '#ec6cb9', '#ea4aaa', '#d03592', '#b93a86', '#99306f', '#6d224f'],
}

// Enhanced color scheme for the theme
export const scheme = {
  green: ['#e6fcf5', '#d7f5e9', '#b2e9d3', '#89dcbb', '#67d1a7', '#51ca9a', '#43c892', '#33b07e', '#279c6f', '#0f885e'],
  blue: ['#e5f8ff', '#d1ecfd', '#a2d6f8', '#71bff5', '#4babf2', '#36a0f1', '#289af2', '#1b86d7', '#0877c2', '#0066ac'],
  blueGray: ['#f3f3fe', '#e4e6ed', '#c8cad3', '#a9adb9', '#9093a4', '#808496', '#767c91', '#656a7e', '#585e72', '#4a5167'],
  cyan: ['#e0fdff', '#d0f5fa', '#a8e6ef', '#7bd7e6', '#57cbdd', '#3ec4d8', '#2bc0d7', '#13aabf', '#0097ab', '#008397'],
  red: ['#ffebeb', '#fbd7d7', '#efacad', '#e47f7f', '#db5a5a', '#d64141', '#d43434', '#bc2727', '#a81f21', '#94141a'],
  brown: ['#ffefeb', '#f7dfda', '#e5bfb7', '#d39d91', '#c47f71', '#bb6c5c', '#b86250', '#a25242', '#914738', '#813b2e'],
  yellow: ['#fff9e2', '#faf1d0', '#f3e1a6', '#ead078', '#e4c150', '#e0b837', '#deb428', '#c59e18', '#b08c0f', '#977800'],
  orange: ['#fff0e4', '#ffe0cf', '#fac0a1', '#f69e6e', '#f28043', '#f06d27', '#f06418', '#d6530c', '#bf4906', '#a73c00'],
  magenta: ['#ffe9f6', '#ffd1e6', '#faa1c9', '#f66eab', '#f24391', '#f02881', '#f01879', '#d60867', '#c0005c', '#a9004f'],
  background: ['#FFFFFF', '#f7f7f7', '#f0f0f0', '#e0e0e0', '#d0d0d0', '#c0c0c0', '#b0b0b0', '#a0a0a0', '#909090', '#808080'],
  neutral: ['#fafafa', '#f5f5f5', '#e5e5e5', '#d4d4d4', '#a3a3a3', '#737373', '#525252', '#404040', '#262626', '#171717', '#0f0f0f'],
}

export type ColorName = keyof typeof colors
export type SchemeName = keyof typeof scheme