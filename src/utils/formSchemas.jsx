import {z} from 'zod';

import {validateUsersSignupCredentials} from '@modules/auth/utils/helpers.js';
import {LoginFormValidators, SignupFormValidators} from '@modules/auth/utils/validators.js';

import {emailRegex} from './regexExpressions.js';

export const signUpSchema = z.object(SignupFormValidators).superRefine((data, ctx) => {
    const {firstName, lastName, email, username, password, confirmPassword} = data;

    const validatedExistingUser = validateUsersSignupCredentials({
        firstName,
        lastName,
        email,
        username,
    });

    if (validatedExistingUser) {
        ctx.addIssue({
            path: [validatedExistingUser.path],
            message: validatedExistingUser.message
        });
    }

    if (!emailRegex(email)) {
        ctx.addIssue({
            path: ['email'],
            message: 'Please enter a valid email format (e.g., user@example.com)'
        });
    }

    if (username && username.length < 3) {
        ctx.addIssue({
            path: ['username'],
            message: 'Username should have at least 3 characters long'
        });
    }

    if (password && password.length < 5) {
        ctx.addIssue({
            path: ['password'],
            message: 'Password should have at least 5 character long'
        });
    }

    if (password !== confirmPassword) {
        ctx.addIssue({
            path: ['confirmPassword'],
            message: 'Passwords must match'
        });
    }
});

export const logInSchema = z.object(LoginFormValidators);