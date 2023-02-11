import { Mock } from 'vitest';
import { render, screen, fireEvent, act, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

import { ResetPasswordForm } from '../../../src/auth/components';

import { useAuth } from '../../../src/auth/hooks';

vi.mock('../../../src/auth/hooks/useAuth.ts');

const updatePasswordMock = vi.fn();

const passwordRouter = createMemoryRouter([
    {
        path: '/reset-password',
        element: <ResetPasswordForm />
    }
], { initialEntries: [ '/reset-password#refresh_token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI' ] });

describe('Test in <ResetPasswordForm /> component', () => {
    (useAuth as Mock).mockReturnValue({
        updatePassword: updatePasswordMock
    });

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should to match snapshot', () => {
        const { container } = render(<RouterProvider router={ passwordRouter } />);
        expect(container).toMatchSnapshot();
    });

    it('should not call updatePassword then form is empty', async () => {
        render(<RouterProvider router={ passwordRouter } />);

        const form = await screen.findByTestId<HTMLFormElement>('form');
        fireEvent.submit(form);

        expect(updatePasswordMock).not.toHaveBeenCalled();
    });

    it('should not call updatePassword then is invalid', async () => {
        await waitFor(() => {
            render(<RouterProvider router={ passwordRouter } />);
        });

        const inputPassword = await screen.findByPlaceholderText<HTMLInputElement>('Ingrese su nueva contraseña');
        const inputConfirmPassword = await screen.findByPlaceholderText<HTMLInputElement>('Confirme su nueva contraseña');

        act(() => {
            fireEvent.input(inputPassword, { target: { value: 'test' } });
            fireEvent.input(inputConfirmPassword, { target: { value: 'test-error' } });
        });

        const form = await screen.findByTestId<HTMLFormElement>('form');
        fireEvent.submit(form);

        expect(updatePasswordMock).not.toHaveBeenCalled();
    });

    it('should call updatePassword', async () => {
        await waitFor(() => {
            render(<RouterProvider router={ passwordRouter } />);
        });

        const inputPassword = await screen.findByPlaceholderText<HTMLInputElement>('Ingrese su nueva contraseña');
        const inputConfirmPassword = await screen.findByPlaceholderText<HTMLInputElement>('Confirme su nueva contraseña');

        act(() => {
            fireEvent.input(inputPassword, { target: { value: 'test-error' } });
            fireEvent.input(inputConfirmPassword, { target: { value: 'test-error' } });
        });

        const form = await screen.findByTestId<HTMLFormElement>('form');
        fireEvent.submit(form);

        await waitFor(() => {
            expect(updatePasswordMock).toHaveBeenCalledTimes(1);
            expect(updatePasswordMock).toHaveBeenCalledWith('test-error', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI');
        });
    });

    it('should render error message of submit', async() => {
        updatePasswordMock.mockReturnValue('Error message');

        await waitFor(() => {
            render(<RouterProvider router={ passwordRouter } />);
        });

        const inputPassword = await screen.findByPlaceholderText<HTMLInputElement>('Ingrese su nueva contraseña');
        const inputConfirmPassword = await screen.findByPlaceholderText<HTMLInputElement>('Confirme su nueva contraseña');

        act(() => {
            fireEvent.input(inputPassword, { target: { value: 'test-error' } });
            fireEvent.input(inputConfirmPassword, { target: { value: 'test-error' } });
        });

        const form = await screen.findByTestId<HTMLFormElement>('form');
        fireEvent.submit(form);

        const submitError = await screen.findByText('Error message');
        expect(submitError).toBeTruthy();
    });
});