import React from 'react';

export const useCreateForm = (FormComponent, Model, params = {}) => {
    const {formName, fields, formSchemaValidator, multiple = []} = Model();

    const FormWrapper = () => (
        <>
            <FormComponent
                multiple={multiple}
                fields={fields}
                formSchemaValidator={formSchemaValidator}
                formName={formName}
                {...params}
            />
        </>
    );

    FormWrapper.displayName = 'FormWrapper';

    return FormWrapper;
};