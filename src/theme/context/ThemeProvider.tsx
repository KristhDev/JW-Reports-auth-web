import { FC, PropsWithChildren, useEffect, useState } from 'react';

/* Context */
import ThemeContext from './ThemeContext';

/* Interfaces */
import { Theme } from '../interfaces';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [ theme, setThemeState ] = useState<Theme>('default');

    /**
     * SetTheme is a function that takes a theme and sets the theme in local storage and sets the theme
     * state.
     * @param {Theme} theme - Theme - this is the theme that is being set.
     */
    const setTheme = (theme: Theme) => {
        localStorage.setItem('jw-reports-auth-web-theme', theme);
        setThemeState(theme);
    }

    /**
     * If there is a default theme in local storage, set the theme to that, otherwise set the theme to
     * dark if the user prefers dark mode, otherwise set the theme to light.
     */
    const setDefaultTheme = () => {
        const defaultTheme = localStorage.getItem('jw-reports-auth-web-theme');

        if (defaultTheme) {
            setTheme(defaultTheme as Theme);
        }
        else {
            const isDarkTheme = window.matchMedia('(prefers-color-scheme: dark)').matches;
            setTheme(isDarkTheme ? 'dark' : 'light');
        }
    }

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
                { children }
            </div>
        </ThemeContext.Provider>
    );
}

export default ThemeProvider;