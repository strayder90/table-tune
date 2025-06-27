import React, {forwardRef} from 'react';
import {Controller} from 'react-hook-form';
import {Form, Checkbox, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
            render={({field}) => {
                switch (type) {
                    case 'date':
                        return (
                            <DatePicker
                                {...field}
                                selected={field.value ? new Date(field.value) : defaultValue}
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
                                <span><Icon name={icon}/></span>
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
            }}
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
    type: PropTypes.oneOf(['text', 'password', 'email', 'number', 'date', 'checkbox']),
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
