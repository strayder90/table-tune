import './sass/style.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

import {useEffect} from 'react';
import {ToastContainer} from 'react-toastify';
import {Loader} from 'semantic-ui-react';
import {useDispatch, useSelector} from 'react-redux';

import {observeAuthState} from '@/redux/authentication/authActions.js';
import {selectIsAuthLoading} from '@/redux/authentication/authSelectors.js';

import TableTuneRouter from './TableTuneRouter';

const App = () => {
    const dispatch = useDispatch();
    const isAuthLoading = useSelector(selectIsAuthLoading);

    useEffect(() => {
        dispatch(observeAuthState());
    }, [isAuthLoading]);

    if (isAuthLoading) {
        return (
            <div className='--app_loader'>
                <Loader active inline='centered' size='large'>Loading...</Loader>
            </div>
        );
    }

    return (
        <>
            <TableTuneRouter />
            <ToastContainer />
        </>
    );
};

export default App;
