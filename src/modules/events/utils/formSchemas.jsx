import {z} from 'zod';

import {AddEventFormValidators} from '@modules/events/utils/validators.js';
import {isOnlyNumbers} from '@modules/auth/utils/helpers.js';

export const addEventSchema = z.object(AddEventFormValidators).superRefine((data, ctx) => {
    const {entry} = data;

    if (entry !== null && entry !== undefined && entry !== '') {
        const validEntry = isOnlyNumbers(entry);

        if (!validEntry) {
            ctx.addIssue({
                path: ['entry'],
                message: 'Entry must contain only numbers'
            });
        }
    }
});
