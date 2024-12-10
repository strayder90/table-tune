import React from 'react';

import HomePage from './modules/auth/pages/HomePage.jsx';
import SignupForm from './modules/auth/forms/SignupForm.jsx';
import LoginForm from './modules/auth/forms/LoginForm.jsx';
import AuthGuard from './modules/auth/components/AuthGuard.jsx';
import FallbackPage from './modules/auth/pages/FallbackPage.jsx';

const routes = [
    {
        path: '/',
        element: <LoginForm/>
    },
    {
        path: '/signup',
        element: <SignupForm/>
    },
    {
        path: '/tabletune',
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