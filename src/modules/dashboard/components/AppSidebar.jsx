import React from 'react';
import {Icon, Menu, Sidebar} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {handleShowSidebar} from '@modules/dashboard/utils/helpers.js';

export const AppSidebar = ({visible, setVisible}) => {
    return (
        <>
            <Sidebar
                className='--appSidebar'
                as={Menu}
                animation='overlay'
                icon='labeled'
                inverted
                onHide={() => {setVisible(false);}}
                vertical
                visible={visible}
                width='thin'
            >
                <Menu.Item className='logo-item' onClick={() => setVisible(false)}>
                    <h2>TableTune</h2>
                </Menu.Item>
                <Menu.Item as={Link} onClick={() => handleShowSidebar(visible, setVisible)} to='/tabletune'>
                    <Icon name='table'/>
                    <span>Table</span>
                </Menu.Item>
                <Menu.Item as={Link} onClick={() => handleShowSidebar(visible, setVisible)} to='/tabletune/events'>
                    <Icon name='calendar alternate outline'/>
                    <span>Events</span>
                </Menu.Item>
                <Menu.Item as={Link} onClick={() => handleShowSidebar(visible, setVisible)}
                           to='/tabletune/reservations'>
                    <Icon name='list alternate outline'/>
                    <span>Reservations</span>
                </Menu.Item>
                <Menu.Item as={Link} onClick={() => handleShowSidebar(visible, setVisible)} to='/tabletune/crew'>
                    <Icon name='users'/>
                    <span>Crew</span>
                </Menu.Item>
            </Sidebar>
        </>
    );
};

AppSidebar.propTypes = {
    visible: PropTypes.bool,
    setVisible: PropTypes.func
};
