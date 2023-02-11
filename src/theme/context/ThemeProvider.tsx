import { FC, PropsWithChildren, useEffect, useState } from 'react';

/* Context */
import ThemeContext from './ThemeContext';

/* Components */
import { ThemeBtn } from '../components';

/* Interfaces */
import { Theme } from '../interfaces';

const ThemeProvider: FC<PropsWithChildren> = ({ children }) => {
    const [ theme, setThemeState ] = useState<Theme>('default');

    /**
     * SetTheme is a function that takes two arguments, theme and storageTheme, and returns nothing.
     * @param {Theme} theme - Theme - This is the theme that is passed in from the component.
     * @param {Theme} storageTheme - The theme that will be stored in localStorage.
     */
    const setTheme = (theme: Theme, storageTheme: Theme) => {
        localStorage.setItem('jw-reports-auth-web-theme', storageTheme);
        setThemeState(theme);
    }

    /**
     * If the default theme is set to 'default', then set the theme to the user's preferred color
     * scheme. Otherwise, set the theme to the default theme.
     */
    const setDefaultTheme = () => {
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