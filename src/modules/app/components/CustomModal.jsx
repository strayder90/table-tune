import React from 'react';
import PropTypes from 'prop-types';
import {Modal} from 'semantic-ui-react';

const CustomModal = ({
    className,
    header,
    isVisible,
    dimmer,
    content,
    onClose
}) => {
    return (
        <Modal
            className={className}
            open={isVisible}
            onClose={onClose}
            dimmer={dimmer ? dimmer : ''}
            size='tiny'
        >
            <Modal.Header>{header}</Modal.Header>
            <Modal.Content>
                {content}
            </Modal.Content>
        </Modal>
    );
};

CustomModal.propTypes = {
    className: PropTypes.string,
    header: PropTypes.string,
    isVisible: PropTypes.bool,
    dimmer: PropTypes.string,
    content: PropTypes.node,
    onClose: PropTypes.func
};
export default CustomModal;
