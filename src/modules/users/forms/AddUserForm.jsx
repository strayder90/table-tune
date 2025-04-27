import PropTypes from 'prop-types';

import {useCreateForm} from '@utils/formHelpers.jsx';
import UserForm from '@modules/users/forms/UserForm.jsx';
import {AddUserModel} from '@modules/users/forms/AddUserModel.jsx';

const AddUserForm = ({onClose}) => {
    const Form = useCreateForm(UserForm, AddUserModel, {buttonTextSave: 'Add', buttonTextCancel: 'Close', closeModal: onClose});

    return (
        <>
            <Form/>
        </>
    );
};

AddUserForm.propTypes = {
    onClose: PropTypes.func.isRequired,
};
export default AddUserForm;