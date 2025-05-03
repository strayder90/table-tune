import React from 'react';
import PropTypes from 'prop-types';
import {Button, ButtonGroup, ButtonOr, Form, FormGroup} from 'semantic-ui-react';

import CustomInput from '@appComponents/CustomInput.jsx';
import {prepareDataForSubmit} from '@modules/events/utils/helpers.js';
import useDefaultForm from '@modules/app/hooks/useDefaultForm.jsx';
import {events} from '@/DB/events/events.js';
import {chunkArray} from '@utils/formHelpers.jsx';

const EventForm = ({
    multiple,
    fields,
    formSchemaValidator,
    formName,
    buttonTextSave,
    buttonTextCancel,
    closeModal
}) => {
    const {
        handleSubmit,
        control,
        errors
    } = useDefaultForm({
        formSchemaValidator,
        onSubmit: (data) => {
            if (formName === 'add') {
                const formData = prepareDataForSubmit(data);
                events.unshift(formData);
                closeModal();
            } else if (formName === 'edit') {
                console.log('in edit');
            }
        },
        multiple: multiple
    });

    return (
        <Form onSubmit={handleSubmit}>
            {multiple && chunkArray(multiple, 2).map((row, rowIndex) => (
                <FormGroup key={rowIndex}>
                    {row.map((field) => (
                        <CustomInput
                            key={field.key}
                            name={field.name}
                            control={control}
                            defaultValue={field.defaultValue}
                            label={field.label}
                            icon={field.icon}
                            type={field.type}
                            placeholder={field.placeholder}
                            errors={errors}
                        />
                    ))}
                </FormGroup>
            ))}

            {fields
                ?.filter((field) => !multiple || !multiple.some((mf) => mf.key === field.key))
                .map((field) => (
                    <CustomInput
                        key={field.key}
                        name={field.name}
                        control={control}
                        defaultValue={field.defaultValue}
                        label={field.label}
                        icon={field.icon}
                        type={field.type}
                        placeholder={field.placeholder}
                        hidden={field.hidden}
                        errors={errors}
                    />
                ))}
            <ButtonGroup className='--addEventForm__submitButtons' widths={2} floated='right'>
                <Button primary>{buttonTextSave}</Button>
                <ButtonOr/>
                <Button onClick={closeModal}>{buttonTextCancel}</Button>
            </ButtonGroup>
        </Form>
    );
};

EventForm.propTypes = {
    multiple: PropTypes.array,
    fields: PropTypes.array.isRequired,
    formSchemaValidator: PropTypes.object.isRequired,
    formName: PropTypes.string.isRequired,
    buttonTextSave: PropTypes.string.isRequired,
    buttonTextCancel: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired
};

export default EventForm;
