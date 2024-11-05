import {useRoutes} from 'react-router-dom';

import routes from './routes.jsx';

const TableTuneRouter = () => {
    return useRoutes(routes);
};

export default TableTuneRouter;