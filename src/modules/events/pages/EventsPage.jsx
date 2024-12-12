import React from 'react';
import {GridRow, GridColumn, Grid} from 'semantic-ui-react';

import EventCard from '@modules/events/components/EventCard.jsx';

const events = [
    {
        id: 1,
        image: '/src/assets/images/Andreana Cekic.jpg',
        title: 'Breskvica',
        date: '13.12.2024'
    },
    {
        id: 2,
        image: '/src/assets/images/Djani.jpg',
        title: 'Djani',
        date: '14.12.2024'
    },
    {
        id: 3,
        image: '/src/assets/images/Edita & Cvija.jpg',
        title: 'Edita & Cvija',
        date: '15.12.2024'
    },
    {
        id: 4,
        image: '/src/assets/images/Ladies night.jpg',
        title: 'Ladies Night',
        date: '16.12.2024'
    },
    {
        id: 5,
        image: '/src/assets/images/Barbara Bobak.jpg',
        title: 'Barbara Bobak',
        date: '18.12.2024'
    },
    {
        id: 6,
        image: '/src/assets/images/Breskvica.jpg',
        title: 'Breskvica',
        date: '13.12.2024'
    },
    {
        id: 7,
        image: '/src/assets/images/Djani.jpg',
        title: 'Djani',
        date: '14.12.2024'
    },
    {
        id: 8,
        image: '/src/assets/images/Edita & Cvija.jpg',
        title: 'Edita & Cvija',
        date: '15.12.2024'
    },
    {
        id: 9,
        image: '/src/assets/images/Ladies night.jpg',
        title: 'Ladies Night',
        date: '16.12.2024'
    },
    {
        id: 10,
        image: '/src/assets/images/Rasta.jpg',
        title: 'Rasta',
        date: '17.12.2024'
    },
    {
        id: 11,
        image: '/src/assets/images/Barbara Bobak.jpg',
        title: 'Barbara Bobak',
        date: '18.12.2024'
    },
    {
        id: 12,
        image: '/src/assets/images/Breskvica.jpg',
        title: 'Breskvica',
        date: '13.12.2024'
    },
    {
        id: 13,
        image: '/src/assets/images/Djani.jpg',
        title: 'Djani',
        date: '14.12.2024'
    },
    {
        id: 14,
        image: '/src/assets/images/Edita & Cvija.jpg',
        title: 'Edita & Cvija',
        date: '15.12.2024'
    },
    {
        id: 15,
        image: '/src/assets/images/Ladies night.jpg',
        title: 'Ladies Night',
        date: '16.12.2024'
    },
    {
        id: 16,
        image: '/src/assets/images/Rasta.jpg',
        title: 'Rasta',
        date: '17.12.2024'
    },
    {
        id: 17,
        image: '/src/assets/images/Barbara Bobak.jpg',
        title: 'Barbara Bobak',
        date: '18.12.2024'
    },
    {
        id: 18,
        image: '/src/assets/images/Andreana Cekic.jpg',
        title: 'Rasta',
        date: '17.12.2024'
    }
];

const EventsPage = () => {
    return (
        <Grid className={'--custom-grid'} columns={6}>
            <GridRow>
                {events.map((event) => (
                    <GridColumn key={event.id}>
                        <EventCard
                            image={event.image}
                            title={event.title}
                            date={event.date}
                        />
                    </GridColumn>
                ))}
            </GridRow>
        </Grid>
    );
};

export default EventsPage;
