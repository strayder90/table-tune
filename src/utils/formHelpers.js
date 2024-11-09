export const validateForm = (formData, requiredFields) => {
    const errors = {};

    requiredFields.forEach((field) => {
        if (!formData[field]) {
            errors[field] = `Please enter ${field}`;
        }
    });

    return errors;
};