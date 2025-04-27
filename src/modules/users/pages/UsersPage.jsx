import React, {useState} from 'react';
import {useSelector} from 'react-redux';

import {selectUser} from '@/redux/authentication/authSelectors.js';
import HeaderRenderer from '@appComponents/HeaderRenderer.jsx';
import EventFilters from '@modules/events/components/EventFilters.jsx';
import UsersIndexButtons from '@modules/users/components/UsersIndexButtons.jsx';
import CustomModal from '@appComponents/CustomModal.jsx';
import AddUserForm from '@modules/users/forms/AddUserForm.jsx';
import UsersTable from '@modules/users/components/UsersTable.jsx';

const UsersPage = () => {
    const user = useSelector(selectUser);
    const [isVisible, setIsVisible] = useState(false);

    const users = [
        {
            name: 'Srdjan',
            email: 'test@test.com',
            role: 'super admin',
            status: 'active',
            action: 'All',
        },
        {
            name: 'Nevena',
            email: 'test2@test.com',
            role: 'admin',
            status: 'inactive',
            action: 'Edit, View, Delete',
        }
    ];

    return (
        <>
            <HeaderRenderer
                className='--event-form-section'
                pageTitle={'List of users'}
                buttons={UsersIndexButtons}
                buttonsProps={{addNewUser: setIsVisible}}
                filters={EventFilters}
            />

            <UsersTable users={users} />

            {
                <CustomModal
                    className='--addEventForm__modal'
                    header='Add new User'
                    content={<AddUserForm onClose={() => setIsVisible(false)}/>}
                    isVisible={isVisible}
                    onClose={() => setIsVisible(false)}
                />
            }
        </>
    );
};

export default UsersPage;
