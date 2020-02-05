import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';
import './index.css';

window.renderBankAccount = (containerId, history, handler) => {
    ReactDOM.render(
        <App history={history} handler={handler} />,
        document.getElementById(containerId)
    );
};

window.unmountBankAccount = (containerId) => {
    ReactDOM.unmountComponentAtNode(document.getElementById(containerId))
};
