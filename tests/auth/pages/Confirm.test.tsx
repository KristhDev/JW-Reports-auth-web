import { render } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { Confirm } from '../../../src/auth/pages';

const confirmRouter = createMemoryRouter([
    {
        path: '',
        element: <Confirm />
    }
], { initialEntries: [ '#message=Test+message' ] });

const confirmSignUpRouter = createMemoryRouter([
    {
        path: '',
        element: <Confirm />
    }
], { initialEntries: [ '#type=signup' ] });

describe('Test in <Confirm /> page', () => {
    it('should to match the snapshot', () => {
        const { container } = render(<RouterProvider router={ confirmRouter } />);
        expect(container).toMatchSnapshot();
    });

    it('should render the message', () => {
        const { getByRole } = render(<RouterProvider router={ confirmRouter } />);
        const msgText = getByRole('heading', { level: 2 });

        expect(msgText).toBeTruthy();
        expect(msgText.innerHTML).toBe('Test message');
    });

    it('should render sign up message', () => {
        const { getByRole } = render(<RouterProvider router={ confirmSignUpRouter } />);
        const msgText = getByRole('heading', { level: 2 });

        expect(msgText).toBeTruthy();
        expect(msgText.innerHTML).toBe('Haz verificado tu cuenta correctamente, abre la aplicación e ingresa con tu cuenta.');
    });
});