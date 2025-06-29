import {Navigate} from 'react-router-dom';

import LoginForm from '@modules/auth/forms/LoginForm.jsx';
import SignupForm from '@modules/auth/forms/SignupForm.jsx';
import routesMap from '@modules/routesMap.js';

export const getPublicRoutes = (isUserAuthenticated) => [
    {
        path: routesMap.index,
        element: isUserAuthenticated ? <Navigate to={routesMap.tables.path} replace/> : <LoginForm/>
    },
    {
        path: routesMap.signup,
        element: <SignupForm/>
    }
];
