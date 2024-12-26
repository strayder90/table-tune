import {useState} from 'react';

import {filterEventsByQuery} from '@modules/events/utils/helpers.js';

export const useEventFilters = (events) => {
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredEvents, setFilteredEvents] = useState(events);

    const handleSearch = (query) => {
        setSearchQuery(query);
        setFilteredEvents(filterEventsByQuery(events, query));
    };

    return {
        searchQuery,
        filteredEvents,
        handleSearch
    };
};
