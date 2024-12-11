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
                animation='overlay'
                icon='labeled'
                inverted
                vertical
                visible
                width='thin'
            >
                <NavLink to='#'>
                    <h2>TT</h2>
                </NavLink>
                <NavLink end to='/tabletune' className='nav-item'>
                    <Icon size='large' name='table'/>
                    <span>Tables</span>
                </NavLink>
                <NavLink to='/tabletune/events' className='nav-item'>
                    <Icon size='large' name='calendar alternate outline'/>
                    <span>Events</span>
                </NavLink>
                <NavLink to='/tabletune/reservations' className='nav-item'>
                    <Icon size='large' name='list alternate outline'/>
                    <span>List</span>
                </NavLink>
                <NavLink to='/tabletune/crew' className='nav-item'>
                    <Icon size='large' name='users'/>
                    <span>Crew</span>
                </NavLink>
            </Sidebar>
        </>
    );
};

AppSidebar.propTypes = {
    visible: PropTypes.bool, setVisible: PropTypes.func
};
