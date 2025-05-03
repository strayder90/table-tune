import PropTypes from 'prop-types';

import {useCreateForm} from '@utils/formHelpers.jsx';
import EventForm from '@modules/events/forms/EventForm.jsx';
import {AddEventModel} from '@modules/events/forms/AddEventModel.jsx';

const AddEventForm = ({onClose}) => {
    const Form = useCreateForm(EventForm, AddEventModel, {buttonTextSave: 'Save', buttonTextCancel: 'Close', closeModal: onClose});

    return (
        <>
            <Form/>
        </>
    );
};

AddEventForm.propTypes = {
    onClose: PropTypes.func,
};
export default AddEventForm;