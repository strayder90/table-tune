import React from 'react';
import PropTypes from 'prop-types';
import {Header} from 'semantic-ui-react';

const HeaderRenderer = ({
    className = '',
    pageTitle = '',
    buttons = null,
    buttonsProps = {},
    filters = null,
    filtersProps = {}
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

            <section className={className}>
                {filters && React.createElement(filters, filtersProps)}
                {buttons && React.createElement(buttons, buttonsProps)}
            </section>
        </>
    );
};

HeaderRenderer.propTypes = {
    pageTitle: PropTypes.string,
    buttons: PropTypes.func,
    buttonsProps: PropTypes.object,
    filters: PropTypes.func,
    filtersProps: PropTypes.object,
    className: PropTypes.string
};

export default HeaderRenderer;
