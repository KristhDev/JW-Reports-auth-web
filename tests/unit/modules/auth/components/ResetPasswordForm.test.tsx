import { Mock } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { RouterProvider, createMemoryRouter } from 'react-router-dom';

/* Mocks */
import { tokenMock, updatePasswordMock } from '../../../../mocks';

/* Modules */
import { ResetPasswordForm, useAuth } from '../../../../../src/modules/auth';

vi.mock('../../../../../src/modules/auth/hooks/useAuth.ts');

const passwordRouter = createMemoryRouter([
    {
        path: '/reset-password',
        element: <ResetPasswordForm />
    }
], { initialEntries: [ `/reset-password#refresh_token=${ tokenMock }` ] });

const renderComponent = () => render(<RouterProvider router={ passwordRouter } />);

describe('Test in <ResetPasswordForm /> component', () => {
    (useAuth as Mock).mockReturnValue({
        updatePassword: updatePasswordMock
    });

    beforeEach(() => {
        vi.clearAllMocks();
    });

    it('should to match snapshot', () => {
        const { container } = renderComponent();
        expect(container).toMatchSnapshot();
    });

    it('should not call updatePassword then form is empty', async () => {
        renderComponent();

        const submitBtn = await screen.findByText('Restablecer');
        await userEvent.click(submitBtn);

        expect(updatePasswordMock).not.toHaveBeenCalled();
    });

    it('should not call updatePassword then is invalid', async () => {
        renderComponent();

        const inputPassword = await screen.findByPlaceholderText<HTMLInputElement>('Ingrese su nueva contraseña');
        const inputConfirmPassword = await screen.findByPlaceholderText<HTMLInputElement>('Confirme su nueva contraseña');

        await userEvent.type(inputPassword, 'test');
        await userEvent.type(inputConfirmPassword, 'test-error');

        const submitBtn = await screen.findByText('Restablecer');
        await userEvent.click(submitBtn);

        expect(updatePasswordMock).not.toHaveBeenCalled();
    });

    it('should call updatePassword', async () => {
        renderComponent();

        const inputPassword = await screen.findByPlaceholderText<HTMLInputElement>('Ingrese su nueva contraseña');
        const inputConfirmPassword = await screen.findByPlaceholderText<HTMLInputElement>('Confirme su nueva contraseña');

        await userEvent.type(inputPassword, 'test-error');
        await userEvent.type(inputConfirmPassword, 'test-error');

        const submitBtn = await screen.findByText('Restablecer');
        await userEvent.click(submitBtn);

        expect(updatePasswordMock).toHaveBeenCalledTimes(1);
        expect(updatePasswordMock).toHaveBeenCalledWith('test-error', tokenMock);
    });

    it('should render error message of submit', async() => {
        updatePasswordMock.mockReturnValue('Error message');

        renderComponent();

        const inputPassword = await screen.findByPlaceholderText<HTMLInputElement>('Ingrese su nueva contraseña');
        const inputConfirmPassword = await screen.findByPlaceholderText<HTMLInputElement>('Confirme su nueva contraseña');

        await userEvent.type(inputPassword, 'test-error');
        await userEvent.type(inputConfirmPassword, 'test-error');

        const submitBtn = await screen.findByText('Restablecer');
        await userEvent.click(submitBtn);

        const submitError = await screen.findByText('Error message');
        expect(submitError).toBeTruthy();
    });
});