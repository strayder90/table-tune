import {EVENTS_PER_PAGE} from '@/utils/constants.js';
import {formatDate, generateNumericID} from '@utils/utils.js';

export const rangeOfEventsToBeDisplayed = (events, activePage) => {
    const startIndex = (activePage - 1) * EVENTS_PER_PAGE;

    return events.slice(startIndex, startIndex + EVENTS_PER_PAGE);
};

export const filterEventsByQuery = (events, query) => {
    let filtered = events.filter((event) =>
        event.title.toLowerCase().includes(query.toLowerCase())
    );

    if (filtered.length === 0 && query) {
        filtered = events.filter((event) =>
            event.date.toLowerCase().includes(query.toLowerCase())
        );
    }

    return filtered;
};

export const calculateTotalPages = (totalItems, itemsPerPage) => {
    return Math.ceil(totalItems / itemsPerPage);
};

export const prepareDataForSubmit = (data) => {
    return {
        id: generateNumericID(),
        entry: data.entry,
        title: data.title,
        date: formatDate(data.date),
    };
};