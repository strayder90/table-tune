import './sass/style.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

import {Provider} from 'react-redux';
import {ToastContainer} from 'react-toastify';

import store from '@/redux/store.js';

import TableTuneRouter from './TableTuneRouter';

const App = () => {
    return (
        <>
            <Provider store={store}>
                <TableTuneRouter/>
            </Provider>
            <ToastContainer/>
        </>
    );
};

export default App;