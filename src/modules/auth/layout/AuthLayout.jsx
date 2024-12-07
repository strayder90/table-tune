import React from 'react';
import PropTypes from 'prop-types';
import {Container, Segment} from 'semantic-ui-react';

const AuthLayout = ({children}) => {
    return (
        <Container text>
            <Segment className='auth-layout' padded='very'>
                <main className='auth-main'>{children}</main>
            </Segment>
        </Container>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node
};

export default AuthLayout;
