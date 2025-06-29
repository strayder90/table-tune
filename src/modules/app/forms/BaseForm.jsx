import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup} from 'semantic-ui-react';

import useDefaultForm from '@modules/app/hooks/useDefaultForm.jsx';
import CustomInput from '@appComponents/CustomInput.jsx';
import {chunkArray} from '@utils/formHelpers.jsx';

const BaseForm = ({
    multiple,
    fields,
    formSchemaValidator,
    onSubmit,
    renderButtons,
    className = '',
    chunkMultiple = false,
    initialData = {},
    shouldResetAfterSubmit = true
}) => {
    const {
        handleSubmit,
        control,
        errors
    } = useDefaultForm({
        formSchemaValidator,
        onSubmit,
        initialData,
        shouldResetAfterSubmit
    });

    return (
        <Form onSubmit={handleSubmit}>

            {/*Render multiple form input fields one near another one*/}
            {
                multiple && (
                    (chunkArray(multiple, 2)).map((row, rowIndex) => (
                        // eslint-disable-next-line react/no-array-index-key
                        <FormGroup key={rowIndex} widths='equal'>
                            {row.map((field) => (
                                <CustomInput
                                    key={field.key}
                                    className={className}
                                    name={field.name}
                                    control={control}
                                    defaultValue={field.defaultValue}
                                    label={field.label}
                                    icon={field.icon}
                                    type={field.type}
                                    placeholder={field.placeholder}
                                    maxLength={field.maxLength}
                                    options={field.options}
                                    errors={errors}
                                />
                            ))}
                        </FormGroup>
                    ))
                )
            }

            {/*Render normal form input fields*/}
            {
                fields
                    ?.filter((field) => !multiple || !multiple.some((mf) => mf.key === field.key))
                    .map((field) => (
                        <CustomInput
                            key={field.key}
                            className={className}
                            name={field.name}
                            control={control}
                            label={field.label}
                            icon={field.icon}
                            type={field.type}
                            placeholder={field.placeholder}
                            maxLength={field.maxLength}
                            hidden={field.hidden}
                            defaultValue={field.defaultValue}
                            errors={errors}
                        />
                    ))
            }

            {renderButtons && renderButtons()}
        </Form>);
};

BaseForm.propTypes = {
    className: PropTypes.string,
    formSchemaValidator: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    fields: PropTypes.array,
    multiple: PropTypes.array,
    chunkMultiple: PropTypes.bool,
    renderButtons: PropTypes.func,
    initialData: PropTypes.object,
    shouldResetAfterSubmit: PropTypes.bool
};

export default BaseForm;
