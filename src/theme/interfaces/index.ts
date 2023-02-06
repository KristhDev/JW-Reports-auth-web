export type Theme = 'dark' | 'light' | 'default';

/**
 * SetThemePayload is an object with a property called theme that is of type Theme
 * @property {Theme} theme - The theme to set.
 */
export type SetThemePayload = {
    theme: Theme
}