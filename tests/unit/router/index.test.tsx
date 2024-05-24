import { render, screen } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';

import { rootConfirmRouter, rootResetPasswordRouter } from '../../setups';
import { rootRouter } from '../../../src/router';

describe('Test in rootRouter', () => {
    it('should render Confirm page then message query parameter exists', () => {
        render(<RouterProvider router={ rootConfirmRouter } />);

        const titleText = screen.getByText('Confirmación exitosa');
        const messageText = screen.getByText('Message test');

        expect(titleText).toBeTruthy();
        expect(messageText).toBeTruthy();
    });

    it('should render ResetPassword page then refresh_token query parameter exists', () => {
        render(<RouterProvider router={ rootResetPasswordRouter } />);

        const titleText = screen.getByText('Restablecimiento de contraseña');
        expect(titleText).toBeTruthy();
    });

    it('should render NotFound page by default', () => {
        render(<RouterProvider router={ rootRouter } />);

        const titleText = screen.getByText('No encontrado');
        expect(titleText).toBeTruthy();
    });
});