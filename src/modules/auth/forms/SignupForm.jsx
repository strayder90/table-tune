import React from 'react';
import {Divider, Header} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

import {useCreateForm} from '@/utils/formHelpers.jsx';

import AuthLayout from '../layout/AuthLayout';
import AuthForm from './AuthForm';
import {SignupFormModel} from './SignupFormModel.jsx';


const SignupForm = () => {
    const Form = useCreateForm(AuthForm, SignupFormModel, {buttonText: 'Create account'});

    return (
        <AuthLayout>
            <Header as='h1' textAlign='center'>
                Create a new account
            </Header>
            <p className='--custom-margin-align-center'>It’s quick and easy.</p>
            <Divider/>
            <Form/>
            <Divider horizontal>Or</Divider>
            <div className='--custom-margin-align-center'>
                <Link to='/'>Already have an account?</Link>
            </div>
        </AuthLayout>
    );
};

export default SignupForm;
