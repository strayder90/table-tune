import {useRoutes} from 'react-router-dom';
import {useSelector} from 'react-redux';

import RoutesConfig from '@modules/routes.jsx';
import {selectIsUserAuthenticated} from '@/redux/authentication/authSelectors.js';

const TableTuneRouter = () => {
    const isUserAuthenticated = useSelector(selectIsUserAuthenticated);

    const routes = RoutesConfig(isUserAuthenticated);

    return useRoutes(routes);
};

export default TableTuneRouter;