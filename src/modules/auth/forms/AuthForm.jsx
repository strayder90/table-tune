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
        if (formName === 'signup') {
            handleSignupFormSubmit(data, navigate, dispatch);
        } else if (formName === 'login') {
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
    fields: PropTypes.array,
    formSchemaValidator: PropTypes.object,
    formName: PropTypes.string,
    buttonText: PropTypes.string
};

export default AuthForm;
