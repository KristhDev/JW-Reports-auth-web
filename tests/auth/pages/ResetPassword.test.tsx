import { render } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';

import { rootResetPasswordRouter } from '../../../src/router';

describe('Test in <ResetPassword /> page', () => {
    it('should to match snapshot', () => {
        const { container } = render(
            <RouterProvider router={ rootResetPasswordRouter } />
        );

        expect(container).toMatchSnapshot();
    });
});