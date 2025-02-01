import React from 'react';
import PropTypes from 'prop-types';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {Button, ButtonGroup, ButtonOr, Form} from 'semantic-ui-react';

import CustomInput from '@modules/auth/components/CustomInput.jsx';
import {prepareDataForSubmit} from '@utils/formHelpers.jsx';

import {events} from '../data/events.js';

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
        formState: {errors},
        control,
        reset
    } = useForm({
        resolver: zodResolver(formSchemaValidator)
    });

    const onSubmit = (data) => {
        if (formName === 'add') {
            const formData = prepareDataForSubmit(data);

            events.unshift(formData);
            closeModal();
        } else if (formName === 'edit') {
            console.log('in edit');
        }

        reset();
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {fields
                    .filter((field) => !multiple || !multiple.some((mf) => mf.key === field.key))
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
                            errors={errors}
                        />
                    ))}
                {/*<ButtonGroup widths={2} floated='right'>*/}
                {/*    <Button primary>{buttonTextSave}</Button>*/}
                {/*    <ButtonOr />*/}
                {/*    <Button onClick={closeModal}>{buttonTextCancel}</Button>*/}
                {/*</ButtonGroup>*/}
                <div className='--addEventForm__submitButtons'>
                    <Button size='large' primary>{buttonTextSave}</Button>
                    <Button size='large' onClick={closeModal}>{buttonTextCancel}</Button>
                </div>
            </Form>
        </>
    );
};

EventForm.propTypes = {
    multiple: PropTypes.array,
    fields: PropTypes.array.isRequired,
    formSchemaValidator: PropTypes.object.isRequired,
    formName: PropTypes.string.isRequired,
    buttonTextSave: PropTypes.string.isRequired,
    buttonTextCancel: PropTypes.string.isRequired,
    closeModal: PropTypes.func.isRequired,
};
export default EventForm;
