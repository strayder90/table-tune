import React from 'react';
export const useCreateForm = (FormComponent, Model, params = {}) => {
    const {formName, fields, formSchemaValidator} = Model();

    const FormWrapper = () => (
        <>
            <FormComponent
                formName={formName}
                fields={fields}
                formSchemaValidator={formSchemaValidator}
                {...params}
            />
        </>
    );

    FormWrapper.displayName = 'FormWrapper';

    return FormWrapper;
};