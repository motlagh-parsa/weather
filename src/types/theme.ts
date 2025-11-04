export type ThemeMode = 'light' | 'dark';

export interface AppThemeContextType {
    mode: ThemeMode;
    toggleColorMode: () => void;
}