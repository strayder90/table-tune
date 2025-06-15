import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoutes} from 'react-router-dom';

import RoutesConfig from '@modules/routes.jsx';
import {observeAuthState} from '@/redux/authentication/authActions.js';
import {selectIsAuthenticated} from '@/redux/authentication/authSelectors.js';

const TableTuneRouter = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);

    // Handles checking if user is logged in or out
    useEffect(() => {
        dispatch(observeAuthState());
    }, [isAuthenticated]);

    const routes = RoutesConfig(isAuthenticated);

    return useRoutes(routes);
};

export default TableTuneRouter;