import React from 'react';

import CustomNavigationMenu from '@modules/app/components/CustomNavigationMenu.jsx';

const MenuPage = () => {
    const menuItems = [
        {label: 'Analytics', path: '#'},
        {label: 'Users', path: '/table-tune/users'},
        {label: 'Settings', path: '/table-tune/user-settings'}
    ];

    return (
        <CustomNavigationMenu
            title='Menu'
            items={menuItems}
        />
    );
};

export default MenuPage;
