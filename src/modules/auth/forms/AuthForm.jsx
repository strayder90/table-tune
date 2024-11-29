import {Form, Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';

import CustomInput from '../../auth/components/CustomInput.jsx';
import {handleSignupFormSubmit, handleLoginFormSubmit} from '../utils/helpers.js';

const AuthForm = ({fields, formSchemaValidator, formName, buttonText}) => {
    const {
        handleSubmit,
        formState: {errors},
        control,
        reset
    } = useForm({
        resolver: zodResolver(formSchemaValidator)
    });
    const navigate = useNavigate();

    const onSubmit = (data) => {
        if (formName === 'SignupForm') {
            handleSignupFormSubmit(data, navigate);
        } else if (formName === 'LoginForm') {
            handleLoginFormSubmit(data, navigate);
        }

        reset();
    };

    return (
        <>
            <Form onSubmit={handleSubmit(onSubmit)}>
                {fields.map((field) => (
                    <CustomInput
                        key={field.key}
                        name={field.name}
                        control={control}
                        defaultValue={field.defaultValue}
                        label={field.label}
                        icon={field.icon}
                        type={field.type}
                        placeholder={field.placeholder}
                        errors={errors}
                    />
                ))}
                <Button primary type='submit'>
                    {buttonText}
                </Button>
            </Form>
        </>
    );
};

AuthForm.propTypes = {
    fields: PropTypes.array.isRequired,
    formSchemaValidator: PropTypes.object,
    formName: PropTypes.string,
    buttonText: PropTypes.string.isRequired,
};

export default AuthForm;
