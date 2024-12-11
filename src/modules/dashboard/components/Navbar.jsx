import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';

export const Navbar = () => {
    return (
        <nav className='--navbar'>
            <NavLink to='/tabletune/user-settings' className='nav-item'>
                <Icon name='user'/>
                <span>Srdjan Dzonic</span>
            </NavLink>
            <NavLink to='/' className='nav-item'>
                <Icon size='big' name='log out'/>
            </NavLink>
        </nav>
    );
};
