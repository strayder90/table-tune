import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup, ButtonOr} from 'semantic-ui-react';

import {prepareDataForSubmit} from '@modules/events/utils/helpers.js';
import {events} from '@/DB/events/events.js';
import BaseForm from '@modules/app/forms/BaseForm.jsx';

const EventForm = ({
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
            chunkMultiple={true}
        />
    );
};

EventForm.propTypes = {
    multiple: PropTypes.array,
    fields: PropTypes.array,
    formSchemaValidator: PropTypes.object,
    formName: PropTypes.string,
    buttonTextSave: PropTypes.string,
    buttonTextCancel: PropTypes.string,
    closeModal: PropTypes.func
};

export default EventForm;
