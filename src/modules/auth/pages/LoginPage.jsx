import {Header} from 'semantic-ui-react';

import AuthLayout from '../layout/AuthLayout';
import AuthorizationForm from '../forms/AuthorizationForm.jsx';

const LoginPage = () => {
    return (
        <AuthLayout>
            <Header as='h1' textAlign='center'>
                Log In
            </Header>
            <AuthorizationForm/>
        </AuthLayout>
    );
};

export default LoginPage;
