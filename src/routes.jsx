import React from 'react';

import HomePage from '@modules/dashboard/pages/HomePage.jsx';
import FallbackPage from '@modules/dashboard/pages/FallbackPage.jsx';
import Dashboard from '@modules/dashboard/layout/Dashboard.jsx';
import SignupForm from '@modules/auth/forms/SignupForm.jsx';
import LoginForm from '@modules/auth/forms/LoginForm.jsx';
import AuthGuard from '@modules/auth/components/AuthGuard.jsx';
import CrewPage from '@modules/dashboard/pages/CrewPage.jsx';
import ReservationPage from '@modules/dashboard/pages/ReservationPage.jsx';
import MenuPage from '@modules/dashboard/pages/MenuPage.jsx';
import UserSettingsPage from '@modules/dashboard/pages/UserSettings.jsx';
import EventsPage from '@modules/events/pages/EventsPage.jsx';

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
                <Dashboard/>
            </AuthGuard>
        ),
        children: [
            {
                path: 'tables',
                element: <HomePage/>
            },
            {
                path: 'events',
                element: <EventsPage/>,
            },
            {
                path: 'reservations',
                element: <ReservationPage/>
            },
            {
                path: 'crew',
                element: <CrewPage/>
            },
            {
                path: 'menu',
                element: <MenuPage/>
            },
            {
                path: 'user-settings',
                element: <UserSettingsPage/>
            },
        ],
    },
    {
        path: '*',
        element: <FallbackPage/>
    }
];

export default routes;