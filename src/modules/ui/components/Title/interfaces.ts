import { CSSProperties } from 'react';

/* Defining the props that the component will receive. */
export interface TitleProps {
    classNameContainer?: string;
    classNameText?: string;
    containerStyle?: CSSProperties;
    text: string;
    textStyle?: CSSProperties;
}