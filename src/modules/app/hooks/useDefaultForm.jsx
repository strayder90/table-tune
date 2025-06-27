import {useForm} from 'react-hook-form';
import {zodResolver} from '@hookform/resolvers/zod';
import {useState, useEffect} from 'react';

const useDefaultForm = ({
    formSchemaValidator,
    onSubmit,
    multiple = [],
    initialData = {}
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

    const handleFormSubmit = (data) => {
        if (onSubmit) {
            onSubmit(data);
        }

        // reset();
    };

    useEffect(() => {
        if (Object.keys(formData).length > 0) {
            reset(formData);
        }
    }, [formData, reset]);


    return {
        handleSubmit: handleSubmit(handleFormSubmit),
        control,
        errors,
        multiple,
        setFormData
    };
};

export default useDefaultForm;
