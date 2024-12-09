import React, {forwardRef} from 'react';
import {Controller} from 'react-hook-form';
import {Form} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CustomInput = forwardRef(({
    key,
    name,
    control,
    rules,
    defaultValue,
    label,
    icon,
    type,
    placeholder,
    errors
}, ref) => {
    return (
        <>
            <Controller
                key={key}
                name={name}
                control={control}
                rules={rules}
                defaultValue={defaultValue}
                render={({field}) => (
                    <Form.Input
                        className='--form-input-field'
                        {...field}
                        label={label}
                        icon={icon}
                        type={type}
                        placeholder={placeholder}
                        ref={ref}
                        error={errors[name] ? {content: errors[name]?.message,  pointing: 'below'} : null}
                    />
                )}
            />
        </>
    );
});

CustomInput.displayName = 'CustomInput';

CustomInput.propTypes = {
    key: PropTypes.string,
    name: PropTypes.string,
    control: PropTypes.object,
    rules: PropTypes.shape({
        required: PropTypes.string
    }),
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    errors: PropTypes.shape({
        message: PropTypes.string
    })
};

export default CustomInput;
