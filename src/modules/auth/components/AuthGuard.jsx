import PropTypes from 'prop-types';
import {Navigate, useLocation} from 'react-router-dom';

const AuthGuard = ({isUserAuthenticated, children}) => {
    const location = useLocation();

    if (!isUserAuthenticated) {
        return <Navigate to='/' replace state={{from: location}}/>;
    }

    return children;
};

AuthGuard.propTypes = {
    isUserAuthenticated: PropTypes.bool,
    children: PropTypes.node
};

export default AuthGuard;
