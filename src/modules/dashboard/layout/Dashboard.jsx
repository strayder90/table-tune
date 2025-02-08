import React from 'react';
import {Outlet} from 'react-router-dom';

import {AppSidebar} from '@modules/dashboard/components/AppSidebar.jsx';
import {BottomNav} from '@modules/dashboard/components/BottomNav.jsx';
import {Navbar} from '@modules/dashboard/components/Navbar.jsx';

const Dashboard = () => {
    return (
        <>
            <Navbar/>

            <div className='--dashboard-layout'>
                <div className='--appSidebar'>
                    <AppSidebar/>
                </div>
                <div className='main-content'>
                    <Outlet/>
                </div>
            </div>

            <BottomNav/>
        </>
    );
};

export default Dashboard;
