import {useEffect, useState} from 'react';
import {useNavigate} from 'react-router-dom';
import PropTypes from 'prop-types';
import {useSelector} from 'react-redux';
import {Backdrop, LinearProgress, Typography, Box} from '@mui/material';
import {toast} from 'react-toastify';

const AuthGuard = ({children}) => {
    const navigate = useNavigate();
    const is_authenticated = useSelector((state) => state.authSlice.is_authenticated);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {

            if (is_authenticated) {
                setLoading(false);
            } else {
                navigate('/');
                toast.warn('Please log in to continue to this page.');
            }
        }, 5000);

        return () => clearTimeout(timeout);
    }, [is_authenticated, navigate]);

    if (loading) {
        return (
            <Backdrop open={true} invisible>
                <Box sx={{width: '35%'}}>
                    <Typography color='warning' variant='h4' align='center' gutterBottom>
                        Loading...
                    </Typography>
                    <LinearProgress color='warning'/>
                </Box>
            </Backdrop>
        );
    }

    return children;
};

AuthGuard.propTypes = {
    children: PropTypes.node
};

export default AuthGuard;
