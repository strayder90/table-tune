import {Navigate} from 'react-router-dom';

import LoginForm from '@modules/auth/forms/LoginForm.jsx';
import SignupForm from '@modules/auth/forms/SignupForm.jsx';

export const getPublicRoutes = (isUserAuthenticated) => [
    {
        path: '/',
        element: isUserAuthenticated ? <Navigate to='/table-tune/tables' replace/> : <LoginForm/>
    },
    {
        path: '/signup',
        element: <SignupForm/>
    }
];
