import React from 'react';
import {
    List,
    ListItemButton,
    ListItemText,
    ListItemIcon,
    Paper,
    Divider
} from '@mui/material';
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom';

const CustomList = ({data}) => {
    const navigate = useNavigate();
    const handleNavigation = (path) => {
        console.log('clicked');
        navigate(path);
    };

    return (
        <Paper>
            <List>
                {data.map((user, index) => (
                    <React.Fragment key={user.id}>
                        <ListItemButton>
                            <ListItemText
                                primary={user.name}
                                secondary={`${user.email} - ${user.role} - ${user.status}`}
                            />
                            {user.actions && (
                                <ListItemIcon
                                    sx={{minWidth: 'auto'}}
                                    onClick={() => handleNavigation()}
                                >
                                    {user.actions}
                                </ListItemIcon>
                            )}
                        </ListItemButton>
                        {index !== data.length - 1 && <Divider/>}
                    </React.Fragment>
                ))}
            </List>
        </Paper>
    );
};

CustomList.propTypes = {
    data: PropTypes.arrayOf(PropTypes.object),
};

export default CustomList;
