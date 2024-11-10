import {Header} from 'semantic-ui-react';

import AuthLayout from '../layout/AuthLayout';
import AuthForm from './AuthForm';
import {useCreateForm} from '../../../utils/formHelpers.jsx';
import {LoginFormModel} from './LoginFormModel.jsx';

const LoginForm = () => {
    const Form = useCreateForm(
        AuthForm,
        LoginFormModel,
        {buttonText: 'Log in'}
    );

    return (
        <AuthLayout>
            <Header as='h1' textAlign='center'>
                Log In
            </Header>
            <Form buttonText='Log In'/>
        </AuthLayout>
    );
};

export default LoginForm;
