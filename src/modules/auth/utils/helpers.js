import {toast} from 'react-toastify';

import {prepareDataForSubmit} from '@/utils/formHelpers.jsx';

export const handleSignupFormSubmit = (data, navigate) => {
    if (!data) return;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const preparedUser = prepareDataForSubmit(data);

    users.push(preparedUser);

    localStorage.setItem('users', JSON.stringify(users));

    navigate('/');
};


export const handleLoginFormSubmit = (data, navigate) => {
    if (!data) return;

    const wrongUserCredentials = validateLoginCredentials(data.username, data.password);

    if (wrongUserCredentials) {
        return;
    }

    localStorage.setItem('isAuthenticated', JSON.stringify(true));

    navigate('/table-tune');
};


export const validateUsersSignupCredentials = ({email, username}) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingEmail = users.some(user => user.email === email);
    const existingUsername = users.some(user => user.username === username);

    if (existingEmail) {
        return {
            message: 'Email is already in use.',
            path: 'email'
        };
    }

    if (existingUsername) {
        return {
            message: 'Username is already in use.',
            path: 'username'
        };
    }

    return null;
};

export const validateLoginCredentials = (username, password) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingUser = users.find(user => user.username === username && user.password === password);

    if (!existingUser) {
        return toast.error('Invalid username or password');
    }

    return null;
};

export const isOnlyStrings = (input) => {
    const regex = /^[a-zA-Z\s\u00C0-\u024F]+$/;

    return regex.test(input);
};


export const sum = (a, b) => {
    return a + b;
};