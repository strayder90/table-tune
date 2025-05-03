import React from 'react';
import {Form, Input} from 'semantic-ui-react';
import PropTypes from 'prop-types';

const CommonFilters = ({
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

CommonFilters.propTypes = {
    searchQuery: PropTypes.string,
    handleSearch: PropTypes.func,
};

export default CommonFilters;
