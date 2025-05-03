import {addUserSchema} from '@modules/users/utils/formSchemas.jsx';

export const AddTeamModel = () => ({
    formName: 'add',
    formSchemaValidator: addUserSchema,
    multiple: [
        {
            key: 'Name',
            name: 'Name',
            defaultValue: '',
            icon: 'user',
            type: 'text',
            placeholder: 'Name'
        },
        {
            key: 'Day',
            name: 'Day/Days',
            defaultValue: '',
            icon: 'calendar outline',
            type: 'text',
            placeholder: 'Day/Days'
        },
        {
            key: 'Zone',
            name: 'Zone',
            defaultValue: '',
            icon: 'book',
            type: 'dropdown',
            placeholder: 'Zone',
            options: [
                {key: 'vip', value: 'vip', text: 'VIP'},
                {key: 'entrance', value: 'entrance', text: 'Entrance'},
                {key: 'bar', value: 'bar', text: 'Bar'},
                {key: 'garden ', value: 'garden ', text: 'Garden '},
                {key: 'storage', value: 'storage', text: 'Storage'},
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