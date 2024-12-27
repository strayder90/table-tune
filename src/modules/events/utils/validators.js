import {z} from 'zod';

export const AddEventFormValidators = {
    image: z.string(),
    title: z.string(),
    date: z.string(),
    entry: z.string() || null,
};