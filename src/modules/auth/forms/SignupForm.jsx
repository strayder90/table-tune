import React from 'react';
import {Divider} from 'semantic-ui-react';

import {useCreateForm} from '@/utils/formHelpers.jsx';

import AuthLayout from '../layout/AuthLayout';
import AuthForm from './AuthForm';
import {SignupFormModel} from './SignupFormModel.jsx';

const SignupForm = () => {
    const Form = useCreateForm(AuthForm, SignupFormModel, {buttonText: 'Create account'});

    return (
        <AuthLayout>
            <Divider/>
            <Form/>
        </AuthLayout>
    );
};

export default SignupForm;
