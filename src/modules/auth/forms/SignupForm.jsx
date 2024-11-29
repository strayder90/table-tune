import {Header} from 'semantic-ui-react';

import AuthLayout from '../layout/AuthLayout';
import AuthForm from './AuthForm';
import {useCreateForm} from '../../../utils/formHelpers.jsx';
import {SignupFormModel} from './SignupFormModel.jsx';

const SignupForm = () => {
    const Form = useCreateForm(AuthForm, SignupFormModel, {buttonText: 'Create account'});

    return (
        <AuthLayout>
            <Header as='h1' textAlign='center'>
                Create a new account
            </Header>
            <p style={{textAlign: 'center', marginBottom: 0}}>It’s quick and easy.</p>
            <Form/>
        </AuthLayout>
    );
};

export default SignupForm;
