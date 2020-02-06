import React, { useState } from "react";

import { Button } from '@material-ui/core';
import styled from 'styled-components';

import App from '../../App';

const AuthContainer = styled.div`
    padding: 2.5rem;
`;

const Unauthorized = () => {
    const [showAccount, setShowAccount] = useState(false);

    return showAccount
        ? <App />
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
