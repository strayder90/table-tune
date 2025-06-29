// routesMap.index === "/"
// routesMap.signup === "/signup"
// routesMap.tables.path; === "/table-tune/tables"
// routesMap.events.path; === "/table-tune/events"
// routesMap.events.add; === "/table-tune/events/add"
// routesMap.events.edit; === "/table-tune/events/:id"
// routesMap.menu.users.edit; === "/table-tune/menu/users/:id"
// routesMap.userSettings; === "/table-tune/user-settings"

import {buildFullPaths} from '@utils/utils.js';

const basePath = '/table-tune';

const relativeRoutes = {
    index: '',
    signup: 'signup',
    tables: {
        path: 'tables',
    },
    events: {
        path: 'events',
        add: 'add',
        edit: ':id',
    },
    reservations: {
        path: 'reservations',
        add: 'add',
        edit: ':id',
    },
    team: {
        path: 'team',
        add: 'add',
        edit: ':id',
    },
    menu: {
        path: 'menu',
        users: {
            path: 'users',
            add: 'add',
            edit: ':id',
        },
    },
    userSettings: {
        path: 'user-settings',
    },
};

const routesMap = buildFullPaths(basePath, relativeRoutes);

export default routesMap;