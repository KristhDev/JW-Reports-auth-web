import { FC } from 'react';
import { ErrorMessage, useField } from 'formik';

/* Interfaces */
import { FormFieldProps } from './interfaces';

/* Styles */
import './styles.scss';

/**
 * Renders a form field component.
 *
 * @param {FormFieldProps} props - The props for the form field component.
 * @param {string} props.controlClassName - The class name for the control element.
 * @param {CSSProperties} props.controlStyle - The inline style for the control element.
 * @param {string} props.errorClasName - The class name for the error message element.
 * @param {ReactNode} props.icon - The icon element to be displayed.
 * @param {string} props.inputClassName - The class name for the input element.
 * @param {CSSProperties} props.inputStyle - The inline style for the input element.
 * @param {string} props.label - The label for the form field.
 * @param {string} props.labelClassName - The class name for the label element.
 * @param {CSSProperties} props.labelStyle - The inline style for the label element.
 * @param {any} props.rest - The rest of the props for the form field component.
 * @return {JSX.Element} The rendered form field component.
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
}): JSX.Element => {
    const [ field ] = useField(rest as any);

    return (
        <div className="form-field__container">

            {/* Label of field */}
            <label
                className={ `form-field__label ${ labelClassName }` }
                htmlFor={ rest.name }
                style={ labelStyle }
                data-testid="form-field-label"
            >
                { label }
            </label>

            {/* Input container of field */}
            <div className="form-field__input-border">
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