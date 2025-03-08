import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoutes} from 'react-router-dom';

import RoutesConfig from '@modules/routes.jsx';
import {checkAuth} from '@/redux/authentication/AuthSlice.js';

const TableTuneRouter = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector((state) => state.authSlice.is_authenticated);

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    const routes = RoutesConfig(isAuthenticated);
    return useRoutes(routes);
};

export default TableTuneRouter;