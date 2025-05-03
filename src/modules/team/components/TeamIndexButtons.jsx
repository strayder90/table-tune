import React from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const TeamIndexButtons = ({addTeamMember}) => {
    return (
        <Button onClick={addTeamMember}>
            Add team
        </Button>
    );
};

TeamIndexButtons.propTypes = {
    addTeamMember: PropTypes.func
};

export default TeamIndexButtons;
