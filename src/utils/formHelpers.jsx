import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';


export const useCreateForm = (FormComponent, formModel, handleChange, handleSubmit, params = {}) => {
    const {fields, validate} = formModel();
    const [formData, setFormData] = useState(fields.reduce((acc, field) => ({...acc, [field.key]: ''}), {}));
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const handleFieldChange = (e) => {
        if (handleChange) {
            handleChange(e, setFormData, setFormErrors);
        } else {
            const {name, value} = e.target;
            setFormData((prevData) => ({...prevData, [name]: value}));
            setFormErrors((prevErrors) => ({
                ...prevErrors,
                [name]: value ? '' : prevErrors[name]
            }));
        }
    };

    const handleFormSubmit = (e) => {
        if (handleSubmit) {
            e.preventDefault();
            const errors = validate(formData);

            if (Object.keys(errors).length) {
                setFormErrors(errors);

                return;
            }

            handleSubmit(e, formData, formModel().formName, navigate);
        }
    };

    const FormWrapper = () => (
        <>
            <FormComponent
                formData={formData}
                formErrors={formErrors}
                onChange={handleFieldChange}
                onSubmit={handleFormSubmit}
                fields={fields}
                {...params}
            />
        </>
    );

    FormWrapper.displayName = 'FormWrapper';

    return FormWrapper;
};