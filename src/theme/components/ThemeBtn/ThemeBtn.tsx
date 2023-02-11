import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

/* Hooks */
import { useTheme } from '../../hooks';

/* Styles */
import './styles.scss';

/**
 * This component is responsible for displaying the theme button
 * for changing the theme.
 */
export const ThemeBtn = () => {
    const { setTheme, theme } = useTheme();

    return (
        <button
            className="theme-btn"
            onClick={
                () => setTheme(
                    (theme === 'light') ? 'dark' : 'light', 
                    (theme === 'light') ? 'dark' : 'light'
                )
            }
        >
            { (theme === 'light') ? (
                <IoMoonOutline size={ 30 } />
            ) : (
                <IoSunnyOutline size={ 30 } />
            ) }
        </button>
    );
}