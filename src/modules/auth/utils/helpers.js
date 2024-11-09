import {toast} from 'react-toastify';

import {validateForm} from '../../../utils/formHelpers.js';

export const handleChange = (e, setFormData, setFormErrors) => {
    const {name, value} = e.target;

    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));

    setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: value ? '' : prevErrors[name]
    }));
};

export const handleSubmit = (event, formData, type, navigate, setFormErrors) => {
    event.preventDefault();

    const requiredFields = type === 'signup' ? ['email', 'username', 'password'] : ['username', 'password'];

    const errors = validateForm(formData, requiredFields);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) return;

    const {username, password, email} = formData;

    if (type === 'signup') {
        localStorage.setItem('user', JSON.stringify({username, password, email}));
        navigate('/login');
    } else if (type === 'login') {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/table-tune');
        } else {
            toast.error('Invalid username or password');
        }
    }
};