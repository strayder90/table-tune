import {addEventSchema} from '@modules/events/utils/formSchemas.jsx';

export const AddEventModel = () => ({
    formName: 'add',
    formSchemaValidator: addEventSchema,
    fields: [
        {
            key: 'title',
            name: 'title',
            defaultValue: '',
            icon: 'user',
            type: 'text',
            placeholder: 'Title'
        },
        {
            key: 'date',
            name: 'date',
            defaultValue: '',
            icon: 'calendar alternate outline',
            type: 'string',
            placeholder: 'Date'
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