import React from 'react';

import HomePage from './modules/auth/pages/HomePage.jsx';
import SignupForm from './modules/auth/forms/SignupForm.jsx';
import LoginForm from './modules/auth/forms/LoginForm.jsx';
import AuthGuard from './modules/auth/components/AuthGuard.jsx';
import FallbackPage from './modules/auth/pages/FallbackPage.jsx';

const routes = [
    {
        path: '/',
        element: <SignupForm/>
    },
    {
        path: '/login',
        element: <LoginForm/>
    },
    {
        path: '/table-tune',
        element: (
            <AuthGuard>
                <HomePage/>
            </AuthGuard>
        )
    },
    {
        path: '*',
        element: <FallbackPage/>
    }
];

export default routes;