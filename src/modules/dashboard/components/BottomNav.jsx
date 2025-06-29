import React from 'react';
import {NavLink} from 'react-router-dom';
import {Icon} from 'semantic-ui-react';

import routesMap from '@modules/routesMap.js';

export const BottomNav = () => {
    return (
        <nav className='bottom-nav'>
            <NavLink to={routesMap.reservations.path} className='nav-item'>
                <Icon name='list alternate outline'/>
                <span>Bookings</span>
            </NavLink>
            <NavLink to={routesMap.events.path} className='nav-item'>
                <Icon name='calendar alternate outline'/>
                <span>Events</span>
            </NavLink>
            <NavLink to={routesMap.tables.path} end className='nav-item'>
                <Icon name='table'/>
                <span>Tables</span>
            </NavLink>
            <NavLink to={routesMap.team.path} className='nav-item'>
                <Icon name='users'/>
                <span>Team</span>
            </NavLink>
            <NavLink to={routesMap.menu.path} className='nav-item'>
                <Icon name='bars'/>
                <span>Menu</span>
            </NavLink>
        </nav>
    );
};
