import React from 'react';
import PropTypes from 'prop-types';

import App from './App';
import { Unauthorized } from './features';
import { createBrowserHistory } from 'history';

const Root = ({
    auth: {
        id,
        token
    },
    history
}) => (
    !id && !token
        ? <Unauthorized />
        : <App history={history} auth={{id, token}} />
);

Root.propTypes = {
    auth: PropTypes.shape({
        id: PropTypes.string,
        token: PropTypes.string
    }),
    history: PropTypes.any
};

Root.defaultProps = {
    auth: {
        id: null,
        token: null
    },
    history: createBrowserHistory()
};

export default Root;
