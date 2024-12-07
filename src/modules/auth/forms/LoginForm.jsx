import React from 'react';
import {Button, Divider, Header} from 'semantic-ui-react';
import {Link, useNavigate} from 'react-router-dom';

import {useCreateForm} from '@/utils/formHelpers.jsx';

import AuthLayout from '../layout/AuthLayout';
import AuthForm from './AuthForm';
import {LoginFormModel} from './LoginFormModel.jsx';

const LoginForm = () => {
    const navigate = useNavigate();
    const Form = useCreateForm(AuthForm, LoginFormModel, {buttonText: 'Log in'});

    const handleRedirect = () => {
        navigate('/signup');
    };

    return (
        <AuthLayout>
            <Header as='h1' textAlign='center'>
                Use your account to log in
            </Header>
            <Form/>
            <div className='--custom-align-center'>
                <Link to='#'>Forgot password?</Link>
            </div>
            <Divider horizontal>Or</Divider>
            <div className='--custom-align-center'>
                <Button className='--custom-button-submit' onClick={handleRedirect} positive>Create new account</Button>
            </div>
        </AuthLayout>
    );
};

export default LoginForm;
