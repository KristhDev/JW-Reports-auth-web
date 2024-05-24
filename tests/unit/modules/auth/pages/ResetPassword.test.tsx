import { render } from '@testing-library/react';
import { RouterProvider } from 'react-router-dom';

/* Setups */
import { rootResetPasswordRouter } from '../../../../setups';

describe('Test in <ResetPassword /> page', () => {
    it('should to match snapshot', () => {
        const { container } = render(<RouterProvider router={ rootResetPasswordRouter } />);
        expect(container).toMatchSnapshot();
    });
});