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

export const formatDate = (d) => {
    const day = String(d.getDate()).padStart(2, '0');
    const month = String(d.getMonth() + 1).padStart(2, '0');
    const year = d.getFullYear();

    return `${day}-${month}-${year}`;
};

export const formatTimestamp = (timestamp) => {
    const date = new Date(Number(timestamp));

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();

    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${day}-${month}-${year}, ${hours}:${minutes}:${seconds}`;
};