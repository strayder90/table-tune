import {toast} from 'react-toastify';

export const handleChange = (e, setFormData) => {
    const {name, value} = e.target;

    setFormData((prevData) => ({
        ...prevData, [name]: value
    }));
};

export const handleSubmit = (event, formData, type, navigate) => {
    event.preventDefault();
    const {username, password, email} = formData;

    if (type === 'signup') {
        localStorage.setItem('user', JSON.stringify({username, password, email}));
        navigate('/login');
    } else if (type === 'login') {
        const storedUser = JSON.parse(localStorage.getItem('user'));
        if (storedUser && storedUser.username === username && storedUser.password === password) {
            localStorage.setItem('isAuthenticated', 'true');
            navigate('/home');
        } else {
            toast.error('Invalid username or password');
        }
    }
};