import React from 'react';
import PropTypes from 'prop-types';
import {Form, FormGroup} from 'semantic-ui-react';

import useDefaultForm from '@modules/app/hooks/useDefaultForm.jsx';
import CustomInput from '@appComponents/CustomInput.jsx';
import {chunkArray} from '@utils/formHelpers.jsx';

const BaseForm = ({
    formSchemaValidator,
    onSubmit,
    fields,
    multiple,
    chunkMultiple = false,
    renderButtons
}) => {
    const {
        handleSubmit,
        control,
        errors
    } = useDefaultForm({
        formSchemaValidator,
        onSubmit,
        multiple
    });

    return (
        <Form onSubmit={handleSubmit}>
            {multiple && (chunkMultiple
                ? chunkArray(multiple, 2).map((row, rowIndex) => (
                    <FormGroup key={rowIndex}>
                        {row.map((field) => (
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
                    </FormGroup>
                ))
                : (
                    <FormGroup widths='equal'>
                        {multiple.map((field) => (
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
                    </FormGroup>
                )
            )}

            {fields
                ?.filter((field) => !multiple || !multiple.some((mf) => mf.key === field.key))
                .map((field) => (
                    <CustomInput
                        key={field.key}
                        name={field.name}
                        control={control}
                        defaultValue={field.defaultValue}
                        label={field.label}
                        icon={field.icon}
                        type={field.type}
                        placeholder={field.placeholder}
                        hidden={field.hidden}
                        errors={errors}
                    />
                ))}

            {renderButtons && renderButtons()}
        </Form>
    );
};

BaseForm.propTypes = {
    formSchemaValidator: PropTypes.object.isRequired,
    onSubmit: PropTypes.func.isRequired,
    fields: PropTypes.array.isRequired,
    multiple: PropTypes.array,
    chunkMultiple: PropTypes.bool,
    renderButtons: PropTypes.func
};

export default BaseForm;
