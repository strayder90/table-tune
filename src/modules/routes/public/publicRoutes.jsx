import {Navigate} from 'react-router-dom';

import LoginForm from '@modules/auth/forms/LoginForm.jsx';
import SignupForm from '@modules/auth/forms/SignupForm.jsx';

export const getPublicRoutes = (isAuthenticated) => [
    {
        path: '/',
        element: isAuthenticated ? <Navigate to='/table-tune/tables' replace/> : <LoginForm/>
    },
    {
        path: '/signup',
        element: <SignupForm/>
    }
];
