import React from 'react';
import {Button} from '@mui/material';
import {useDispatch} from 'react-redux';
import {useNavigate} from 'react-router-dom';

import {logout} from '@/redux/authentication/authActions.js';

const MenuPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logout());

        navigate('/');
    };

    return (
        <div>
            <h1>Welcome to the MENU Page!</h1>
            <Button
                variant='contained'
                color='primary'
                onClick={handleLogout}
            >
                Log out
            </Button>
        </div>
    );
};

export default MenuPage;
