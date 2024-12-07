import {Header} from 'semantic-ui-react';

import {useCreateForm} from '@/utils/formHelpers.jsx';

import AuthLayout from '../layout/AuthLayout';
import AuthForm from './AuthForm';
import {LoginFormModel} from './LoginFormModel.jsx';


const LoginForm = () => {
    const Form = useCreateForm(AuthForm, LoginFormModel, {buttonText: 'Log in'});

    return (
        <AuthLayout>
            <Header as='h1' textAlign='center'>
                Use your account to log in
            </Header>
            <Form/>
        </AuthLayout>
    );
};

export default LoginForm;
