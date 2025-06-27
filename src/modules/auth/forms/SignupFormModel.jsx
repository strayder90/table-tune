import {signUpSchema} from '@modules/auth/utils/formSchemas.jsx';

export const SignupFormModel = () => ({
    formName: 'signup',
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
        },
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
            key: 'password',
            name: 'password',
            defaultValue: '',
            icon: 'lock',
            type: 'password',
            placeholder: 'Password'
        }
    ],
});
