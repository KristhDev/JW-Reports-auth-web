import { Navigate, RouteObject } from 'react-router-dom';

import { ResetPassword } from '../pages';

export const routes: RouteObject[] = [
    {
        path: '',
        element: <ResetPassword />
    },
    {
        path: 'reset-password',
        element: <ResetPassword />
    },
    {
        path: '*',
        element: <Navigate to="/reset-password" />
    }
];