import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Loader} from 'semantic-ui-react';

import {selectIsAuthenticated} from '@/redux/authentication/authSelectors.js';

const AuthGuard = ({children}) => {
    const navigate = useNavigate();
    const isAuthenticated = useSelector(selectIsAuthenticated);

    // TODO: A bug here, whe try to access from url, i get infinite loader.
    if (!isAuthenticated) {
        navigate('/');

        return (
            <div className='--app_loader'>
                <Loader active inline='centered' size='large'>Loading...</Loader>
            </div>
        );
    }

    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
