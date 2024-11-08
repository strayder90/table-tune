import {Header} from 'semantic-ui-react';

import AuthLayout from '../layout/AuthLayout';
import AuthorizationForm from '../forms/AuthorizationForm.jsx';

const LoginForm = () => {
    return (
        <AuthLayout>
            <Header as='h1' textAlign='center'>
                Log In
            </Header>
            <AuthorizationForm type='login'/>
        </AuthLayout>
    );
};

export default LoginForm;
