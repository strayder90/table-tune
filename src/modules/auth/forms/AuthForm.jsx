import React from 'react';
import PropTypes from 'prop-types';
import {Button} from 'semantic-ui-react';

import BaseForm from '@modules/app/forms/BaseForm.jsx';
import useFormSubmit from '@modules/app/hooks/useFormSubmit.jsx';
import {registerUser, loginUser} from '@/redux/authentication/authActions.js';

const AuthForm = ({multiple, fields, formSchemaValidator, formName, buttonText}) => {
    const onSubmit = useFormSubmit({
        action: formName === 'signup' ? registerUser : loginUser,
        navigateTo: formName === 'signup' ? '/' : '/table-tune/tables',
    });

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
