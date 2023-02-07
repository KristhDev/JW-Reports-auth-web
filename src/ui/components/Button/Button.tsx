import { FC, PropsWithChildren } from 'react';

import { ButtonProps } from './interfaces';

import './styles.scss';

export const Button: FC<PropsWithChildren<ButtonProps>> = ({ onClick, children, className, disabled, style, type }) => {
    return (
        <button
            className={ `button ${ className }` }
            disabled={ disabled }
            onClick={ onClick }
            style={ style }
            type={ type }
        >
            { children }
        </button>
    );
}