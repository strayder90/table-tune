import React, {useState} from 'react';
import {GridRow, GridColumn, Grid, Pagination} from 'semantic-ui-react';

import EventCard from '@modules/events/components/EventCard.jsx';
import {EVENTS_PER_PAGE} from '@/utils/constants.js';
import {rangeOfEventsToBeDisplayed} from '@modules/events/utils/helpers.js';

const events = [
    {id: 1, image: '/src/assets/images/Andreana Cekic.jpg', title: 'Andreana Cekic', date: '13.12.2024', entry: 22},
    {id: 2, image: '/src/assets/images/Djani.jpg', title: 'Djani', date: '14.12.2024'},
    {id: 3, image: '/src/assets/images/Edita & Cvija.jpg', title: 'Edita & Cvija', date: '15.12.2024'},
    {id: 4, image: '/src/assets/images/Ladies night.jpg', title: 'Ladies Night', date: '16.12.2024'},
    {id: 5, image: '/src/assets/images/Barbara Bobak.jpg', title: 'Barbara Bobak', date: '18.12.2024'},
    {id: 6, image: '/src/assets/images/Breskvica.jpg', title: 'Breskvica', date: '13.12.2024'},
    {id: 7, image: '/src/assets/images/Djani.jpg', title: 'Djani', date: '14.12.2024'},
    {id: 8, image: '/src/assets/images/Edita & Cvija.jpg', title: 'Edita & Cvija', date: '15.12.2024'},
    {id: 9, image: '/src/assets/images/Ladies night.jpg', title: 'Ladies Night', date: '16.12.2024'},
    {id: 10, image: '/src/assets/images/Rasta.jpg', title: 'Rasta', date: '17.12.2024'},
    {id: 11, image: '/src/assets/images/Barbara Bobak.jpg', title: 'Barbara Bobak', date: '18.12.2024'},
    {id: 12, image: '/src/assets/images/Breskvica.jpg', title: 'Breskvica', date: '13.12.2024'},
    {id: 13, image: '/src/assets/images/Djani.jpg', title: 'Djani', date: '14.12.2024'},
    {id: 14, image: '/src/assets/images/Edita & Cvija.jpg', title: 'Edita & Cvija', date: '15.12.2024'},
    {id: 15, image: '/src/assets/images/Ladies night.jpg', title: 'Ladies Night', date: '16.12.2024'},
    {id: 16, image: '/src/assets/images/Rasta.jpg', title: 'Rasta', date: '17.12.2024'},
    {id: 17, image: '/src/assets/images/Barbara Bobak.jpg', title: 'Barbara Bobak', date: '18.12.2024'},
    {id: 18, image: '/src/assets/images/Andreana Cekic.jpg', title: 'Rasta', date: '17.12.2024'},
    {id: 19, image: '/src/assets/images/Andreana Cekic.jpg', title: 'Breskvica', date: '13.12.2024'},
    {id: 20, image: '/src/assets/images/Djani.jpg', title: 'Djani', date: '14.12.2024'},
    {id: 21, image: '/src/assets/images/Edita & Cvija.jpg', title: 'Edita & Cvija', date: '15.12.2024'},
    {id: 22, image: '/src/assets/images/Ladies night.jpg', title: 'Ladies Night', date: '16.12.2024'},
    {id: 23, image: '/src/assets/images/Barbara Bobak.jpg', title: 'Barbara Bobak', date: '18.12.2024'},
    {id: 24, image: '/src/assets/images/Breskvica.jpg', title: 'Breskvica', date: '13.12.2024'},
    {id: 25, image: '/src/assets/images/Djani.jpg', title: 'Djani', date: '14.12.2024'},
    {id: 26, image: '/src/assets/images/Edita & Cvija.jpg', title: 'Edita & Cvija', date: '15.12.2024'},
    {id: 27, image: '/src/assets/images/Ladies night.jpg', title: 'Ladies Night', date: '16.12.2024'},
    {id: 28, image: '/src/assets/images/Rasta.jpg', title: 'Rasta', date: '17.12.2024'},
    {id: 29, image: '/src/assets/images/Barbara Bobak.jpg', title: 'Barbara Bobak', date: '18.12.2024'},
    {id: 30, image: '/src/assets/images/Breskvica.jpg', title: 'Breskvica', date: '13.12.2024'},
    {id: 31, image: '/src/assets/images/Djani.jpg', title: 'Djani', date: '14.12.2024'},
    {id: 32, image: '/src/assets/images/Edita & Cvija.jpg', title: 'Edita & Cvija', date: '15.12.2024'},
    {id: 33, image: '/src/assets/images/Ladies night.jpg', title: 'Ladies Night', date: '16.12.2024'},
    {id: 34, image: '/src/assets/images/Rasta.jpg', title: 'Rasta', date: '17.12.2024'},
    {id: 35, image: '/src/assets/images/Barbara Bobak.jpg', title: 'Barbara Bobak', date: '18.12.2024'},
    {id: 36, image: '/src/assets/images/Andreana Cekic.jpg', title: 'Rasta', date: '17.12.2024'}
];

const EventsPage = () => {
    const [activePage, setActivePage] = useState(1);
    const currentEvents = rangeOfEventsToBeDisplayed(events, activePage);

    const handlePageChange = (e, {activePage}) => setActivePage(activePage);

    return (
        <div>
            <Grid columns={6}>
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

            <div className='--pagination-container'>
                <Pagination
                    defaultActivePage={1}
                    firstItem={null}
                    lastItem={null}
                    totalPages={Math.ceil(events.length / EVENTS_PER_PAGE)}
                    onPageChange={handlePageChange}
                />
            </div>
        </div>
    );
};

export default EventsPage;
