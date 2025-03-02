import React from 'react';
import PropTypes from 'prop-types';
import {Button, Form, FormGroup} from 'semantic-ui-react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import CustomInput from '@appComponents/CustomInput.jsx';
import useDefaultForm from '@modules/app/hooks/useDefaultForm.jsx';

import {handleSignupFormSubmit, handleLoginFormSubmit} from '../utils/helpers.js';

const AuthForm = ({multiple, fields, formSchemaValidator, formName, buttonText}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const {
        handleSubmit,
        control,
        errors
    } = useDefaultForm({
        formSchemaValidator,
        onSubmit: (data) => {
            if (formName === 'SignupForm') {
                handleSignupFormSubmit(data, navigate);
            } else if (formName === 'LoginForm') {
                handleLoginFormSubmit(data, navigate, dispatch);
            }
        },
        multiple: multiple
    });

    return (
        <Form onSubmit={handleSubmit}>
            {multiple && (
                <FormGroup widths='equal'>
                    {multiple.map((field) => (
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
            )}
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
            <Button primary type='submit' fluid>
                {buttonText}
            </Button>
        </Form>
    );
};

AuthForm.propTypes = {
    multiple: PropTypes.array,
    fields: PropTypes.array.isRequired,
    formSchemaValidator: PropTypes.object.isRequired,
    formName: PropTypes.string.isRequired,
    buttonText: PropTypes.string.isRequired
};

export default AuthForm;
