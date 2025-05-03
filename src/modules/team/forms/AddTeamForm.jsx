import PropTypes from 'prop-types';

import {useCreateForm} from '@utils/formHelpers.jsx';
import TeamForm from '@modules/team/forms/TeamForm.jsx';
import {AddTeamModel} from '@modules/team/forms/AddTeamModel.jsx';

const AddTeamForm = ({onClose}) => {
    const Form = useCreateForm(TeamForm, AddTeamModel, {buttonTextSave: 'Add', buttonTextCancel: 'Close', closeModal: onClose});

    return (
        <>
            <Form/>
        </>
    );
};

AddTeamForm.propTypes = {
    onClose: PropTypes.func,
};
export default AddTeamForm;