import { useContext } from 'react';

/* Context */
import { ThemeContext } from '../context';

/**
 * It returns the value of the ThemeContext
 */
const useTheme = () => useContext(ThemeContext);

export default useTheme;