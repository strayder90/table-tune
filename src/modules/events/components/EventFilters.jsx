import React from 'react';
import {Form, Input} from 'semantic-ui-react';

const EventFilters = () => {
    return (
        <>
            <Form.Field
                as={Input}
                icon='search'
                placeholder='Search...'
                type='text'
            />
        </>
    );
};

export default EventFilters;
