import { RouteObject } from 'react-router-dom';

import { Confirm, ResetPassword } from '../pages';

export const routes: RouteObject[] = [
    {
        path: '',
        element: <Confirm />
    },
    {
        path: 'reset-password',
        element: <ResetPassword />
    }
];