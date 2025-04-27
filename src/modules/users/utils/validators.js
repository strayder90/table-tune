import {z} from 'zod';

import {isOnlyStrings} from '@modules/auth/utils/helpers.js';

export const AddUserFormValidators = {
    name: z.string().trim().min(1, {message: 'Name is required'})
        .refine(value => isOnlyStrings(value), {
            message: 'Name must contain only letters'
        }),
    email: z.string().trim().min(1, {message: 'Email is required'}).email({message: 'Invalid email address'}),
    role: z.string().trim().min(1, {message: 'Role is required'}),
    status: z.boolean({required_error: 'Status is required'})
};
