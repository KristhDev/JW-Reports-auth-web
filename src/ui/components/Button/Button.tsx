import { FC, PropsWithChildren } from 'react';

/* Interfaces */
import { ButtonProps } from './interfaces';

/* Styles */
import './styles.scss';

/**
 * This component shows a custom button for the different actions of the app.
 * @param {ButtonProps} {
 *      children: ReactNode,
 *      className: string,
 *      disabled: boolean,
 *      onClick: () => void,
 *      style: CSSProperties,
 *      type: 'button' | 'submit' | 'reset'
 *  } - This is a props to functionality of the component
 * - children: This is a content of the component
 * - className: This is the name of the custom class
 * - disabled: This is a boolean to disable the component
 * - onClick: This is a function to call when the button is clicked
 * - style: This is a CSSProperties object to style the component
 * - type: This is a string to define the type of the button
 */
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    className,
    disabled,
    onClick,
    style,
    type
}) => {
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