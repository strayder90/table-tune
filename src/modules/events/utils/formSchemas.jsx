import {z} from 'zod';

import {AddEventFormValidators} from '@modules/events/utils/validators.js';

export const addEventSchema = z.object(AddEventFormValidators);