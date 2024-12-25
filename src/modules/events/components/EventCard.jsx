import React from 'react';
import {CardHeader, CardDescription, CardContent, Card, Icon, Image, Button, ButtonGroup} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

import {DEFAULT_NO_IMAGE} from '@/utils/constants.js';

const editEvent = () => {
    console.log('edit');
};

const deleteEvent = () => {
    console.log('delete');
};

const EventCard = ({image, title, date, entry}) => (
    <Card color={entry ? 'red' : 'green'} fluid>
        <div className='image-wrapper'>
            <Image className='event-image' src={image ? image : DEFAULT_NO_IMAGE}/>
        </div>
        <CardContent>
            <CardHeader>{title}</CardHeader>
            <CardDescription>
                {`Date: ${date}`}
            </CardDescription>
            <p>Entry: </p>
            <CardDescription
                className={entry ? '--custom-card-description-negative' : '--custom-card-description-positive'}
            >
                {entry ? `${entry}€` : 'Free'}
            </CardDescription>
        </CardContent>
        <CardContent extra>
            <Link to='/tabletune/crew'>
                <Icon name='comment alternate outline'/>
                Do I work?
            </Link>
            <div className='icon-container'>
                <ButtonGroup>
                    <Button onClick={editEvent} basic>
                        <Icon name='edit' color='orange' size='large'/>
                    </Button>
                    <Button onClick={deleteEvent} basic>
                        <Icon name='trash' color='black' size='large'/>
                    </Button>
                </ButtonGroup>
            </div>
        </CardContent>
    </Card>
);

EventCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired,
    entry: PropTypes.number
};

export default EventCard;
