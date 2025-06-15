import AuthGuard from '@modules/auth/components/AuthGuard.jsx';
import Dashboard from '@modules/dashboard/layout/Dashboard.jsx';
import TablesPage from '@modules/dashboard/pages/TablesPage.jsx';
import EventsPage from '@modules/events/pages/EventsPage.jsx';
import ReservationPage from '@modules/dashboard/pages/ReservationPage.jsx';
import TeamPage from '@modules/team/pages/TeamPage.jsx';
import MenuPage from '@modules/dashboard/pages/MenuPage.jsx';
import UsersPage from '@modules/users/pages/UsersPage.jsx';
import UserSettingsPage from '@modules/dashboard/pages/UserSettings.jsx';

export const getProtectedRoutes = () => [
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
    }
];
