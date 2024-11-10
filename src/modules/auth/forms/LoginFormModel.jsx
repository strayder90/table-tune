import {LoginFormValidator} from '../utils/validators.js';

export const LoginFormModel = () => ({
    formName: 'authorizationLoginForm',
    fields: [
        {
            key: 'username',
            name: 'username',
            type: 'text',
            label: 'Username *',
            placeholder: 'Enter your username',
            icon: 'user',
            defaultValue: ''
        },
        {
            key: 'password',
            name: 'password',
            type: 'password',
            label: 'Password *',
            placeholder: 'Enter your password',
            icon: 'lock',
            defaultValue: ''
        }
    ],
    validate: LoginFormValidator,
});
