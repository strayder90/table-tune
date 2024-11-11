import {toast} from 'react-toastify';

export const handleChange = (e, setFormData, setFormErrors) => {
    const {name, value} = e.target;

    setFormErrors((prevErrors) => ({
        ...prevErrors,
        [name]: value ? '' : prevErrors[name]
    }));

    setFormData((prevData) => ({
        ...prevData,
        [name]: value
    }));
};

export const handleSubmit = (e, formData, formModel, setFormErrors, navigate) => {
    e.preventDefault();
    const {formName, validate} = formModel();
    const {username, password, email} = formData;
    const errors = validate(formData);

    if (Object.keys(errors).length) {
        setFormErrors(errors);

        return;
    }

    if (formName === 'authorizationSignupForm') {
        localStorage.setItem('user', JSON.stringify({username, password, email}));
        navigate('/login');
    } else if (formName === 'authorizationLoginForm') {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/table-tune');
        } else {
            toast.error('Invalid username or password');
        }
    }
};