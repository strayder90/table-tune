import {z} from 'zod';

export const SignupFormValidators = {
    firstName: z.string().refine(value => value.trim() !== '', {
        message: 'First name is required',
    }),
    lastName: z.string().refine(value => value.trim() !== '', {
        message: 'Last name is required',
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
};

export const LoginFormValidators = {
    username: z.string().refine(value => value.trim() !== '', {
        message: 'Username is required',
    }),
    password: z.string().refine(value => value.trim() !== '', {
        message: 'Password is required',
    }),
};