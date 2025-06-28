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

// Groups array items into smaller arrays of given size (used for form row layout) => [[1, 2], [3, 4]]
export const chunkArray = (arr, size) => {
    const result = [];

    for (let i = 0; i < arr.length; i += size) {
        result.push(arr.slice(i, i + size));
    }

    return result;
};