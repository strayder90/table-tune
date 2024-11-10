import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {ToastContainer} from 'react-toastify';

const AuthForm = ({
    formData,
    formErrors,
    onChange,
    onSubmit,
    buttonText,
    fields = []
}) => (
    <>
        <Form onSubmit={onSubmit}>
            {
                fields.map((field) => (
                    <Form.Input
                        key={field.key}
                        name={field.name}
                        type={field.type}
                        label={field.label}
                        placeholder={field.placeholder}
                        required={field.required || false}
                        icon={field.icon}
                        iconPosition='left'
                        value={formData[field.name]}
                        onChange={onChange}
                        error={formErrors[field.name] ? {content: formErrors[field.name], pointing: 'below'} : null}
                    />
                ))
            }
            <Button type='submit' color='blue' fluid>
                {buttonText}
            </Button>
        </Form>
        <ToastContainer/>
    </>
);

AuthForm.propTypes = {
    formData: PropTypes.object,
    formErrors: PropTypes.object,
    onChange: PropTypes.func,
    onSubmit: PropTypes.func,
    buttonText: PropTypes.string,
    iconType: PropTypes.object,
    fields: PropTypes.array
};

export default AuthForm;
