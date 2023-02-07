import { CSSProperties } from 'react';

export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    onClick?: () => void;
    style?: CSSProperties;
    type: 'submit' | 'reset' | 'button';
}