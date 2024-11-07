import HomePage from './modules/auth/components/HomePage';
import LoginPage from './modules/auth/pages/LoginPage.jsx';

const routes = [
    {
        path: '/',
        element: <LoginPage/>
    },
    {
        path: '/home',
        element: <HomePage/>
    }
];

export default routes;