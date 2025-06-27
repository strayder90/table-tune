import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState, useEffect, useCallback} from 'react';

/**
 * Custom form hook based on react-hook-form + Zod validation.
 * Handles submission, validation, and optional form resetting.
 *
 * @param {object} formSchemaValidator - Zod schema for validation.
 * @param {function} onSubmit - Callback triggered with valid form data.
 * @param {object} [initialData={}] - Default form values.
 * @param {boolean} [shouldResetAfterSubmit=true] - Whether to reset the form after submit.
 */
const useDefaultForm = ({
    formSchemaValidator,
    onSubmit,
    initialData = {},
    shouldResetAfterSubmit = true
}) => {
    const {
        handleSubmit,
        formState: {errors},
        control,
        reset
    } = useForm({
        resolver: zodResolver(formSchemaValidator),
        defaultValues: initialData
    });

    const [formData, setFormData] = useState(initialData);

    const handleFormSubmit = useCallback((data) => {
        onSubmit?.(data);

        if (shouldResetAfterSubmit) reset();
    }, [onSubmit, reset, shouldResetAfterSubmit]);

    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            reset(formData);
        }
    }, [formData, reset]);

    return {
        handleSubmit: handleSubmit(handleFormSubmit),
        control,
        errors,
        setFormData
    };
};

export default useDefaultForm;
