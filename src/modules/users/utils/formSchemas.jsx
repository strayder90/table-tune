import {z} from 'zod';

import {AddUserFormValidators} from '@modules/users/utils/validators.js';

export const addUserSchema = z.object(AddUserFormValidators);
