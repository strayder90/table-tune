import React from 'react';
import {Dropdown, DropdownItem, DropdownMenu} from 'semantic-ui-react';

const dummyOptions = [
    {key: 'add', icon: 'add', text: 'Add event', value: 'add'},
    {key: 'edit', icon: 'edit', text: 'Edit event', value: 'edit'},
    {key: 'delete', icon: 'delete', text: 'Delete event', value: 'delete'}
];

const EventIndexButtons = () => {
    return (
        <>
            <Dropdown
                text='Menu'
                className='icon --event-index-dropdownButtons'
                direction='left'
                floating
                labeled
                button
            >
                <DropdownMenu>
                    {dummyOptions.map((option) => (
                        <DropdownItem key={option.value} {...option} />
                    ))}
                </DropdownMenu>
            </Dropdown>
        </>
    );
};

EventIndexButtons.propTypes = {};
export default EventIndexButtons;
