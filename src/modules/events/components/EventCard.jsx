import React from 'react';
import {CardHeader, CardDescription, CardContent, Card, Icon, Image, Button, ButtonGroup} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const doIt = () => {
    console.log('edit');
};

const doItElse = () => {
    console.log('delete');
};

const EventCard = ({image, title, date, entry}) => (
    <Card fluid>
        <div className='image-wrapper'>
            <Image src={image} className='event-image'/>
        </div>
        <CardContent>
            <CardHeader>{title}</CardHeader>
            <CardDescription>
                {`Date: ${date}`}
            </CardDescription>
            <p>Entry: </p>
            <CardDescription
                className={entry ? '--custom-card-description-negative' : '--custom-card-description-positive'}
                style={{display: 'inline'}}
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
                    <Button onClick={doIt} basic>
                        <Icon name='edit' color='orange' size='large'/>
                    </Button>
                    <Button onClick={doItElse} basic>
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
    entry: PropTypes.number.isRequired
};

export default EventCard;
