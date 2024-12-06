import {signUpSchema} from '@/utils/formSchemas.jsx';

export const SignupFormModel = () => ({
    formName: 'SignupForm',
    formSchemaValidator: signUpSchema,
    fields: [
        {
            key: 'email',
            name: 'email',
            defaultValue: '',
            label: 'Email *',
            icon: 'mail',
            type: 'text',
            placeholder: 'Enter your email'
        },
        {
            key: 'username',
            name: 'username',
            defaultValue: '',
            label: 'Username *',
            icon: 'user',
            type: 'text',
            placeholder: 'Enter your username'
        },
        {
            key: 'password',
            name: 'password',
            defaultValue: '',
            label: 'Password *',
            icon: 'lock',
            type: 'password',
            placeholder: 'Enter your password'
        },
        {
            key: 'confirmPassword',
            name: 'confirmPassword',
            defaultValue: '',
            label: 'Confirm password *',
            icon: 'lock',
            type: 'password',
            placeholder: 'Confirm password'
        }
    ],
});
