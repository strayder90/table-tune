import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';
import {useDispatch} from 'react-redux';

import {handleLogout} from '@modules/auth/utils/helpers.js';

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    return (
        <nav className='--navbar'>
            <NavLink to='/table-tune/user-settings' className='nav-item'>
                <Icon name='user outline'/>
                <span>John Doe</span>
            </NavLink>
            <button onClick={() => handleLogout(navigate, dispatch)} className='nav-item'>
                <Icon name='log out'/>
                <span>Log out</span>
            </button>
        </nav>
    );
};
