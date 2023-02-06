import { createBrowserRouter, Navigate } from 'react-router-dom';

import { routes as authRoutes } from '../auth/routes';

export const rootRouter = createBrowserRouter([
    {
        path: '',
        children: authRoutes
    },
    {
        path: '*',
        element: <Navigate to="/reset-password" />
    }
]);