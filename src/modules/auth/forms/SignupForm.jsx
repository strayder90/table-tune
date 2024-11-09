import {Header} from 'semantic-ui-react';

import AuthLayout from '../layout/AuthLayout';
import AuthForm from './AuthForm';
import {useCreateForm} from '../../../utils/formHelpers.jsx';
import {SignupFormModel} from './SignupFormModel.jsx';
import {handleChange, handleSubmit} from '../utils/helpers.js';

const SignupForm = () => {
    const Form = useCreateForm(
        AuthForm,
        SignupFormModel,
        handleChange,
        handleSubmit,
        {buttonText: 'Create account'}
    );

    return (
        <AuthLayout>
            <Header as='h1' textAlign='center'>
                Create account
            </Header>
            <Form buttonText='Create account'/>
        </AuthLayout>
    );
};

export default SignupForm;
