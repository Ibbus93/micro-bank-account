import React, { useState } from "react";

import { Button } from '@material-ui/core';
import styled from 'styled-components';

import App from '../../App';

const AuthContainer = styled.div`
    padding: 2.5rem;
`;

const Unauthorized = () => {
    const [showAccount, setShowAccount] = useState(false);
    const auth = {
        id: '24482ad6-bee7-4a9f-b597-2673ed5f7752',
        token: 'token'
    };

    return showAccount
        ? <App auth={auth} />
        : (
            <AuthContainer>
                <h2>You are not authorized to access to this content</h2>
                <Button
                    onClick={() => setShowAccount(true)}
                    variant="contained"
                    color="primary"
                >
                    Show Account anyway
                </Button>
            </AuthContainer>
        );
};

export default Unauthorized;
