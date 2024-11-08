import PropTypes from 'prop-types';
import {Container, Header, Segment} from 'semantic-ui-react';

const AuthLayout = ({children}) => {
    return (
        <Container text>
            <Segment className='auth-layout' padded='very'>
                <Header as='h2' textAlign='center'>
                    Welcome
                </Header>
                <p style={{textAlign: 'center'}}>Please sign up to continue</p>
                <main className='auth-main'>{children}</main>
            </Segment>
        </Container>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node
};

export default AuthLayout;
