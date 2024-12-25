import {EVENTS_PER_PAGE} from '@/utils/constants.js';

export const rangeOfEventsToBeDisplayed = (events, activePage) => {
    const startIndex = (activePage - 1) * EVENTS_PER_PAGE;

    return events.slice(startIndex, startIndex + EVENTS_PER_PAGE);
};