import {logInSchema} from '@/utils/formSchemas.jsx';

export const LoginFormModel = () => ({
    formName: 'LoginForm',
    formSchemaValidator: logInSchema,
    fields: [
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
    ],
});
