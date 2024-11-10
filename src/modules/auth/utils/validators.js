export const SignupFormValidator = (data) => {
    const errors = {};

    if (!data.email) errors.email = 'Email is required';
    if (!data.username) errors.username = 'Username is required';
    if (!data.password) errors.password = 'Password is required';

    return errors;
};

export const LoginFormValidator = (data) => {
    const errors = {};

    if (!data.username) errors.username = 'Username is required';
    if (!data.password) errors.password = 'Password is required';

    return errors;
};