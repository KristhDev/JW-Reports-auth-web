import { render, screen, waitFor, fireEvent } from '@testing-library/react';

import { IoPersonOutline } from 'react-icons/io5';
import { Formik } from 'formik';

import { FormField } from '../../../src/ui/components';

const fieldLabel = 'Nombre:'
const fieldName = 'name';
const fieldPlaceholder = 'Ingrese su nombre';
const fieldType = 'text';

describe('Test in <FormField /> component', () => {
    beforeEach(() => {
        render(
            <Formik
                initialValues={{ name: '' }}
                onSubmit={ () => {} }
            >
                { () => (
                    <FormField
                        icon={ <IoPersonOutline size={ 25 } /> }
                        label={ fieldLabel }
                        name={ fieldName }
                        placeholder={ fieldPlaceholder }
                        type={ fieldType }
                    />
                ) }
            </Formik>
        );
    });

    it('should to match snapshot', () => {
        const { container } = render(
            <Formik
                initialValues={{ name: '' }}
                onSubmit={ () => {} }
            >
                { () => (
                    <FormField
                        icon={ <IoPersonOutline size={ 25 } /> }
                        label={ fieldLabel }
                        name={ fieldName }
                        placeholder={ fieldPlaceholder }
                        type={ fieldType }
                    />
                ) }
            </Formik>
        );

        expect(container).toMatchSnapshot();
    });

    it('should render respective props', () => {
        const label = screen.getByTestId<HTMLLabelElement>('form-field-label');
        const input = screen.getByRole<HTMLInputElement>('textbox');

        expect(label.innerHTML).toBe(fieldLabel);
        expect(input.name).toBe(fieldName);
        expect(input.placeholder).toBe(fieldPlaceholder);
        expect(input.type).toBe(fieldType);
    });

    it('should change value of input', () => {
        const input = screen.getByRole<HTMLInputElement>('textbox');
        fireEvent.input(input, { target: { value: 'Test Name' } });

        expect(input.value).toBe('Test Name');
    });
});