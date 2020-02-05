import React from 'react';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './store';

import { Account } from './features';

const AppWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: Roboto;
`;

const App = () => (
    <Provider store={store}>
        <AppWrapper>
            <Account />
        </AppWrapper>
    </Provider>
);

export default App;
