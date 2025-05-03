import {addUserSchema} from '@modules/users/utils/formSchemas.jsx';

export const AddUserModel = () => ({
    formName: 'add',
    formSchemaValidator: addUserSchema,
    multiple: [],
    fields: [
        {
            key: 'Full name',
            name: 'Full name',
            defaultValue: '',
            icon: 'user',
            type: 'text',
            placeholder: 'Full name',
        },
        {
            key: 'Email',
            name: 'Email',
            defaultValue: '',
            icon: 'mail',
            type: 'text',
            placeholder: 'Email',
        },
        {
            key: 'Role',
            name: 'Role',
            defaultValue: '',
            icon: 'book',
            type: 'text',
            placeholder: 'Role'
        },
        {
            label: 'Active',
            key: 'Status',
            name: 'Status',
            defaultValue: false,
            type: 'checkbox',
            placeholder: 'Status'
        },
    ],
});