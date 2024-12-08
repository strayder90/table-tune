import {z} from 'zod';

export const SignupFormValidators = {
    email: z.string(),
    username: z.string().min(3, 'Username must have at least 3 characters'),
    password: z.string().min(5, 'Password should be at least 5 characters'),
    confirmPassword: z.string()
};

export const LoginFormValidators = {
    username: z.string().min(3, 'Username must have at least 3 characters'),
    password: z.string().min(5, 'Password should be at least 5 characters'),
};