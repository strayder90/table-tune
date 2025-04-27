import React from 'react';
import {Icon, Menu, Sidebar} from 'semantic-ui-react';
import {NavLink} from 'react-router-dom';
import PropTypes from 'prop-types';

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
                <NavLink end to='/table-tune/tables' className='nav-item'>
                    <Icon size='large' name='table'/>
                    <span>Tables</span>
                </NavLink>
                <NavLink to='/table-tune/events' className='nav-item'>
                    <Icon size='large' name='calendar alternate outline'/>
                    <span>Events</span>
                </NavLink>
                <NavLink to='/table-tune/reservations' className='nav-item'>
                    <Icon size='large' name='list alternate outline'/>
                    <span>Bookings</span>
                </NavLink>
                <NavLink to='/table-tune/crew' className='nav-item'>
                    <Icon size='large' name='users'/>
                    <span>Crew</span>
                </NavLink>
                <NavLink to='/table-tune/users' className='nav-item'>
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
