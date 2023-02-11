import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';

/* Routes */
import { routes as authRoutes } from '../auth/routes';

/* Pages */
import { NotFound } from '../ui/pages';

/** 
 * Creating a router with two routes. The first route is the root route, which
 * is the empty string. The second route is a wildcard route, which matches
 * anyany route. 
 */
export const rootRouter = createBrowserRouter([
    {
        path: '',
        children: authRoutes
    },
    {
        path: '*',
        element: <NotFound />
    }
]);

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