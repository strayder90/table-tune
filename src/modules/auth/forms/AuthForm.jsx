import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {ToastContainer} from 'react-toastify';

const AuthForm = ({
    formData,
    formErrors,
    onChange,
    onSubmit,
    buttonText,
    iconType,
    fields = []
}) => (
    // TODO: improve icon it should be more dynamic
    <>
        <Form onSubmit={onSubmit}>
            {fields.map((field) => (
                <Form.Input
                    key={field.key}
                    name={field.name}
                    type={field.type}
                    placeholder={field.placeholder}
                    label={field.label}
                    icon={iconType ? iconType[field.name] : field.type === 'password' ? 'lock' : 'user'}
                    iconPosition='left'
                    value={formData[field.name]}
                    onChange={onChange}
                    error={formErrors[field.name] ? {content: formErrors[field.name], pointing: 'below'} : null}
                />
            ))}
            <Button type='submit' color='blue' fluid>
                {buttonText}
            </Button>
        </Form>
        <ToastContainer/>
    </>
);

AuthForm.propTypes = {
    formData: PropTypes.object.isRequired,
    formErrors: PropTypes.object.isRequired,
    onChange: PropTypes.func.isRequired,
    onSubmit: PropTypes.func.isRequired,
    buttonText: PropTypes.string.isRequired,
    iconType: PropTypes.object,
    fields: PropTypes.array.isRequired
};

export default AuthForm;
