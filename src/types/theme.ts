
export type ThemeMode = 'light' | 'dark';
export type Language = 'en' | 'zh';
export type ViewMode = 'dashboard' | 'editor';

export interface ThemeColors {
  primary: string;
  secondary: string;
  background: string;
  surface: string;
  surfaceHighlight: string;
  stroke: string;
  text: string;
  textSecondary: string;
  node: {
    blue: string;
    orange: string;
    purple: string;
    teal: string;
    green: string;
    red: string;
    pink: string;
    indigo: string;
    cyan: string;
    yellow: string;
  }
}

export interface Theme {
  mode: ThemeMode;
  colors: ThemeColors;
}
