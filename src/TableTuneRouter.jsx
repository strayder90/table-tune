import {useEffect} from 'react';
import {useDispatch} from 'react-redux';
import {useRoutes} from 'react-router-dom';

import RoutesConfig from '@modules/routes.jsx';
import {checkAuth} from '@/redux/authentication/authActions.js';

const TableTuneRouter = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    const routes = RoutesConfig();
    return useRoutes(routes);
};

export default TableTuneRouter;