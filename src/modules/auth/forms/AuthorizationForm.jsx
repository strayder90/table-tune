import {useState} from 'react';
import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {ToastContainer} from 'react-toastify';

import {handleChange, handleSubmit} from '../utils/helpers.js';

const AuthorizationForm = ({type}) => {
    const [formData, setFormData] = useState({email: '', username: '', password: ''});
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    return (
        <>
            <Form onSubmit={(e) => handleSubmit(e, formData, type, navigate, setFormErrors)}>
                {type === 'signup' && (
                    <Form.Input
                        name='email'
                        type='email'
                        placeholder='Email'
                        label='Email *'
                        icon='mail'
                        iconPosition='left'
                        value={formData.email}
                        onChange={(e) => handleChange(e, setFormData, setFormErrors)}
                        error={formErrors.email ? {content: formErrors.email, pointing: 'below'} : null}
                    />
                )}
                <Form.Input
                    name='username'
                    type='text'
                    placeholder='Username'
                    label='Username *'
                    icon='user'
                    iconPosition='left'
                    value={formData.username}
                    onChange={(e) => handleChange(e, setFormData, setFormErrors)}
                    error={formErrors.username ? {content: formErrors.username, pointing: 'below'} : null}
                />
                <Form.Input
                    name='password'
                    type='password'
                    placeholder='Password'
                    label='Password *'
                    icon='lock'
                    iconPosition='left'
                    value={formData.password}
                    onChange={(e) => handleChange(e, setFormData, setFormErrors)}
                    error={formErrors.password ? {content: formErrors.password, pointing: 'below'} : null}
                />
                <Button type='submit' color='blue' fluid>
                    {type === 'signup' ? 'Create account' : 'Log In'}
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
