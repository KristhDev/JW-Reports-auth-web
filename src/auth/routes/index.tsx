import { RouteObject } from 'react-router-dom';

/* Pages */
import { Confirm, ResetPassword } from '../pages';

/* Creating a route object. */
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