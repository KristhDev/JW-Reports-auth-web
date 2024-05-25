import { CSSProperties } from 'react';

/* Defining the interface for the props that the Button component will accept. */
export interface ButtonProps {
    className?: string;
    disabled?: boolean;
    loading?: boolean;
    onClick?: () => void;
    style?: CSSProperties;
    type: 'submit' | 'reset' | 'button';
}