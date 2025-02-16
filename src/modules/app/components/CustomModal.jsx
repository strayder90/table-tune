import React from 'react';
import PropTypes from 'prop-types';
import { Button, Modal, ModalActions, Icon } from 'semantic-ui-react';

const CustomModal = ({
    modalType = 'create',
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
    let actionButtonText = 'Save';
    let actionButtonColor = 'linkedin';
    let cancelButtonText = 'Close';
    let cancelButtonColor = 'grey';

    if (modalType === 'update') {
        actionButtonText = 'Update';
        actionButtonColor = 'orange';
    } else if (modalType === 'delete') {
        actionButtonText = 'Yes';
        actionButtonColor = 'green';
        cancelButtonText = 'No';
        cancelButtonColor = 'red';
    }

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
            <Modal.Content>{content}</Modal.Content>

            {actionButtons && (
                <ModalActions>
                    <Button color={actionButtonColor} onClick={() => method()}>
                        <Icon name='checkmark'/> {actionButtonText}
                    </Button>
                    <Button color={cancelButtonColor} onClick={() => method()}>
                        <Icon name='remove'/> {cancelButtonText}
                    </Button>
                </ModalActions>
            )}
        </Modal>
    );
};

CustomModal.propTypes = {
    modalType: PropTypes.string,
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
