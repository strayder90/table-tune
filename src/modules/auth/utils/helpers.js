import {toast} from 'react-toastify';

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

export const handleSubmit = (event, formData, formModel, setFormErrors, navigate) => {
    const {formName, validate} = formModel();
    event.preventDefault();

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