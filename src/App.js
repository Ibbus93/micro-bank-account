import React from 'react';
import styled from 'styled-components';

import { Provider } from 'react-redux';
import store from './store';

import { Account, Unauthorized } from './features';
import { Box } from "./features/account/components/styled";

const AppWrapper = styled.div`
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    font-family: Roboto;
`;

const App = ({
    auth: {
        id,
        token
    },
}) => (
    !id && !token
        ? <Box><Unauthorized /></Box>
        : (
            <Provider store={store}>
                <AppWrapper>
                    <Account />
                </AppWrapper>
            </Provider>
        )
);

App.defaultProps = {
    auth: {
        id: null,
        token: null
    },
};

export default App;
