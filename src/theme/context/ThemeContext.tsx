import { createContext } from 'react';

/* Interfaces */
import { Theme, } from '../interfaces';

/* Defining the interface for the context. */
interface ThemeContextProps {
    theme: Theme;
    setTheme: (theme: Theme) => void;
}

/* Creating a context with the type of ThemeContextProps. */
const Context = createContext<ThemeContextProps>({} as ThemeContextProps);

export default Context;