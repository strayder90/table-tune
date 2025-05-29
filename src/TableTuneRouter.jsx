import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useRoutes} from 'react-router-dom';

import RoutesConfig from '@modules/routes.jsx';
import {observeAuthState} from '@/redux/authentication/authActions.js';

const TableTuneRouter = () => {
    const dispatch = useDispatch();

    // Handles checking if user is logged in or out
    useEffect(() => {
        dispatch(observeAuthState());
    }, [dispatch]);

    const routes = RoutesConfig();
    return useRoutes(routes);
};

export default TableTuneRouter;