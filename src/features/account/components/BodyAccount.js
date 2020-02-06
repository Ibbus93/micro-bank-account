import React from 'react';
import PropTypes from 'prop-types';

import Operation from './Operation';
import { Typography } from '@material-ui/core';
import { Balance, RecentBalanceBox, BodyContainer, OperationContainer, OperationElement, OperationRow } from './styled';

const BodyAccount = ({
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
                <Balance color={lastBalance > 0 ? 'green' : 'red'}> {} {lastBalance}</Balance>
            </Typography>
        </RecentBalanceBox>
    </BodyContainer>
);

BodyAccount.propTypes = {
    lastBalance: PropTypes.string,
    lastOperations: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string,
        amount: PropTypes.number,
        holder: PropTypes.string,
        type: PropTypes.string,
        operation: PropTypes.string,
        description: PropTypes.string,
        date: PropTypes.string
    })),
};

BodyAccount.defaultProps = {
    lastBalance: '',
    lastOperations: []
};


export default BodyAccount;
