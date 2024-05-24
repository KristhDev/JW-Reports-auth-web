import { useContext } from 'react';

/* Context */
import { ThemeContext } from '../context';

/* Interfaces */
import { ThemeContextProps } from '../interfaces';

/**
 * It returns the value of the ThemeContext
 */
const useTheme = (): ThemeContextProps => useContext(ThemeContext);

export default useTheme;