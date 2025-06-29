import {z} from 'zod';

import {isOnlyNumbers, isOnlyStrings} from '@modules/auth/utils/helpers.js';

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
    phoneNumber: z.string().refine(value => value.trim() !== '', {
        message: 'Phone number is required',
    }).refine(value => isOnlyNumbers(value), {
        message: 'Must be only numbers',
    }),
    clubName: z.string().refine(value => value.trim() !== '', {
        message: 'Club name is required',
    }).refine(value => isOnlyStrings(value), {
        message: 'Must be only letters',
    }),
    email: z.string().refine(value => value.trim() !== '', {
        message: 'Email is required',
    }),
    password: z.string().refine(value => value.trim() !== '', {
        message: 'Password is required',
    }),
};

export const LoginFormValidators = {
    email: z.string().refine(value => value.trim() !== '', {
        message: 'Email is required',
    }),
    password: z.string().refine(value => value.trim() !== '', {
        message: 'Password is required',
    }),
};