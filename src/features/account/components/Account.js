import React from 'react';

import { Box } from './styled';
import HeaderAccount from './HeaderAccount';
import BodyAccount from './BodyAccount';

const Account = ({
    holder,
    iban,
    balance,
    currency,
    lastOperations,
}) => {

    const getLastOperationsBalance = () => {
        let total = 0;

        for (const operation of lastOperations) {
            total += operation.type === 'increase' ? operation.amount : (-operation.amount);
        }

        return total;
    };

    return (
        <Box>
            <HeaderAccount balance={balance} currency={currency} holder={holder} iban={iban} />
            { !!lastOperations && (
                <BodyAccount lastOperations={lastOperations} lastBalance={getLastOperationsBalance()} />
            )}
        </Box>
    );
};

export default Account;
