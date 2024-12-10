import {z} from 'zod';

import {isOnlyStrings} from '@modules/auth/utils/helpers.js';

export const SignupFormValidators = {
    firstName: z.string().refine(value => value.trim() !== '', {
        message: 'First name is required',
    }).refine(value => isOnlyStrings(value), {
        message: 'First name must contain only letters',
    }),
    lastName: z.string().refine(value => value.trim() !== '', {
        message: 'Last name is required',
    }).refine(value => isOnlyStrings(value), {
        message: 'Last name must contain only letters',
    }),
    email: z.string().refine(value => value.trim() !== '', {
        message: 'Email is required',
    }),
    username: z.string().refine(value => value.trim() !== '', {
        message: 'Username is required',
    }),
    password: z.string().refine(value => value.trim() !== '', {
        message: 'Password is required',
    }),
    confirmPassword: z.string()
};

export const LoginFormValidators = {
    username: z.string().refine(value => value.trim() !== '', {
        message: 'Username is required',
    }),
    password: z.string().refine(value => value.trim() !== '', {
        message: 'Password is required',
    }),
};