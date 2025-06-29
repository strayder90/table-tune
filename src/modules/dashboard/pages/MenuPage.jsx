import React from 'react';

import CustomNavigationMenu from '@modules/app/components/CustomNavigationMenu.jsx';
import routesMap from '@modules/routesMap.js';

const MenuPage = () => {
    const menuItems = [
        {label: 'Analytics', path: '#'},
        {label: 'Users', path: routesMap.menu.users.path},
        {label: 'Settings', path: routesMap.userSettings.path}
    ];

    return (
        <CustomNavigationMenu
            title='Menu'
            items={menuItems}
        />
    );
};

export default MenuPage;
