import { CSSProperties, HTMLAttributes } from 'react';

export interface TitleProps {
    classNameContainer?: HTMLAttributes<HTMLDivElement>['className'];
    classNameText?: HTMLAttributes<HTMLHeadElement>['className'];
    containerStyle?: CSSProperties;
    text: string;
    textStyle?: CSSProperties;
}