import React from 'react';
import {Modal} from 'semantic-ui-react';

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

export const showFormModal = ({className, isVisible, onClose, header, children}) => {
    return (
        <Modal
            className={className}
            open={isVisible}
            onClose={onClose}
            size='tiny'
        >
            <Modal.Header>{header}</Modal.Header>
            <Modal.Content>
                {children}
            </Modal.Content>
        </Modal>
    );
};