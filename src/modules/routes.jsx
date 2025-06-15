import {getPublicRoutes} from '@modules/routes/public/publicRoutes.jsx';
import {getFallbackRoute} from '@modules/routes/fallbackRoute.jsx';
import {getProtectedRoutes} from '@modules/routes/protected/protectedRoutes.jsx';


const RoutesConfig = (isAuthenticated) => {
    return [
        ...getPublicRoutes(isAuthenticated),
        ...getProtectedRoutes(),
        ...getFallbackRoute()
    ];
};

export default RoutesConfig;
