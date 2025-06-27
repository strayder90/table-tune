import React from 'react';

import {useCreateForm} from '@/utils/formHelpers.jsx';

import AuthLayout from '../layout/AuthLayout';
import AuthForm from './AuthForm';
import {SignupFormModel} from './SignupFormModel.jsx';

const SignupForm = () => {
    const Form = useCreateForm(AuthForm, SignupFormModel, {buttonText: 'Create account'});

    return (
        <AuthLayout  mode='signup'>
            <Form/>
        </AuthLayout>
    );
};

export default SignupForm;
