import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';

export const BottomNav = () => {
    return (
        <nav className='bottom-nav'>
            <NavLink to='/tabletune/reservations' className='nav-item'>
                <Icon name='list alternate outline'/>
                <span>Bookings</span>
            </NavLink>
            <NavLink to='/tabletune/events' className='nav-item'>
                <Icon name='calendar alternate outline'/>
                <span>Events</span>
            </NavLink>
            <NavLink to='/tabletune/tables' end className='nav-item'>
                <Icon name='table'/>
                <span>Tables</span>
            </NavLink>
            <NavLink to='/tabletune/crew' className='nav-item'>
                <Icon name='users'/>
                <span>Crew</span>
            </NavLink>
            <NavLink to='/tabletune/menu' className='nav-item'>
                <Icon name='bars'/>
                <span>Menu</span>
            </NavLink>
        </nav>
    );
};
