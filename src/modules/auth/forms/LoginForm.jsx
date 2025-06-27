import React from 'react';

import {useCreateForm} from '@/utils/formHelpers.jsx';

import AuthLayout from '../layout/AuthLayout';
import AuthForm from './AuthForm';
import {LoginFormModel} from './LoginFormModel.jsx';

const LoginForm = () => {
    const Form = useCreateForm(AuthForm, LoginFormModel, {buttonText: 'Log in'});

    return (
        <AuthLayout mode='login'>
            <Form/>
        </AuthLayout>
    );
};

export default LoginForm;
