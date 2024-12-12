import React from 'react';
import {CardHeader, CardDescription, CardContent, Card, Icon, Image} from 'semantic-ui-react';
import {Link} from 'react-router-dom';
import PropTypes from 'prop-types';

const EventCard = ({image, title, date}) => (
    <Card fluid>
        <div className='image-wrapper'>
            <Image src={image} alt={title} className='event-image'/>
        </div>
        <CardContent>
            <CardHeader>{title}</CardHeader>
            <CardDescription>
                {`Date: ${date}`}
            </CardDescription>
        </CardContent>
        <CardContent extra>
            <Link to='/tabletune/crew'>
                <Icon name='comment alternate outline'/>
                Do I work?
            </Link>
        </CardContent>
    </Card>
);

EventCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    date: PropTypes.string.isRequired
};

export default EventCard;
