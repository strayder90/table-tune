import {addEventSchema} from '@modules/events/utils/formSchemas.jsx';

export const AddEventModel = () => ({
    formName: 'add',
    formSchemaValidator: addEventSchema,
    multiple: [
        {
            key: 'date',
            name: 'date',
            defaultValue: new Date(),
            icon: 'calendar alternate outline',
            type: 'date',
            placeholder: 'Date'
        },
        {
            key: 'dj',
            name: 'dj',
            label: 'DeeJay',
            icon: 'headphones',
            defaultValue: false,
            type: 'checkbox',
        }
    ],
    fields: [
        {
            key: 'title',
            name: 'title',
            defaultValue: '',
            icon: 'user',
            type: 'text',
            placeholder: 'Title',
        },
        {
            key: 'supportedByDj',
            name: 'supportedByDj',
            defaultValue: '',
            icon: 'headphones',
            type: 'text',
            placeholder: 'Dj',
            hidden: true,
        },
        {
            key: 'entry',
            name: 'entry',
            defaultValue: '',
            icon: 'money bill alternate outline',
            type: 'string',
            placeholder: 'Entry'
        },
    ],
});