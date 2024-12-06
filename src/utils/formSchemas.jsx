import {z} from 'zod';

import {emailRegex} from './regexExpressions.js';
import {validateUsersSignupCredentials} from '@modules/auth/utils/helpers.js';
import {LoginFormValidators, SignupFormValidators} from '@modules/auth/utils/validators.js';

export const signUpSchema = z.object(SignupFormValidators).superRefine((data, ctx) => {
    const validatedExistingUser = validateUsersSignupCredentials(data.email, data.username);

    if (validatedExistingUser) {
        ctx.addIssue({
            path: [validatedExistingUser.path],
            message: validatedExistingUser.message,
        });
    }

    if (!emailRegex(data.email)) {
        ctx.addIssue({
            path: ['email'],
            message: 'Please enter a correct email'
        });
    }

    if (data.password !== data.confirmPassword) {
        ctx.addIssue({
            path: ['confirmPassword'],
            message: 'Passwords must match'
        });
    }
});

export const logInSchema = z.object(LoginFormValidators);