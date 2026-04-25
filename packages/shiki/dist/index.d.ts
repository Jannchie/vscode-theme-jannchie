interface ShikiTokenColor {
    scope: string | string[];
    settings: {
        background?: string;
        fontStyle?: string;
        foreground?: string;
        [key: string]: unknown;
    };
}
interface JannchieShikiTheme {
    bg: string;
    displayName: string;
    fg: string;
    name: string;
    settings: ShikiTokenColor[];
    tokenColors: ShikiTokenColor[];
    type: 'dark' | 'light';
}
declare const jannchieBlack: JannchieShikiTheme;
declare const jannchieDark: JannchieShikiTheme;
declare const jannchieDarkSoft: JannchieShikiTheme;
declare const jannchieLight: JannchieShikiTheme;
declare const jannchieLightSoft: JannchieShikiTheme;

declare const themes: JannchieShikiTheme[];

export { type JannchieShikiTheme, type ShikiTokenColor, themes as default, jannchieBlack, jannchieDark, jannchieDarkSoft, jannchieLight, jannchieLightSoft, themes };
