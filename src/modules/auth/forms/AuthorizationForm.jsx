import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {toast, ToastContainer} from 'react-toastify';

const AuthorizationForm = ({type}) => {
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        const username = formData.get('username');
        const password = formData.get('password');
        const email = formData.get('email');

        if (type === 'signup') {
            localStorage.setItem('user', JSON.stringify({username, password, email}));

            navigate('/login');
        }

        if (type === 'login') {
            const storedUser = JSON.parse(localStorage.getItem('user'));

            if (storedUser && storedUser.username === username && storedUser.password === password) {
                localStorage.setItem('isAuthenticated', 'true');

                navigate('/home');
            } else {
                toast.error('Invalid username or password');
            }
        }
    };
    // TODO: improve error on field if no data provided

    return (
        <>
            <Form onSubmit={handleSubmit}>
                {type === 'signup' && (
                    <Form.Input
                        name='email'
                        type='email'
                        placeholder='Email'
                        label='Email'
                        icon='mail'
                        iconPosition='left'
                        required
                    />
                )}
                <Form.Input
                    name='username'
                    type='text'
                    placeholder='Username'
                    label='Username'
                    icon='user'
                    iconPosition='left'
                    required
                />
                <Form.Input
                    name='password'
                    type='password'
                    placeholder='Password'
                    label='Password'
                    icon='lock'
                    iconPosition='left'
                    required
                />
                <Button type='submit' color='blue' fluid>
                    {type === 'signup' ? 'Sign Up' : 'Log In'}
                </Button>
            </Form>

            <ToastContainer/>
        </>
    );
};

AuthorizationForm.propTypes = {
    type: PropTypes.string.isRequired
};

export default AuthorizationForm;
