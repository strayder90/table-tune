import {LoginFormValidator} from '../utils/formValidators.js';

export const LoginFormModel = () => ({
    formName: 'authorizationLoginForm',
    fields: [
        {
            key: 'username',
            name: 'username',
            label: 'Username',
            placeholder: 'Enter your username',
            required: true,
            type: 'text'
        },
        {
            key: 'password',
            name: 'password',
            label: 'Password',
            placeholder: 'Enter your password',
            required: true,
            type: 'password'
        }
    ],
    validate: LoginFormValidator,
});
