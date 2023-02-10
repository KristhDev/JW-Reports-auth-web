import { FC } from 'react';

/* Interfaces */
import { TitleProps } from './interfaces';

/* Styles */
import './styles.scss';

/**
 * This component is responsible for render a title for pages.
 * @param {TitleProps} {
 *      classNameContainer: string,
 *      classNameText: string,
 *      containerStyle: CSSProperties,
 *      text: string,
 *      textStyle: CSSProperties  
 * } - This is the props for functionality of the component
 * - classNameContainer: This is the className for the container of the title
 * - classNameText: This is the className for the text of the title
 * - containerStyle: This is the style of the container of the title
 * - text: This is the text of the title
 * - textStyle: This is the style of the text of the title
 */
export const Title: FC<TitleProps> = ({ classNameContainer, classNameText, containerStyle, text, textStyle }) => {
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