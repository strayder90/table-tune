import React from 'react';
import {Button} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const UsersIndexButtons = ({addNewUser}) => {
    return (
        <Button onClick={addNewUser}>
            Add new user
        </Button>
    );
};

UsersIndexButtons.propTypes = {
    addNewUser: PropTypes.func
};

export default UsersIndexButtons;
