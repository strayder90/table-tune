import React from 'react';
import PropTypes from 'prop-types';
import {Button, Divider, Header, Image, Segment} from 'semantic-ui-react';
import {Link} from 'react-router-dom';

const AuthLayout = ({mode, children}) => {
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

                    {mode === 'signup' && (
                        <>
                            <h1>
                                Create a new account
                            </h1>
                            <p>It’s quick and easy.</p>

                            <Divider/>
                        </>
                    )}

                    {children}

                    <Divider horizontal>Or</Divider>

                    {mode === 'login' && (
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

                    {mode === 'signup' && (
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
    mode: PropTypes.string,
    children: PropTypes.node
};

export default AuthLayout;
