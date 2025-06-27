import {logInSchema} from '@modules/auth/utils/formSchemas.jsx';

export const LoginFormModel = () => ({
    formName: 'login',
    formSchemaValidator: logInSchema,
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
            placeholder: 'Password',
            maxLength: 7,
        },
    ],
});
