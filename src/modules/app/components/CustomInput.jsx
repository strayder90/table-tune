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
    defaultValue = null,
    label,
    icon,
    type,
    placeholder,
    hidden = false,
    errors
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
                    default:
                        return (
                            <Form.Input
                                {...field}
                                className={className}
                                label={label}
                                icon={icon}
                                type={type}
                                placeholder={placeholder}
                                ref={ref}
                                error={fieldError ? {content: fieldError.message, pointing: 'below'} : null}
                            />
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
    hidden: PropTypes.bool,
    errors: PropTypes.objectOf(
        PropTypes.shape({
            message: PropTypes.string
        })
    )
};

export default CustomInput;
