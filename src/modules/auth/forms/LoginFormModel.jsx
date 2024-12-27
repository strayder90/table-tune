import {logInSchema} from '@modules/auth/utils/formSchemas.jsx';

export const LoginFormModel = () => ({
    formName: 'LoginForm',
    formSchemaValidator: logInSchema,
    fields: [
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
    ],
});
