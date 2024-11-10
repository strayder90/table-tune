import {SignupFormValidator} from '../utils/validators.js';

export const SignupFormModel = () => ({
    formName: 'authorizationSignupForm',
    fields: [
        {
            key: 'email',
            name: 'email',
            type: 'email',
            label: 'Email *',
            placeholder: 'Enter your email',
            icon: 'mail',
            defaultValue: ''
        },
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
    validate: SignupFormValidator,
});
