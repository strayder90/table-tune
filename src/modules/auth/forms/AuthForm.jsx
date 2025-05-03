// AuthForm.jsx
import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import BaseForm from '@modules/app/forms/BaseForm.jsx';

import {handleSignupFormSubmit, handleLoginFormSubmit} from '../utils/helpers.js';

const AuthForm = ({multiple, fields, formSchemaValidator, formName, buttonText}) => {
    const navigate = useNavigate();
    const dispatch = useDispatch();

    const onSubmit = (data) => {
        if (formName === 'SignupForm') {
            handleSignupFormSubmit(data, navigate, dispatch);
        } else if (formName === 'LoginForm') {
            handleLoginFormSubmit(data, navigate, dispatch);
        }
    };

    return (
        <BaseForm
            multiple={multiple}
            fields={fields}
            formSchemaValidator={formSchemaValidator}
            onSubmit={onSubmit}
            renderButtons={() => (
                <Button primary type='submit' fluid>
                    {buttonText}
                </Button>
            )}
        />
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
