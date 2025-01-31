import React, {forwardRef} from 'react';
import {Controller} from 'react-hook-form';
import {Form} from 'semantic-ui-react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

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
                    <>
                        {type === 'date' ? (
                            <DatePicker
                                className='--form-input-field'
                                {...field}
                                selected={field.value ? new Date(field.value) : null}
                                onChange={(date) => field.onChange(date)}
                                placeholderText={placeholder}
                                dateFormat='dd-MM-yyyy'
                                ref={ref}
                            />
                        ) : (
                            <Form.Input
                                className='--form-input-field'
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
