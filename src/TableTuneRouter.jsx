import {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useRoutes} from 'react-router-dom';

import RoutesConfig from '@modules/routes.jsx';
import {checkAuth} from '@/redux/authentication/AuthSlice.js';
import {selectIsAuthenticated} from "@/redux/authentication/authSelectors.js";

const TableTuneRouter = () => {
    const dispatch = useDispatch();
    const isAuthenticated = useSelector(selectIsAuthenticated);

    useEffect(() => {
        dispatch(checkAuth());
    }, [dispatch]);

    const routes = RoutesConfig(isAuthenticated);
    return useRoutes(routes);
};

export default TableTuneRouter;