import PropTypes from 'prop-types';
import {useEffect} from 'react';
import {Navigate} from 'react-router-dom';
import {toast} from 'react-toastify';

const AuthGuard = ({isUserAuthenticated, children}) => {
    useEffect(() => {
        if (!isUserAuthenticated) {
            toast.info('You need to log in to continue.');
        }
    }, [isUserAuthenticated]);

    if (!isUserAuthenticated) return <Navigate to='/' />;

    return children;
};

AuthGuard.propTypes = {
    isUserAuthenticated: PropTypes.bool,
    children: PropTypes.node
};

export default AuthGuard;
