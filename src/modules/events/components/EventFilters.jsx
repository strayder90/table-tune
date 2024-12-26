import React from 'react';
import {Form, Input} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const EventFilters = ({
    searchQuery,
    handleSearch,
}) => {
    return (
        <>
            <Form.Field
                as={Input}
                icon='search'
                placeholder='Search...'
                type='text'
                value={searchQuery}
                onChange={(e) => handleSearch(e.target.value)}
            />
        </>
    );
};

EventFilters.propTypes = {
    searchQuery: PropTypes.string,
    handleSearch: PropTypes.func,
};

export default EventFilters;
