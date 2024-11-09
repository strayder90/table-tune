import './sass/style.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';
import {ToastContainer} from 'react-toastify';

import TableTuneRouter from './TableTuneRouter';

const App = () => {
    return (
        <>
            <TableTuneRouter/>
            <ToastContainer />
        </>
    );
};

export default App;