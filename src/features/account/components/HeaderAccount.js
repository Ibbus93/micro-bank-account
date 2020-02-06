import React from 'react';
import PropTypes from 'prop-types';

import { AccountCircle } from '@material-ui/icons';
import { Typography } from '@material-ui/core';
import { AccountIcon, Balance, BalanceBox, Header, HolderInfo } from './styled';

const HeaderAccount = ({
    holder,
    iban,
    balance,
    currency,
}) => (
    <Header>
        <AccountIcon>
            <AccountCircle fontSize="inherit" />
            <HolderInfo>
                <Typography variant="h3">{ holder }</Typography>
                <Typography variant="h6">{ iban }</Typography>
            </HolderInfo>
            <BalanceBox>
                <Typography variant="h3">
                    <BalanceBox>
                        <Balance color={balance > 0 ? 'green' : 'red'}>{ `${currency} ${balance}` }</Balance>
                    </BalanceBox>
                </Typography>
            </BalanceBox>
        </AccountIcon>
    </Header>
);

HeaderAccount.propTypes = {
    holder: PropTypes.string,
    iban: PropTypes.string,
    balance: PropTypes.number,
    currency: PropTypes.string,
};

HeaderAccount.defaultProps = {
    holder: '',
    iban: '',
    balance: 0,
    currency: '',
};


export default HeaderAccount;

