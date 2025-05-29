import React, {useState} from 'react';

import HeaderRenderer from '@appComponents/HeaderRenderer.jsx';
import CustomModal from '@appComponents/CustomModal.jsx';
import TeamIndexButtons from '@modules/team/components/TeamIndexButtons.jsx';
import TeamTable from '@modules/team/components/TeamTable.jsx';
import AddTeamForm from '@modules/team/forms/AddTeamForm.jsx';
import CommonFilters from '@appComponents/CommonFilters.jsx';

const TeamPage = () => {
    const [isVisible, setIsVisible] = useState(false);

    return (
        <>
            <HeaderRenderer
                className='--form-header-section'
                pageTitle={'Team'}
                buttons={TeamIndexButtons}
                buttonsProps={{addTeamMember: setIsVisible}}
                filters={CommonFilters}
            />

            <TeamTable/>

            {
                <CustomModal
                    className='--add-form__modal'
                    header='Add team'
                    content={<AddTeamForm onClose={() => setIsVisible(false)}/>}
                    isVisible={isVisible}
                    onClose={() => setIsVisible(false)}
                />
            }
        </>
    );
};

export default TeamPage;
