import React from 'react';
import PropTypes from 'prop-types';
import {Button, Divider, Header, Image, Segment} from 'semantic-ui-react';
import {Link, useLocation} from 'react-router-dom';

const AuthLayout = ({children}) => {
    const {pathname} = useLocation();

    return (
        <div className='--auth-layout-container'>
            <Segment className='--auth-layout'>
                <main className='--auth-main'>
                    <Header as='h2' icon textAlign='center'>
                        <Image
                            src='/favicon.svg'
                            size='massive'
                            alt='Logo'
                            circular
                        />
                    </Header>

                    {pathname === '/signup' && (
                        <>
                            <h1>
                                Create a new account
                            </h1>
                            <p>It’s quick and easy.</p>
                        </>
                    )}

                    {children}

                    <Divider horizontal>Or</Divider>

                    {pathname === '/' && (
                        <>
                            <p>
                                <Link to='#'>Forgot password?</Link>
                            </p>
                            <p>
                                <Link to='/signup'>
                                    <Button className='--custom-button-submit' positive>
                                        Create new account
                                    </Button>
                                </Link>
                            </p>
                        </>
                    )}

                    {pathname === '/signup' && (
                        <p>
                            <Link to='/'>Already have an account?</Link>
                        </p>
                    )}
                </main>
            </Segment>
        </div>
    );
};

AuthLayout.propTypes = {
    children: PropTypes.node
};

export default AuthLayout;
