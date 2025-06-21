import {getPublicRoutes} from '@modules/routes/public/publicRoutes.jsx';
import {getFallbackRoute} from '@modules/routes/fallbackRoute.jsx';
import {getProtectedRoutes} from '@modules/routes/protected/protectedRoutes.jsx';

const RoutesConfig = (isUserAuthenticated) => {
    return [
        ...getPublicRoutes(isUserAuthenticated),
        ...getProtectedRoutes(isUserAuthenticated),
        ...getFallbackRoute(),
    ];
};

export default RoutesConfig;
