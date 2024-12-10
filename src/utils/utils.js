export const convertToBoolean = (value) => {
    return value === 'true' ? 1 : value === 'false' ? 0 : null;
};

export const generateNumericID = () => {
    return convertToInt(Date.now() + Math.floor(Math.random() * 1000000));
};

export const convertToInt = (value) => {
    if (value === null || value === undefined) {
        return 0;
    }

    const intValue = parseInt(value, 10);

    return isNaN(intValue) ? 0 : intValue;
};