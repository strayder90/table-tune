import React from 'react';
import {Box, List, ListItemText, Divider, ListItem, Typography, Button, CardContent} from '@mui/material';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';
import {useDispatch} from 'react-redux';

import {logoutUser} from '@/redux/authentication/authActions.js';

const CustomNavigationMenu = ({title, items}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleLogout = () => {
        dispatch(logoutUser());
        navigate('/');
    };

    const handleNavigation = (path) => {
        navigate(path);
    };

    return (
        <Box className='--menuPage'>
            <CardContent className='--menuPage_cardContent'>
                <Typography variant='h4'>
                    {title}
                </Typography>

                <List component='nav'>
                    {items.map((item, index) => (
                        <React.Fragment key={item.label}>
                            <ListItem disableGutters onClick={() => handleNavigation(item.path)}>
                                <ListItemText primary={item.label}/>
                            </ListItem>
                            {index < items.length - 1 && <Divider/>}
                        </React.Fragment>
                    ))}
                </List>

                <div className='--menu_button'>
                    <Button
                        variant='contained'
                        onClick={handleLogout}
                    >
                        Log out
                    </Button>
                </div>
            </CardContent>
        </Box>
    );
};

CustomNavigationMenu.propTypes = {
    title: PropTypes.string,
    items: PropTypes.array
};

export default CustomNavigationMenu;
