import React, { useState } from "react";

import { Button } from '@material-ui/core';
import styled from 'styled-components';

import App from '../../App';

const AuthContainer = styled.div`
    padding: 2.5rem;
`;

const Unauthorized = () => {
    const [viewAccount, setViewAccount] = useState(false);

    return viewAccount
        ? <App />
        : (
            <AuthContainer>
                <h2>You are not authorized to access to this content</h2>
                <Button
                    onClick={() => setViewAccount(true)}
                    variant="contained"
                    color="primary"
                >
                    View Account anyway
                </Button>
            </AuthContainer>
        );
};

export default Unauthorized;
