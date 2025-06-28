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
            message: 'Min 3 characters'
        });
    }

    if (lastName && lastName.length < 3) {
        ctx.addIssue({
            path: ['lastName'],
            message: 'Min 3 characters'
        });
    }

    if (!emailRegex(email)) {
        ctx.addIssue({
            path: ['email'],
            message: 'Invalid email format (e.g., user@example.com)'
        });
    }

    if (password && password.length < 6) {
        ctx.addIssue({
            path: ['password'],
            message: 'Min 6 characters'
        });
    }
});

export const logInSchema = z.object(LoginFormValidators).superRefine((data, ctx) => {
    const {email, password} = data;

    if (!emailRegex(email)) {
        ctx.addIssue({
            path: ['email'],
            message: 'Invalid email format (e.g., user@example.com)'
        });
    }

    if (password && password.length < 6) {
        ctx.addIssue({
            path: ['password'],
            message: 'Min 6 characters'
        });
    }
});