import { CSSProperties, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

/* Defining the interface for the props that will be passed to the FormField component. */
export interface FormFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    controlClassName?: string;
    controlStyle?: CSSProperties;
    errorClasName?: string;
    icon?: ReactNode;
    inputClassName?: string;
    inputStyle?: CSSProperties;
    label: string;
    labelClassName?: string;
    labelStyle?: CSSProperties;
}