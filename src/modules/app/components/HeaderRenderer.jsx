import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'semantic-ui-react';

const HeaderRenderer = ({
    className = '',
    pageTitle = '',
    filters = null,
    buttons = null
}) => {
    return (
        <>
            <header>
                <Header
                    as='h1'
                    color='black'
                    textAlign='left'
                    dividing={!!pageTitle}
                >
                    {pageTitle}
                </Header>
            </header>

            {filters && buttons && (
                <section className={className}>
                    {React.createElement(filters)}
                    {React.createElement(buttons)}
                </section>
            )}
        </>
    );
};

HeaderRenderer.propTypes = {
    pageTitle: PropTypes.string,
    filters: PropTypes.func,
    buttons: PropTypes.func,
    className: PropTypes.string
};

export default HeaderRenderer;
