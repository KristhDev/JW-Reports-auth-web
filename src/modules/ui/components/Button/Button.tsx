import { FC, PropsWithChildren } from 'react';

/* Components */
import { Spinner } from '../Spinner';

/* Interfaces */
import { ButtonProps } from './interfaces';

/* Styles */
import './styles.scss';

/**
 * Renders a custom button component.
 *
 * @param {PropsWithChildren<ButtonProps>} props - The props for the button component.
 * @param {ReactNode} props.children - The content of the button.
 * @param {string} props.className - The custom class name for the button.
 * @param {boolean} props.disabled - Indicates if the button is disabled.
 * @param {() => void} props.onClick - The event handler for the button click.
 * @param {CSSProperties} props.style - The inline styles for the button.
 * @param {'button' | 'submit' | 'reset'} props.type - The type of the button.
 * @return {JSX.Element} The rendered button component.
 */
export const Button: FC<PropsWithChildren<ButtonProps>> = ({
    children,
    className,
    disabled,
    loading,
    onClick,
    style,
    type
}): JSX.Element => {
    return (
        <button
            className={ `button ${ className }` }
            disabled={ disabled }
            onClick={ onClick }
            style={ style }
            type={ type }
        >
            { children }
            { (loading) && <Spinner style={{ marginLeft: '1rem' }} /> }
        </button>
    );
}