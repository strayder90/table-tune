import AuthGuard from '@modules/auth/components/AuthGuard.jsx';
import Dashboard from '@modules/dashboard/layout/Dashboard.jsx';
import TablesPage from '@modules/tables/pages/TablesPage.jsx';
import EventsPage from '@modules/events/pages/EventsPage.jsx';
import ReservationPage from '@modules/dashboard/pages/ReservationPage.jsx';
import TeamPage from '@modules/team/pages/TeamPage.jsx';
import MenuPage from '@modules/dashboard/pages/MenuPage.jsx';
import UsersPage from '@modules/users/pages/UsersPage.jsx';
import UserSettingsPage from '@modules/dashboard/pages/UserSettings.jsx';
import routesMap from '@modules/routesMap.js';

export const getProtectedRoutes = (isUserAuthenticated) => [
    {
        path: routesMap.path,
        element: (
            <AuthGuard isUserAuthenticated={isUserAuthenticated}>
                <Dashboard/>
            </AuthGuard>
        ),
        children: [
            {path: routesMap.tables.path, element: <TablesPage/>},
            {path: routesMap.events.path, element: <EventsPage/>},
            {path: routesMap.reservations.path, element: <ReservationPage/>},
            {path: routesMap.team.path, element: <TeamPage/>},
            {path: routesMap.menu.path, element: <MenuPage/>},
            {path: routesMap.menu.users.path, element: <UsersPage/>},
            {path: routesMap.userSettings.path, element: <UserSettingsPage/>}
        ]
    }
];
