import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {Dimmer, Loader} from 'semantic-ui-react';

const AuthGuard = ({children}) => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            const isAuthenticated = localStorage.getItem('isAuthenticated') === 'true';

            if (!isAuthenticated) {
                navigate('/');
            } else {
                setLoading(false);
            }
        }, 3000);

        return () => clearTimeout(timeout);
    }, [navigate]);

    if (loading) {
        return (
            <Dimmer active inverted>
                <Loader size='huge'>Loading</Loader>
            </Dimmer>
        );
    }

    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
