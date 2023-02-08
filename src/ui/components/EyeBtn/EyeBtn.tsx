import { FC } from 'react';
import { IoEyeOutline, IoEyeOffOutline } from 'react-icons/io5';

import { EyeBtnProps } from './interfaces';

import './styles.scss';

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