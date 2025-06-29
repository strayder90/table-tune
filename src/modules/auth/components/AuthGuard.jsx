import PropTypes from 'prop-types';
import {Navigate, useLocation} from 'react-router-dom';
import {Loader} from 'semantic-ui-react';

const AuthGuard = ({isUserAuthenticated, children}) => {
    const location = useLocation();

    if (isUserAuthenticated === null) {
        return (
            <div className='--app_loader'>
                <Loader active inline='centered' size='large'>Checking authentication...</Loader>
            </div>
        );
    }

    if (!isUserAuthenticated) {
        return <Navigate to='/' replace state={{from: location}} />;
    }

    return children;
};

AuthGuard.propTypes = {
    isUserAuthenticated: PropTypes.bool,
    children: PropTypes.node
};

export default AuthGuard;
