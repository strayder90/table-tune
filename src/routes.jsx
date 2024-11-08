import HomePage from './modules/auth/components/HomePage';
import SignupForm from './modules/auth/forms/SignupForm.jsx';
import LoginForm from './modules/auth/forms/LoginForm.jsx';
import AuthGuard from './modules/auth/components/AuthGuard.jsx';

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
        path: '/home',
        element: (
            <AuthGuard>
                <HomePage/>
            </AuthGuard>
        )
    }
];

export default routes;