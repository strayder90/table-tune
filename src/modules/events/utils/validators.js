import {z} from 'zod';

import {isOnlyStrings} from '@modules/auth/utils/helpers.js';

export const AddEventFormValidators = {
    title: z.string().refine(value => value.trim() !== '', {
        message: 'Title is required',
    }).refine(value => isOnlyStrings(value), {
        message: 'Title must contain only letters',
    }),
    date: z.string().refine(value => value.trim() !== '', {
        message: 'Date is required',
    }),
    entry: z.string()
};