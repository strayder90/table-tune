import React, {forwardRef} from 'react';
import {Controller} from 'react-hook-form';
import {Form, Checkbox, Icon} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const CustomInput = forwardRef(({
    className = '',
    key,
    name,
    control,
    defaultValue,
    label,
    icon,
    type,
    placeholder,
    hidden = false,
    errors
}, ref) => {
    if (hidden) return null;

    return (
        <Controller
            key={key}
            name={name}
            control={control}
            defaultValue={defaultValue}
            render={({field}) => (
                <>
                    {type === 'date' ? (
                        <DatePicker
                            {...field}
                            selected={field.value ? new Date(field.value) : defaultValue}
                            placeholderText={placeholder}
                            dateFormat='dd-MM-yyyy'
                            ref={ref}
                        />
                    ) : type === 'checkbox' ? (
                        <Form.Field className='--custom-input__checkbox' error={errors[name] ? {content: errors[name]?.message, pointing: 'below'} : null}>
                            <span>{label}</span>
                            <span><Icon name={icon} /></span>
                            <Checkbox
                                {...field}
                                toggle
                            />
                        </Form.Field>
                    ) : (
                        <Form.Input
                            className={className}
                            {...field}
                            label={label}
                            icon={icon}
                            type={type}
                            placeholder={placeholder}
                            ref={ref}
                            error={errors[name] ? {content: errors[name]?.message, pointing: 'below'} : null}
                        />
                    )}
                </>
            )}
        />
    );
});

CustomInput.displayName = 'CustomInput';

CustomInput.propTypes = {
    className: PropTypes.string,
    key: PropTypes.string,
    name: PropTypes.string,
    control: PropTypes.object,
    defaultValue: PropTypes.string,
    label: PropTypes.string,
    icon: PropTypes.string,
    type: PropTypes.string,
    placeholder: PropTypes.string,
    hidden: PropTypes.bool,
    errors: PropTypes.shape({
        message: PropTypes.string
    })
};

export default CustomInput;
