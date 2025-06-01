import React from 'react';
import {useSelector} from 'react-redux';

import {selectUser} from '@/redux/authentication/authSelectors.js';

const UserSettingsPage = () => {
    const user = useSelector(selectUser);

    return (
        <>
            <h1>{`Welcome ${user?.email} to the USER SETTINGS Page!`}</h1>
        </>
    );
};

export default UserSettingsPage;
