import React, {useState} from 'react';
import {Outlet} from 'react-router-dom';
import {Button, Segment, SidebarPusher} from 'semantic-ui-react';

import {AppSidebar} from '@modules/dashboard/components/AppSidebar.jsx';
import {handleShowSidebar} from '@modules/dashboard/utils/helpers.js';
import {BottomNav} from '@modules/dashboard/components/BottomNav.jsx';

const Dashboard = () => {
    const [visible, setVisible] = useState(false);

    return (
        <>
            <div>
                <AppSidebar visible={visible} setVisible={setVisible}/>

                <SidebarPusher dimmed={visible}>
                    <Segment basic>
                        <Outlet/>

                        <BottomNav />
                    </Segment>
                </SidebarPusher>
            </div>
            <Button onClick={() => handleShowSidebar(visible, setVisible)}>
                Menu
            </Button>
        </>
    );
};

export default Dashboard;
