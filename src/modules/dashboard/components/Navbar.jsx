import React from 'react';
import {NavLink, useNavigate} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';
import {useDispatch, useSelector} from 'react-redux';

import {handleLogout} from '@modules/auth/utils/helpers.js';
import {selectUser} from '@/redux/authentication/authSelectors.js';

export const Navbar = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const user = useSelector(selectUser);

    return (
        <nav className='--navbar'>
            <NavLink to='/table-tune/user-settings' className='nav-item'>
                <Icon name='user outline'/>
                <span>{user?.firstName}</span>
            </NavLink>
            <button onClick={() => handleLogout(navigate, dispatch)} className='nav-item'>
                <Icon name='log out'/>
                <span>Log out</span>
            </button>
        </nav>
    );
};
