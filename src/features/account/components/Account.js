import React from 'react';
import PropTypes from 'prop-types';

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

        return total > 0 ? `${currency} ${total}` : `- ${currency} ${total * (-1)}`;
    };

    return (
        <Box>
            <HeaderAccount balance={balance} currency={currency} holder={holder} iban={iban} />
            { !!lastOperations && (
                <BodyAccount lastOperations={lastOperations} lastBalance={getLastOperationsBalance()} currency={currency} />
            )}
        </Box>
    );
};

Account.propTypes = {
    holder: PropTypes.string,
    iban: PropTypes.string,
    balance: PropTypes.number,
    currency: PropTypes.string,
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

Account.defaultProps = {
    holder: '',
    iban: '',
    balance: 0,
    currency: '',
    lastOperations: []
};

export default Account;
