import React, {useState} from 'react';
import {GridRow, GridColumn, Grid, Pagination, Message} from 'semantic-ui-react';

import {useEventFilters} from '@modules/events/hooks/useEventFilters';
import EventCard from '@modules/events/components/EventCard.jsx';
import {EVENTS_PER_PAGE} from '@/utils/constants.js';
import {rangeOfEventsToBeDisplayed, calculateTotalPages} from '@modules/events/utils/helpers.js';
import HeaderRenderer from '@appComponents/HeaderRenderer.jsx';
import EventFilters from '@modules/events/components/EventFilters.jsx';
import EventIndexButtons from '@modules/events/components/EventIndexButtons.jsx';
import AddEventForm from '@modules/events/forms/AddEventForm.jsx';
import {showFormModal} from '@utils/formHelpers.jsx';

import {events} from '../data/events.js';

const EventsPage = () => {
    const [activePage, setActivePage] = useState(1);
    const [isVisible, setIsVisible] = useState(false);
    const {searchQuery, filteredEvents, handleSearch} = useEventFilters(events);
    const currentEvents = rangeOfEventsToBeDisplayed(filteredEvents, activePage);

    const toggleModalShow = () => setIsVisible((prevState) => !prevState);

    const handlePageChange = (e, {activePage}) => setActivePage(activePage);

    const renderEventCards = (currentEvents) =>
        currentEvents?.map((event) => (
            <GridColumn key={event.id} mobile={16} computer={4}>
                <EventCard
                    image={event.image}
                    title={event.title}
                    date={event.date}
                    entry={event.entry}
                />
            </GridColumn>
        ));

    return (
        <>
            <HeaderRenderer
                className='--event-form-section'
                pageTitle={'Andreana Cekic - FR, 13.12.2024 - 20€'}
                buttons={EventIndexButtons}
                buttonsProps={{addNewEvent: toggleModalShow}}
                filters={EventFilters}
                filtersProps={{searchQuery, handleSearch}}
            />

            {currentEvents && filteredEvents.length > 0 ? (
                <>
                    <Grid className='--event-content-section'>
                        <GridRow>{renderEventCards(currentEvents)}</GridRow>
                    </Grid>

                    <div className='--pagination-container'>
                        <Pagination
                            defaultActivePage={1}
                            firstItem={null}
                            lastItem={null}
                            totalPages={calculateTotalPages(filteredEvents.length, EVENTS_PER_PAGE)}
                            onPageChange={handlePageChange}
                        />
                    </div>
                </>
            ) : (
                <Message
                    className='--no-events-message'
                    icon='calendar times outline'
                    header='No events found'
                />
            )}

            {
                showFormModal({
                    className: '--addEventForm__modal',
                    isVisible: isVisible,
                    onClose: toggleModalShow,
                    header: 'Add new Event',
                    children: <AddEventForm onClose={toggleModalShow}/>
                })
            }
        </>
    );
};

export default EventsPage;
