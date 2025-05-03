import {addUserSchema} from '@modules/users/utils/formSchemas.jsx';

export const AddUserModel = () => ({
    formName: 'add',
    formSchemaValidator: addUserSchema,
    multiple: [
        {
            key: 'Full name',
            name: 'Full name',
            defaultValue: '',
            icon: 'user',
            type: 'text',
            placeholder: 'Full name'
        },
        {
            key: 'Email',
            name: 'Email',
            defaultValue: '',
            icon: 'mail',
            type: 'text',
            placeholder: 'Email'
        },
        {
            key: 'Role',
            name: 'Role',
            defaultValue: '',
            icon: 'book',
            type: 'dropdown',
            placeholder: 'Role',
            options: [
                {key: 'admin', value: 'admin', text: 'Admin'},
                {key: 'manager', value: 'manager', text: 'Manager'},
                {key: 'waiter', value: 'waiter', text: 'Waiter'},
                {key: 'hostess ', value: 'hostess ', text: 'Hostess '},
                {key: 'security', value: 'security', text: 'Security'}
            ]
        },
        {
            label: 'Active',
            key: 'Status',
            name: 'Status',
            defaultValue: true,
            type: 'checkbox',
            placeholder: 'Status'
        }
    ],
    fields: []
});