import { IoMoonOutline, IoSunnyOutline } from 'react-icons/io5';

/* Hooks */
import { useTheme } from '../../hooks';

/* Styles */
import './styles.scss';

/**
 * Renders a theme button component that toggles between light and dark themes.
 *
 * @return {JSX.Element} The rendered theme button component.
 */
export const ThemeBtn = (): JSX.Element => {
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