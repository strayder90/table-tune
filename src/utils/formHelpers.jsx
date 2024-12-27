import React from 'react';
import {Modal} from 'semantic-ui-react';

import {generateNumericID} from '@/utils/utils.js';

export const useCreateForm = (FormComponent, Model, params = {}) => {
    const {formName, fields, formSchemaValidator, multiple = []} = Model();

    const FormWrapper = () => (
        <>
            <FormComponent
                multiple={multiple}
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

export const prepareDataForSubmit = (data) => {
    return {
        id: generateNumericID(),
        ...data
    };
};

export const showFormModal = ({open, onClose, header, children}) => {
    return (
        <Modal open={open} onClose={onClose} size='tiny'>
            <Modal.Header>{header}</Modal.Header>
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    );
};