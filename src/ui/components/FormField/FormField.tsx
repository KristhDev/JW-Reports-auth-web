import { FC } from 'react';
import { ErrorMessage, useField } from 'formik';

import { FormFieldProps } from './interfaces';

import './styles.scss';

export const FormField: FC<FormFieldProps> = ({
    controlClassName,
    controlStyle,
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
            <label className="form-field__label" htmlFor="">{ label }</label>

            <div className="form-field__input-container">
                <input className="form-field__input-container__input" { ...field } { ...rest } />
                { icon }
            </div>

            <ErrorMessage
                className="form-field__error-message"
                component="span"
                name={ rest.name! }
            />
        </div>
    );
}