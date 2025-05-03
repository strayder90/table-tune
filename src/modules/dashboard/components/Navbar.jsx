import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import LogoutIcon from '@mui/icons-material/Logout';

import {handleLogout} from '@modules/auth/utils/helpers.js';

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <nav className='--navbar'>
            <button
                className='nav-item'
                onClick={() => handleLogout(navigate, dispatch)}
            >
                <LogoutIcon/>
                <span>Log out</span>
            </button>
        </nav>
    );
};
