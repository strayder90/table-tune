import {SignupFormValidator} from '../utils/formValidators.js';

export const SignupFormModel = () => ({
    formName: 'authorizationSignupForm',
    fields: [
        {
            key: 'email',
            name: 'email',
            label: 'Email',
            placeholder: 'Enter your email',
            required: true,
            type: 'email'
        },
        {
            key: 'username',
            name: 'username',
            label: 'Username',
            placeholder: 'Enter your username',
            required: true
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
    validate: SignupFormValidator,
});
