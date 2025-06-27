import React, {forwardRef} from 'react';
import {Controller} from 'react-hook-form';
import PropTypes from 'prop-types';

import 'react-datepicker/dist/react-datepicker.css';
import InputField from '@appComponents/subComponents/InputField.jsx';

const CustomInput = forwardRef(({
    className = '',
    name,
    control,
    label,
    icon,
    type,
    placeholder,
    maxLength,
    options = [],
    hidden = false,
    defaultValue = null,
    errors = {}
}, ref) => {
    if (hidden) return null;

    const fieldError = errors?.[name];

    return (
        <Controller
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({field}) => (
                <InputField
                    field={field}
                    type={type}
                    label={label}
                    icon={icon}
                    placeholder={placeholder}
                    maxLength={maxLength}
                    options={options}
                    fieldError={fieldError}
                    ref={ref}
                    className={className}
                />
            )}
        />
    );
});

CustomInput.displayName = 'CustomInput';

CustomInput.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    control: PropTypes.object,
    defaultValue: PropTypes.any,
    label: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date', 'checkbox', 'dropdown']),
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            value: PropTypes.any,
            text: PropTypes.string
        })
    ),
    hidden: PropTypes.bool,
    errors: PropTypes.objectOf(
        PropTypes.shape({
            message: PropTypes.string
        })
    )
};

export default CustomInput;
