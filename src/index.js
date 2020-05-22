import React from 'react';
import ReactDOM from 'react-dom';

import Root from './Root';
import './index.css';

ReactDOM.render(
  <Root history={history} auth={auth} />,
  document.getElementById(containerId),
);
