import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import './index.css';

window.renderBankAccount = (containerId, history, handler, auth) => {
    ReactDOM.render(
        <Root history={history} auth={auth} />,
        document.getElementById(containerId)
    );
};

window.unmountBankAccount = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
};
