import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import { IoPersonOutline } from 'react-icons/io5';
import { Formik } from 'formik';

/* Modules */
import { FormField } from '../../../../../src/modules/ui';

const fieldLabel = 'Nombre:'
const fieldName = 'name';
const fieldPlaceholder = 'Ingrese su nombre';
const fieldType = 'text';

const renderComponent = () => render(
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

describe('Test in <FormField /> component', () => {
    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should render respective props', () => {
        renderComponent();

        const label = screen.getByTestId<HTMLLabelElement>('form-field-label');
        const input = screen.getByRole<HTMLInputElement>('textbox');

        expect(label.innerHTML).toBe(fieldLabel);
        expect(input.name).toBe(fieldName);
        expect(input.placeholder).toBe(fieldPlaceholder);
        expect(input.type).toBe(fieldType);
    });

    it('should change value of input', async () => {
        const input = screen.getByRole<HTMLInputElement>('textbox');
        await userEvent.type(input, 'Test Name');

        expect(input.value).toBe('Test Name');
    });
});