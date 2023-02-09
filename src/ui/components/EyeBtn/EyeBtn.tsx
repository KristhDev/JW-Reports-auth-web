import { FC } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

/* Interfaces */
import { EyeBtnProps } from './interfaces';

/* Styles */
import './styles.scss';

/**
 * This component is responsible for displaying an eye-shaped button,
 * it is used for the password fields and to be able to display it.
 * @param {EyeBtnProps} props { onToggle: (value: boolean) => void, value: boolean } - This is the
 * props for functionality of the component
 * - onToggle: This is a function to toggle the state of the value
 * - value: This is the current state of the value
 */
export const EyeBtn: FC<EyeBtnProps> = ({ onToggle, value }) => {
    return (
        <button
            onClick={ () => onToggle(!value) }
            className="eye-btn"
        >
            { (value) ? (
                <IoEyeOffOutline size={ 25 } className="eye-btn__icon" />
            ) : (
                <IoEyeOutline size={ 25 } className="eye-btn__icon" />
            ) }
        </button>
    );
}