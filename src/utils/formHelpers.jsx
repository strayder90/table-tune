import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';

import {handleChange, handleSubmit} from '../modules/auth/utils/helpers.js';

export const useCreateForm = (FormComponent, formModel, params = {}) => {
    const {fields} = formModel();
    const initialValues = fields.reduce((acc, field) => ({...acc, [field.key]: field.defaultValue ?? ''}), {});
    const [formData, setFormData] = useState(initialValues);
    const [formErrors, setFormErrors] = useState({});
    const navigate = useNavigate();

    const FormWrapper = () => (
        <>
            <FormComponent
                formData={formData}
                formErrors={formErrors}
                onChange={(e) => handleChange(e, setFormData, setFormErrors)}
                onSubmit={(e) => handleSubmit(e, formData, formModel, setFormErrors, navigate)}
                fields={fields}
                {...params}
            />
        </>
    );

    FormWrapper.displayName = 'FormWrapper';

    return FormWrapper;
};