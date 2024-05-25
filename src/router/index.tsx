import { createBrowserRouter, createMemoryRouter } from 'react-router-dom';

/* Routes */
import { routes as authRoutes } from '../modules/auth';

/* Pages */
import { NotFound } from '../modules/ui';

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