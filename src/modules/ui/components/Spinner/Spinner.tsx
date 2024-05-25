import { FC } from 'react';

/* Interfaces */
import { SpinnerProps } from './interfaces';

/* Styles */
import './styles.scss';

/**
 * Renders a spinner component with customizable styles and class name.
 *
 * @param {SpinnerProps} props - The props for the spinner component.
 * @param {string} props.className - The custom class name for the spinner.
 * @param {CSSProperties} props.style - The inline styles for the spinner.
 * @return {JSX.Element} The rendered spinner component.
 */
export const Spinner: FC<SpinnerProps> = ({ className, style }): JSX.Element => {
    return (
        <span
            className={ `spinner ${ className }` }
            data-testid="spinner"
            style={ style }
        />
    );
}