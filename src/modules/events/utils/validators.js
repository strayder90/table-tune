import {z} from 'zod';

import {isOnlyNumbers, isOnlyStrings} from '@modules/auth/utils/helpers.js';
import {formatDate} from '@utils/utils.js';

export const AddEventFormValidators = {
    title: z.string().refine(value => value.trim() !== '', {
        message: 'Title is required'
    }).refine(value => isOnlyStrings(value), {
        message: 'Title must contain only letters'
    }),
    entry: z.string().refine(value => value.trim() !== '', {
        message: 'Entry price is required'
    }).refine(value => isOnlyNumbers(value), {
        message: 'Price must be only numbers'
    }),
    date: z.date().refine(value => formatDate(value), {
        message: 'Date is required'
    })
};