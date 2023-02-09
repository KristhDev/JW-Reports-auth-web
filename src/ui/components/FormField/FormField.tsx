import { FC } from 'react';
import { ErrorMessage, useField } from 'formik';

/* Interfaces */
import { FormFieldProps } from './interfaces';

/* Styles */
import './styles.scss';

/**
 * This component is responsible for displaying fields for forms of
 * different types but as long as it has to do with texts.
 * @param {FormFieldProps} props {
 *      controlClassName: string,
 *      controlStyle: CSSProperties,
 *      errorClassName: string,
 *      icon: ReactNode,
 *      inputClassName: string,
 *      inputStyle: CSSProperties,
 *      label: string,
 *      labelClassName: string,
 *      labelStyle: CSSProperties
 * } - This is a props for functionality of the component
 * - controlClassName: This is the class name of the control
 * - controlStyle: This is the style of the control
 * - errorClassName: This is the class name of the error
 * - icon: This is the icon of the field
 * - inputClassName: This is the class name of the input
 * - inputStyle: This is the style of the input
 * - label: This is the label of the field
 * - labelClassName: This is the class name of the label
 * - labelStyle: This is the style of the label
 */
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

            {/* Label of field */}
            <label
                className={ `form-field__label ${ labelClassName }` }
                htmlFor={ rest.name }
                style={ labelStyle }
            >
                { label }
            </label>

            {/* Input container of field */}
            <div className="form-field__input-container">

                {/* Input of field */}
                <input
                    className={ `form-field__input-container__input ${ inputClassName }` }
                    style={ inputStyle }
                    { ...field }
                    { ...rest }
                />

                { icon }
            </div>

            {/* Error field */}
            <ErrorMessage
                className={ `form-field__error-message ${ errorClasName }` }
                component="span"
                name={ rest.name! }
            />
        </div>
    );
}