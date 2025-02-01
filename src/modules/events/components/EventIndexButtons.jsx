import React from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const EventIndexButtons = ({addNewEvent}) => {
    return (
        <Button onClick={addNewEvent}>
            Add new event
        </Button>
    );
};

EventIndexButtons.propTypes = {
    addNewEvent: PropTypes.func
};

export default EventIndexButtons;
