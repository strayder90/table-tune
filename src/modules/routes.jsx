import React from 'react';
import {Navigate} from 'react-router-dom';
import {useSelector} from 'react-redux';

import FallbackPage from '@modules/dashboard/pages/FallbackPage.jsx';
import Dashboard from '@modules/dashboard/layout/Dashboard.jsx';
import SignupForm from '@modules/auth/forms/SignupForm.jsx';
import LoginForm from '@modules/auth/forms/LoginForm.jsx';
import AuthGuard from '@modules/auth/components/AuthGuard.jsx';
import TeamPage from '@modules/team/pages/TeamPage.jsx';
import ReservationPage from '@modules/dashboard/pages/ReservationPage.jsx';
import MenuPage from '@modules/dashboard/pages/MenuPage.jsx';
import EventsPage from '@modules/events/pages/EventsPage.jsx';
import {selectIsAuthenticated} from '@/redux/authentication/authSelectors.js';
import TablesPage from '@modules/dashboard/pages/TablesPage.jsx';
import UsersPage from '@modules/users/pages/UsersPage.jsx';
import UserSettingsPage from '@modules/dashboard/pages/UserSettings.jsx';

const RoutesConfig = () => {
    const isAuthenticated = useSelector(selectIsAuthenticated);

    return [
        {
            path: '/',
            element: isAuthenticated ? <Navigate to='/table-tune/tables' replace/> : <LoginForm/>
        },
        {
            path: '/signup',
            element: <SignupForm/>
        },
        {
            path: '/table-tune',
            element: (
                <AuthGuard>
                    <Dashboard/>
                </AuthGuard>
            ),
            children: [
                {path: 'tables', element: <TablesPage/>},
                {path: 'events', element: <EventsPage/>},
                {path: 'reservations', element: <ReservationPage/>},
                {path: 'team', element: <TeamPage/>},
                {path: 'menu', element: <MenuPage/>},
                {path: 'users', element: <UsersPage/>},
                {path: 'user-settings', element: <UserSettingsPage/>}
            ]
        },
        {
            path: '*',
            element: <FallbackPage/>
        }
    ];
};

export default RoutesConfig;