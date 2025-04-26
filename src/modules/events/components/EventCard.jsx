import React from 'react';
import {CardHeader, CardDescription, CardContent, Card, Icon, Button, ButtonGroup} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const editEvent = () => {
    console.log('edit');
};

const deleteEvent = () => {
    console.log('delete');
};

const EventCard = ({title, supportedByDj, entry, date, isEventSupportedByDj = false}) => (
    <Card color={entry ? 'red' : 'green'} fluid>
        <CardContent>
            <CardHeader>{title}</CardHeader>
            {isEventSupportedByDj && <CardDescription>
                {`Dj: ${supportedByDj}`}
            </CardDescription>}
            <p>Entry: </p>
            <CardDescription
                className={entry ? '--custom-card-description__negative' : '--custom-card-description__positive'}
            >
                {entry ? `${entry}€` : 'Free'}
            </CardDescription>
            <CardDescription>
                {`Date: ${date}`}
            </CardDescription>
        </CardContent>
        <CardContent extra>
            <Link to='/table-tune/crew'>
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
    title: PropTypes.string.isRequired,
    supportedByDj: PropTypes.string.isRequired,
    entry: PropTypes.number,
    date: PropTypes.string.isRequired,
    isEventSupportedByDj: PropTypes.bool,
};

export default EventCard;
