// UserForm.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup, ButtonOr} from 'semantic-ui-react';

import {prepareDataForSubmit} from '@modules/events/utils/helpers.js';
import {events} from '@/DB/events/events.js';
import BaseForm from '@modules/app/forms/BaseForm.jsx';

const UserForm = ({
    multiple,
    fields,
    formSchemaValidator,
    formName,
    buttonTextSave,
    buttonTextCancel,
    closeModal
}) => {
    const onSubmit = (data) => {
        if (formName === 'add') {
            const formData = prepareDataForSubmit(data);
            events.unshift(formData);
            closeModal();
        } else if (formName === 'edit') {
            console.log('in edit');
        }
    };

    return (
        <BaseForm
            multiple={multiple}
            fields={fields}
            formSchemaValidator={formSchemaValidator}
            onSubmit={onSubmit}
            renderButtons={() => (
                <ButtonGroup className='--addEventForm__submitButtons' widths={2} floated='right'>
                    <Button primary>{buttonTextSave}</Button>
                    <ButtonOr />
                    <Button onClick={closeModal}>{buttonTextCancel}</Button>
                </ButtonGroup>
            )}
        />
    );
};

UserForm.propTypes = {
    multiple: PropTypes.array,
    fields: PropTypes.array.isRequired,
    formSchemaValidator: PropTypes.object.isRequired,
    formName: PropTypes.string.isRequired,
    buttonTextSave: PropTypes.string.isRequired,
    buttonTextCancel: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default UserForm;
