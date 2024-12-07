import React from 'react';
import {Button} from 'semantic-ui-react';
import {useNavigate} from 'react-router-dom';

const HomePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('isAuthenticated');

        navigate('/login');
    };

    return (
        <>
            <h1>Welcome to the Home Page!</h1>
            <Button color='red' onClick={handleLogout}>Logout</Button>
        </>
    );
};

export default HomePage;
