import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';

export const BottomNav = () => {
    return (
        <nav className='bottom-nav'>
            <NavLink to='/table-tune/reservations' className='nav-item'>
                <Icon name='list alternate outline'/>
                <span>Bookings</span>
            </NavLink>
            <NavLink to='/table-tune/events' className='nav-item'>
                <Icon name='calendar alternate outline'/>
                <span>Events</span>
            </NavLink>
            <NavLink to='/table-tune/tables' end className='nav-item'>
                <Icon name='table'/>
                <span>Tables</span>
            </NavLink>
            <NavLink to='/table-tune/team' className='nav-item'>
                <Icon name='users'/>
                <span>Team</span>
            </NavLink>
            <NavLink to='/table-tune/menu' className='nav-item'>
                <Icon name='bars'/>
                <span>Menu</span>
            </NavLink>
        </nav>
    );
};
