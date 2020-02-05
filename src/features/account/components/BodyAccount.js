import React from 'react';
import { BodyContainer, Box } from './styled';
import { Typography } from '@material-ui/core';
import Operation from './Operation';

const BodyAccount = ({
    lastBalance,
    lastOperations
}) => (
    <BodyContainer>
        <Typography variant="h4">Recent balance: { lastBalance }</Typography>
        { lastOperations.map(operation => (
             <Operation {...operation} />
        ))}
    </BodyContainer>
);

export default BodyAccount;
