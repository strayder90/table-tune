import './sass/style.css';
import 'semantic-ui-css/semantic.min.css';
import 'react-toastify/dist/ReactToastify.css';

import {ToastContainer} from 'react-toastify';
import {useDispatch, useSelector} from 'react-redux';
import {useEffect} from 'react';
import {Loader} from 'semantic-ui-react';

import {selectIsAuthenticationInProgress, selectIsUserAuthenticated} from '@/redux/authentication/authSelectors.js';
import {observeAuthState} from '@/redux/authentication/authActions.js';

import TableTuneRouter from './TableTuneRouter';

const App = () => {
    const dispatch = useDispatch();
    const isAuthenticationInProgress = useSelector(selectIsAuthenticationInProgress);
    const isUserAuthenticated = useSelector(selectIsUserAuthenticated);

    useEffect(() => {
        const unsubscribe = dispatch(observeAuthState(isUserAuthenticated));
        return () => unsubscribe && unsubscribe();
    }, [dispatch]);

    if (isAuthenticationInProgress) {
        return (
            <div className='--app_loader'>
                <Loader active inline='centered' size='large'>Loading...</Loader>
            </div>
        );
    }

    return (
        <>
            <TableTuneRouter/>
            <ToastContainer/>
        </>
    );
};

export default App;
