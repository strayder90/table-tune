import React from 'react';
import {Link} from 'react-router-dom';
import {Container, Header, Button, Image, Grid, Icon} from 'semantic-ui-react';

const FallbackPage = () => {
    return (
        <Container className='fallback-page-container'>
            <Grid centered className='fallback-page-grid'>
                <Grid.Row columns={2}>
                    <Grid.Column className='fallback-page-image'>
                        <Image src='/404.jpg' fluid size='large'/>
                    </Grid.Column>
                    <Grid.Column className='fallback-page-text'>
                        <Header as='h1' className='fallback-page-heading'>
                            A W W W... Don&#39;t worry!
                        </Header>
                        <h3>It&#39;s just a 404 Error!</h3>
                        <h3>The page you are looking for might have been removed, deleted or non existing.</h3>
                    </Grid.Column>
                    <Link to='/table-tune'>
                        <Button size='large' color='yellow' className='fallback-page-button'>
                            <Icon name='angle double left'/>
                            Go back to Home
                        </Button>
                    </Link>
                </Grid.Row>
            </Grid>
        </Container>
    );
};

export default FallbackPage;
