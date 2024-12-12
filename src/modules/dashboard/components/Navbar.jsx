import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';

export const Navbar = () => {
    return (
        <nav className='--navbar'>
            {/*<NavLink to='/tabletune/user-settings' className='nav-item'>*/}
            {/*    <Icon size='big' name='add square'/>*/}
            {/*</NavLink>*/}
            <NavLink to='/tabletune/user-settings' className='nav-item'>
                <Icon name='user'/>
                <span>John Doe</span>
            </NavLink>
            <NavLink to='/' className='nav-item'>
                <Icon size='big' name='log out'/>
            </NavLink>
        </nav>
    );
};
