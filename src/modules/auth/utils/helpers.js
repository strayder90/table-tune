import {toast} from 'react-toastify';

export const handleSignupFormSubmit = (data, navigate) => {
    if (!data) return;
    const {firstName, lastName, email, username, password} = data;
    const users = JSON.parse(localStorage.getItem('users')) || [];

    const newUser = {firstName, lastName, email, username, password};
    users.push(newUser);

    localStorage.setItem('users', JSON.stringify(users));

    navigate('/');
};


export const handleLoginFormSubmit = (data, navigate) => {
    if (!data) return;

    const wrongUser = validateLoginCredentials(data.username, data.password);

    if (wrongUser) {
        return;
    }

    localStorage.setItem('isAuthenticated', JSON.stringify(true));

    navigate('/table-tune');
};


export const validateUsersSignupCredentials = ({firstName, lastName, email, username}) => {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const existingFirstName = users.some(user => user.firstName === firstName);
    const existingLastName = users.some(user => user.lastName === lastName);
    const existingEmail = users.some(user => user.email === email);
    const existingUsername = users.some(user => user.username === username);

    if (existingFirstName) {
        return {
            message: 'First name is already in use.',
            path: 'firstName'
        };
    }

    if (existingLastName) {
        return {
            message: 'Last name is already in use.',
            path: 'lastName'
        };
    }

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