import { createMemoryRouter } from 'react-router-dom';

/* Modules */
import { routes as authRoutes, Confirm } from '../../src/modules/auth';
import { NotFound } from '../../src/modules/ui';

export const rootConfirmRouter = createMemoryRouter([
    {
        path: '',
        children: authRoutes
    },
    {
        path: '*',
        element: <NotFound />
    }
], {
    initialEntries: [ '#message=Message+test' ]
});

export const rootResetPasswordRouter = createMemoryRouter([
    {
        path: '',
        children: authRoutes
    },
    {
        path: '*',
        element: <NotFound />
    }
], {
    initialEntries: [ '/reset-password#refresh_token=token_for_refresh_password' ]
});

export const confirmRouter = createMemoryRouter([
    {
        path: '',
        element: <Confirm />
    }
], { initialEntries: [ '#message=Test+message' ] });

export const confirmSignUpRouter = createMemoryRouter([
    {
        path: '',
        element: <Confirm />
    }
], { initialEntries: [ '#type=signup' ] });