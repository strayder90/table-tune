import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Button, Modal} from 'semantic-ui-react';
import {Navigate} from 'react-router-dom';

class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hasError: false,
            error: null,
            errorInfo: null,
            modalOpen: false,
            redirectTo: null
        };
    }

    static getDerivedStateFromError() {
        return {hasError: true};
    }

    componentDidCatch(error, errorInfo) {
        this.setState({error, errorInfo, modalOpen: true});
    }

    handleRedirect = () => {
        // TODO: probably needs to change in time
        this.setState({redirectTo: '/signup'});
    };

    render() {
        if (this.state.hasError) {
            if (this.state.redirectTo) {
                return <Navigate to={this.state.redirectTo}/>;
            }

            return (
                <Modal
                    open={this.state.modalOpen}
                    size='small'
                    dimmer='blurring'
                >
                    <Modal.Header>Error</Modal.Header>
                    <Modal.Content>
                        <h2>Something went wrong!</h2>
                        <p>{this.state.error?.message || 'An unexpected error occurred.'}</p>
                    </Modal.Content>
                    <Modal.Actions>
                        <Button negative onClick={this.handleRedirect}>
                            Login again
                        </Button>
                    </Modal.Actions>
                </Modal>
            );
        }

        return this.props.children;
    }
}

ErrorBoundary.propTypes = {
    children: PropTypes.node
};

export default ErrorBoundary;
