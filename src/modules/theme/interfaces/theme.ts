export type Theme = 'dark' | 'light' | 'default';

/* Defining the interface for the context. */
export interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme, storageTheme: Theme) => void;
}