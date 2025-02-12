import React from 'react';
import PropTypes from 'prop-types';
import {Button, Modal, ModalActions, Icon} from 'semantic-ui-react';

const CustomModal = ({
    className,
    header,
    content,
    isVisible,
    dimmer,
    onClose,
    size = 'tiny',
    actionButtons = false,
    method = () => {}
}) => {
    return (
        <Modal
            className={className}
            open={isVisible}
            onClose={onClose}
            dimmer={dimmer ? dimmer : ''}
            size={size}
            closeIcon
        >
            <Modal.Header>{header}</Modal.Header>
            <Modal.Content>
                {content}
            </Modal.Content>

            {
                actionButtons && <ModalActions>
                    <Button color='green' onClick={() => method()}>
                        <Icon name='checkmark' /> Yes
                    </Button>
                    <Button color='red' onClick={() => method()}>
                        <Icon name='remove' /> No
                    </Button>
                </ModalActions>
            }
        </Modal>
    );
};

CustomModal.propTypes = {
    className: PropTypes.string,
    header: PropTypes.string,
    isVisible: PropTypes.bool,
    dimmer: PropTypes.string,
    size: PropTypes.string,
    content: PropTypes.node,
    onClose: PropTypes.func,
    actionButtons: PropTypes.bool,
    method: PropTypes.func
};
export default CustomModal;
