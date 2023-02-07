import { CSSProperties, DetailedHTMLProps, InputHTMLAttributes, ReactNode } from 'react';

export interface FormFieldProps extends DetailedHTMLProps<InputHTMLAttributes<HTMLInputElement>, HTMLInputElement> {
    controlClassName?: string;
    controlStyle?: CSSProperties;
    icon?: ReactNode;
    inputClassName?: string;
    inputStyle?: CSSProperties;
    label: string;
    labelClassName?: string;
    labelStyle?: CSSProperties;
}