import PropTypes from 'prop-types';
import {Navigate} from 'react-router-dom';

const AuthGuard = ({isUserAuthenticated, children}) => {
    if (!isUserAuthenticated) return <Navigate to='/' />;

    return children;
};

AuthGuard.propTypes = {
    isUserAuthenticated: PropTypes.bool,
    children: PropTypes.node
};

export default AuthGuard;
