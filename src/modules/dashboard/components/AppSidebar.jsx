import React from 'react';
import {Icon, Menu, Sidebar} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

import routesMap from '@modules/routesMap.js';

export const AppSidebar = () => {
    return (
        <>
            <Sidebar
                className='--appSidebar'
                as={Menu}
                inverted
                vertical
                visible
                width='very thin'
            >
                <h2>TT</h2>
                <NavLink end to={routesMap.tables.path} className='nav-item'>
                    <Icon size='large' name='table'/>
                    <span>Tables</span>
                </NavLink>
                <NavLink to={routesMap.events.path} className='nav-item'>
                    <Icon size='large' name='calendar alternate outline'/>
                    <span>Events</span>
                </NavLink>
                <NavLink to={routesMap.reservations.path} className='nav-item'>
                    <Icon size='large' name='list alternate outline'/>
                    <span>Bookings</span>
                </NavLink>
                <NavLink to={routesMap.team.path} className='nav-item'>
                    <Icon size='large' name='users'/>
                    <span>Team</span>
                </NavLink>
                <NavLink to={routesMap.menu.users.path} className='nav-item'>
                    <Icon size='large' name='user plus'/>
                    <span>Users</span>
                </NavLink>
            </Sidebar>
        </>
    );
};

AppSidebar.propTypes = {
    visible: PropTypes.bool, setVisible: PropTypes.func
};
