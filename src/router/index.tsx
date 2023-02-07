import { createBrowserRouter } from 'react-router-dom';

import { routes as authRoutes } from '../auth/routes';

import { NotFound } from '../ui/pages';

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