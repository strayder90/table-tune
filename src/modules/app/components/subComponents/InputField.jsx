import React from 'react';
import PropTypes from 'prop-types';
import {Form, Checkbox} from 'semantic-ui-react';
import DatePicker from 'react-datepicker';

const InputField = ({
    field,
    type,
    label,
    icon,
    placeholder,
    maxLength,
    options,
    fieldError,
    ref,
    className
}) => {
    switch (type) {
        case 'date':
            return (
                <DatePicker
                    {...field}
                    selected={field.value ? new Date(field.value) : null}
                    placeholderText={placeholder}
                    dateFormat='dd-MM-yyyy'
                />
            );

        case 'checkbox':
            return (
                <Form.Field
                    className='--custom-input__checkbox'
                    error={fieldError ? {content: fieldError.message, pointing: 'below'} : null}
                >
                    <span>{label}</span>
                    <Checkbox {...field} toggle/>
                </Form.Field>
            );

        case 'dropdown':
            return (
                <Form.Field
                    className='--custom-input__dropdown'
                    error={fieldError ? {content: fieldError.message, pointing: 'below'} : null}
                >
                    <Form.Select
                        {...field}
                        options={options}
                        placeholder={placeholder}
                        onChange={(e, {value}) => field.onChange(value)}
                        value={field.value}
                    />
                </Form.Field>
            );

        default:
            return (
                <Form.Field className={className}>
                    {label && <label>{label}</label>}
                    <div className={`--custom-input ${fieldError ? '--has-error' : ''}`}>
                        <Form.Input
                            {...field}
                            icon={icon}
                            type={type}
                            placeholder={placeholder}
                            maxLength={maxLength}
                            ref={ref}
                            className='--custom-input'
                        />
                        {fieldError && (
                            <span className='--custom-error-text'>
                                {fieldError.message}
                            </span>
                        )}
                    </div>
                </Form.Field>
            );
    }
};

InputField.propTypes = {
    field: PropTypes.shape({
        name: PropTypes.string.isRequired,
        value: PropTypes.any,
        onChange: PropTypes.func.isRequired,
        onBlur: PropTypes.func
    }).isRequired,
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date', 'checkbox', 'dropdown']),
    label: PropTypes.string,
    icon: PropTypes.string,
    placeholder: PropTypes.string,
    maxLength: PropTypes.number,
    options: PropTypes.arrayOf(
        PropTypes.shape({
            key: PropTypes.string,
            value: PropTypes.any,
            text: PropTypes.string
        })
    ),
    fieldError: PropTypes.shape({
        message: PropTypes.string
    }),
    ref: PropTypes.any,
    className: PropTypes.string
};

export default InputField;
