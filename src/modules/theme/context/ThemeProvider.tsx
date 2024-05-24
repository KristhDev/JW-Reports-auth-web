import { FC, PropsWithChildren, useEffect, useState } from 'react';

/* Context */
import ThemeContext from './ThemeContext';

/* Components */
import { ThemeBtn } from '../components';

/* Interfaces */
import { Theme } from '../interfaces/theme';

/**
 * ThemeProvider is a React functional component that provides a theme context to its children.
 *
 * @param {PropsWithChildren} props - The props object that contains the children of the component.
 * @return {JSX.Element} The JSX element that represents the ThemeProvider component.
 */
const ThemeProvider: FC<PropsWithChildren> = ({ children }): JSX.Element => {
    const [ theme, setThemeState ] = useState<Theme>('default');

    /**
     * Sets the theme and storage theme in localStorage and updates the state with the new theme.
     *
     * @param {Theme} theme - The theme to be set.
     * @param {Theme} storageTheme - The theme to be stored in localStorage.
     * @return {void} This function does not return anything.
     */
    const setTheme = (theme: Theme, storageTheme: Theme): void => {
        localStorage.setItem('jw-reports-auth-web-theme', storageTheme);
        setThemeState(theme);
    }

    /**
     * Sets the default theme based on user preference or stored value.
     *
     * This function retrieves the default theme from localStorage and checks if it is set to 'default'.
     * If it is, the function determines whether the user prefers a dark or light color scheme and sets
     * the theme accordingly. If the default theme is not 'default', the function sets the theme to the
     * stored value. If there is no stored value, the function sets the theme based on the user's preference.
     *
     * @return {void} This function does not return anything.
     */
    const setDefaultTheme = (): void => {
        const defaultTheme = localStorage.getItem('jw-reports-auth-web-theme');

        if (defaultTheme) {
            if (defaultTheme === 'default') {
                const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
                setTheme(isDarkTheme ? 'dark' : 'light',  'default');
            }
            else {
                setTheme(defaultTheme as Theme, defaultTheme as Theme);
            }
        }
        else {
            const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(isDarkTheme ? 'dark' : 'light',  'default');
        }
    }

    /** 
     * Effect to load default theme.
     */
    useEffect(() => {
        setDefaultTheme();
    }, []);

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme
            }}
        >
            <div className={ `theme-${ theme }` }>
                <ThemeBtn />

                { children }
            </div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;