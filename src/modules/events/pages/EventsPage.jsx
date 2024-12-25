import React, {useState} from 'react';
import {GridRow, GridColumn, Grid, Pagination} from 'semantic-ui-react';

import EventCard from '@modules/events/components/EventCard.jsx';
import {EVENTS_PER_PAGE} from '@/utils/constants.js';
import {rangeOfEventsToBeDisplayed} from '@modules/events/utils/helpers.js';
import HeaderRenderer from '@appComponents/HeaderRenderer.jsx';
import EventFilters from '@modules/events/components/EventFilters.jsx';
import EventIndexButtons from '@modules/events/components/EventIndexButtons.jsx';

import {events} from '../data/events.js';

const EventsPage = () => {
    const [activePage, setActivePage] = useState(1);
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredEvents, setFilteredEvents] = useState(events);

    const currentEvents = rangeOfEventsToBeDisplayed(filteredEvents, activePage);

    const handlePageChange = (e, {activePage}) => setActivePage(activePage);

    const handleSearch = (query) => {
        setSearchQuery(query);

        let filtered = events.filter((event) => event.title.toLowerCase().includes(query.toLowerCase()));

        if (filtered.length === 0 && query) {
            filtered = events.filter((event) => event.date.toLowerCase().includes(query.toLowerCase()));
        }

        setFilteredEvents(filtered);
    };

    return (
        <>
            <HeaderRenderer
                className='--event-form-section'
                pageTitle={'Andreana Cekic - FR, 13.12.2024 - 20€'}
                filters={EventFilters}
                buttons={EventIndexButtons}
            />
            <Grid className='--event-content-section' columns={6}>
                <GridRow>
                    {currentEvents.map((event) => (
                        <GridColumn key={event.id} mobile={16} computer={4}>
                            <EventCard
                                image={event.image}
                                title={event.title}
                                date={event.date}
                                entry={event.entry}
                            />
                        </GridColumn>
                    ))}
                </GridRow>
            </Grid>

            {filteredEvents.length > 0 && (
                <div className='--pagination-container'>
                    <Pagination
                        defaultActivePage={1}
                        firstItem={null}
                        lastItem={null}
                        totalPages={Math.ceil(filteredEvents.length / EVENTS_PER_PAGE)}
                        onPageChange={handlePageChange}
                    />
                </div>
            )}
        </>
    );
};

export default EventsPage;
