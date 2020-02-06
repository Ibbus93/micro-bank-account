import React from 'react';
import { Balance, RecentBalanceBox, BodyContainer, OperationContainer, OperationElement, OperationRow } from './styled';
import { Typography } from '@material-ui/core';
import Operation from './Operation';

const BodyAccount = ({
    currency,
    lastBalance,
    lastOperations
}) => (
    <BodyContainer>
        <Typography variant="h4">
            Last operations
        </Typography>
        <OperationContainer>
            <OperationRow fontWeight="bold">
                <OperationElement width="15%"> Date </OperationElement>
                <OperationElement width="25%"> Subject </OperationElement>
                <OperationElement width="25%"> Type </OperationElement>
                <OperationElement width="20%"> Description </OperationElement>
                <OperationElement width="10%" align="right"> Amount </OperationElement>
            </OperationRow>
            { lastOperations.map(operation => (
                 <Operation {...operation} key={operation.id} />
            ))}
        </OperationContainer>
        <RecentBalanceBox align="right" marginTop="1rem">
            <Typography variant="h4">
                Recent balance:
                <Balance color={lastBalance > 0 ? 'green' : 'red'}> {currency} {lastBalance}</Balance>
            </Typography>
        </RecentBalanceBox>
    </BodyContainer>
);

export default BodyAccount;
