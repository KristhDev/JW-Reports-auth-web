import { FC } from 'react';

import { TitleProps } from './interfaces';

import './styles.scss';

export const Title: FC<TitleProps> = ({ text, classNameContainer, classNameText, containerStyle, textStyle }) => {
    return (
        <div
            className={ `title-container ${ classNameContainer }` }
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