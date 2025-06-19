import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Navigate} from 'react-router-dom';

import {selectIsUserAuthenticated} from '@/redux/authentication/authSelectors';

const AuthGuard = ({children}) => {
    const isUserAuthenticated = useSelector(selectIsUserAuthenticated);

    if (!isUserAuthenticated) {
        return <Navigate to='/' replace/>;
    }

    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
