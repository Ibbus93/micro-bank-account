import React from 'react';

import App from './App';
import { Unauthorized } from './features';

const Root = ({
    auth: {
        id,
        token
    },
}) => (
    !id && !token
        ? <Unauthorized />
        : <App />
);

Root.defaultProps = {
    auth: {
        id: null,
        token: null
    },
};

export default Root;
