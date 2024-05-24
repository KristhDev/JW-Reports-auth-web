import { FC } from 'react';

/* Interfaces */
import { TitleProps } from './interfaces';

/* Styles */
import './styles.scss';

/**
 * Renders a title component with customizable styles and content.
 *
 * @param {TitleProps} props - The props for the title component.
 * @param {string} props.classNameContainer - The custom class name for the container element.
 * @param {string} props.classNameText - The custom class name for the text element.
 * @param {CSSProperties} props.containerStyle - The inline style for the container element.
 * @param {string} props.text - The text content for the title.
 * @param {CSSProperties} props.textStyle - The inline style for the text element.
 * @return {JSX.Element} The rendered title component.
 */
export const Title: FC<TitleProps> = ({ classNameContainer, classNameText, containerStyle, text, textStyle }): JSX.Element => {
    return (
        <div
            className={ `title-container ${ classNameContainer }` }
            data-testid="title-container"
            style={ containerStyle }
        >
            <h1
                className={ `title-text ${ classNameText }` }
                style={ textStyle }
            >
                { text }
            </h1>
        </div>
    );
}