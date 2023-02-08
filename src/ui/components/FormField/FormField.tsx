import { FC } from 'react';
import { ErrorMessage, useField } from 'formik';

import { FormFieldProps } from './interfaces';

import './styles.scss';

export const FormField: FC<FormFieldProps> = ({
    controlClassName,
    controlStyle,
    errorClasName,
    icon,
    inputClassName,
    inputStyle,
    label,
    labelClassName,
    labelStyle,
    ...rest
}) => {
    const [ field ] = useField(rest as any);

    return (
        <div className="form-field__container">
            <label
                className={ `form-field__label ${ labelClassName }` }
                htmlFor={ rest.name }
                style={ labelStyle }
            >
                { label }
            </label>

            <div className="form-field__input-container">
                <input
                    className={ `form-field__input-container__input ${ inputClassName }` }
                    style={ inputStyle }
                    { ...field }
                    { ...rest }
                />

                { icon }
            </div>

            <ErrorMessage
                className={ `form-field__error-message ${ errorClasName }` }
                component="span"
                name={ rest.name! }
            />
        </div>
    );
}