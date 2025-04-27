import {toast} from 'react-toastify';

import {login, logout} from '@/redux/authentication/AuthSlice';
import {generateNumericID} from '@utils/utils.js';

export const handleSignupFormSubmit = (data, navigate) => {
    if (!data) return;

    const preparedUser = prepareDataForSubmit(data);

    localStorage.setItem('user', JSON.stringify(preparedUser));

    navigate('/');
};


export const handleLoginFormSubmit = (data, navigate, dispatch) => {
    if (!data) return;

    const user = JSON.parse(localStorage.getItem('user')) || {};
    const wrongUserCredentials = validateLoginCredentials(data.username, data.password);

    if (wrongUserCredentials) {
        return;
    }

    const userData = {
        id: user.id,
        firstName: user.firstName,
        lastName: user.lastName,
    };

    dispatch(login(userData));
    navigate('/table-tune/tables');
};

export const handleLogout = (navigate, dispatch) => {
    dispatch(logout());

    navigate('/');
};

export const validateUsersSignupCredentials = ({email, username}) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingEmail = users.some(user => user.email === email);
    const existingUsername = users.some(user => user.username === username);

    if (existingEmail) {
        return {
            path: 'email', message: 'Email is already in use.'
        };
    }

    if (existingUsername) {
        return {
            path: 'username', message: 'Username is already in use.'
        };
    }

    return null;
};

export const validateLoginCredentials = (username, password) => {
    const user = JSON.parse(localStorage.getItem('user')) || {};
    
    if (username !== user.username && password !== user.password) {
        return toast.error('Invalid username or password');
    }

    return null;
};

export const isOnlyStrings = (input) => {
    const regex = /^[a-zA-Z\s\u00C0-\u024F]+$/;

    return regex.test(input);
};

export const isOnlyNumbers = (input) => {
    const regex = /^[0-9]+$/;

    return regex.test(input);
};

export const sum = (a, b) => {
    return a + b;
};

export const prepareDataForSubmit = (data) => {
    return {
        id: generateNumericID(), ...data
    };
};