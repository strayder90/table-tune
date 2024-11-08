export const convertToBoolean = (value) => {
    return value === 'true' ? 1 : value === 'false' ? 0 : null;
};
