import React, {useState} from 'react';
import {GridRow, GridColumn, Grid, Pagination, Button, Icon, Input} from 'semantic-ui-react';

import EventCard from '@modules/events/components/EventCard.jsx';
import {EVENTS_PER_PAGE} from '@/utils/constants.js';
import {rangeOfEventsToBeDisplayed} from '@modules/events/utils/helpers.js';

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
            <Grid columns={6}>
                <div className='--event-form-section'>
                    <Input
                        icon={!searchQuery ? 'search' : null}
                        placeholder='Search...'
                        value={searchQuery}
                        onChange={(e) => handleSearch(e.target.value)}
                        error={searchQuery && !filteredEvents.length}
                    />

                    <Button icon labelPosition='left'>
                        <Icon name='add'/>
                        Add new Event
                    </Button>
                </div>

                <GridRow>
                    {currentEvents.map((event) => (
                        <GridColumn key={event.id} mobile={16} computer={4} largeScreen={4}>
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
