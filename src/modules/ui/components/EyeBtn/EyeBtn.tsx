import { FC } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

/* Interfaces */
import { EyeBtnProps } from './interfaces';

/* Styles */
import './styles.scss';


/**
 * Renders an eye-shaped button component that can be used to toggle the visibility of content.
 *
 * @param {Object} props - The props for the EyeBtn component.
 * @param {Function} props.onToggle - The function to be called when the button is clicked to toggle the value.
 * @param {boolean} props.value - The current state of the value indicating whether the content is visible or not.
 * @return {JSX.Element} The rendered eye-shaped button component.
 */
export const EyeBtn: FC<EyeBtnProps> = ({ onToggle, value }): JSX.Element => {
    return (
        <button
            onClick={ () => onToggle(!value) }
            className="eye-btn"
        >
            { (value) ? (
                <IoEyeOffOutline
                    className="eye-btn__icon"
                    data-testid="eye-off-icon"
                    size={ 25 }
                />
            ) : (
                <IoEyeOutline
                    className="eye-btn__icon"
                    data-testid="eye-icon"
                    size={ 25 }
                />
            ) }
        </button>
    );
}