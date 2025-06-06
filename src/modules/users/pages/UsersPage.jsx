import React, {useState} from 'react';

import HeaderRenderer from '@appComponents/HeaderRenderer.jsx';
import UsersIndexButtons from '@modules/users/components/UsersIndexButtons.jsx';
import CustomModal from '@appComponents/CustomModal.jsx';
import AddUserForm from '@modules/users/forms/AddUserForm.jsx';
import UsersTable from '@modules/users/components/UsersTable.jsx';
import CommonFilters from '@appComponents/CommonFilters.jsx';

const UsersPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <HeaderRenderer
                className='--form-header-section'
                pageTitle={'Users'}
                buttons={UsersIndexButtons}
                buttonsProps={{addNewUser: setIsVisible}}
                filters={CommonFilters}
            />

            <UsersTable/>

            {
                <CustomModal
                    className='--add-form__modal'
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
