import {z} from 'zod';

// import {validateUsersSignupCredentials} from '@modules/auth/utils/helpers.js';
import {LoginFormValidators, SignupFormValidators} from '@modules/auth/utils/validators.js';
import {emailRegex} from '@utils/regexExpressions.js';

export const signUpSchema = z.object(SignupFormValidators).superRefine((data, ctx) => {
    const {firstName, lastName, email, password} = data;

    // TODO: fix this method
    // const validatedExistingUser = validateUsersSignupCredentials({email});

    // if (validatedExistingUser) {
    //     ctx.addIssue({
    //         path: [validatedExistingUser.path],
    //         message: validatedExistingUser.message
    //     });
    // }
    if (firstName && firstName.length < 3) {
        ctx.addIssue({
            path: ['firstName'],
            message: 'First name should be at least 3 character long'
        });
    }

    if (lastName && lastName.length < 3) {
        ctx.addIssue({
            path: ['lastName'],
            message: 'Last name should be at least 3 character long'
        });
    }

    if (!emailRegex(email)) {
        ctx.addIssue({
            path: ['email'],
            message: 'Please enter a valid email format (e.g., user@example.com)'
        });
    }

    if (password && password.length < 6) {
        ctx.addIssue({
            path: ['password'],
            message: 'Password should be at least 6 character long'
        });
    }
});

export const logInSchema = z.object(LoginFormValidators).superRefine((data, ctx) => {
    const {email, password} = data;

    if (!emailRegex(email)) {
        ctx.addIssue({
            path: ['email'],
            message: 'Please enter a valid email format (e.g., user@example.com)'
        });
    }

    if (password && password.length < 6) {
        ctx.addIssue({
            path: ['password'],
            message: 'Password should have at least 6 character long'
        });
    }
});