import {signUpSchema} from '@/utils/formSchemas.jsx';

export const SignupFormModel = () => ({
    formName: 'SignupForm',
    formSchemaValidator: signUpSchema,
    multiple: [
        {
            key: 'firstName',
            name: 'firstName',
            defaultValue: '',
            type: 'text',
            placeholder: 'First name'
        },
        {
            key: 'lastName',
            name: 'lastName',
            defaultValue: '',
            type: 'text',
            placeholder: 'Last name'
        }
    ],
    fields: [
        {
            key: 'email',
            name: 'email',
            defaultValue: '',
            icon: 'mail',
            type: 'text',
            placeholder: 'Email'
        },
        {
            key: 'username',
            name: 'username',
            defaultValue: '',
            icon: 'user',
            type: 'text',
            placeholder: 'Username'
        },
        {
            key: 'password',
            name: 'password',
            defaultValue: '',
            icon: 'lock',
            type: 'password',
            placeholder: 'Password'
        },
        {
            key: 'confirmPassword',
            name: 'confirmPassword',
            defaultValue: '',
            icon: 'lock',
            type: 'password',
            placeholder: 'Confirm password'
        }
    ],
});
