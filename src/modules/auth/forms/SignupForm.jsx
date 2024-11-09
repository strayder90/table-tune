import {Header} from 'semantic-ui-react';

import AuthLayout from '../layout/AuthLayout';
import AuthorizationForm from '../forms/AuthorizationForm.jsx';

const SignupForm = () => {
    return (
        <AuthLayout>
            <Header as='h1' textAlign='center'>
                Create account
            </Header>
            <AuthorizationForm type='signup'/>
        </AuthLayout>
    );
};

export default SignupForm;
