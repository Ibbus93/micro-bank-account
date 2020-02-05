import React from 'react';

import { AccountCircle } from '@material-ui/icons';
import { Typography } from '@material-ui/core';

import { AccountIcon, BalanceBox, Header, HolderInfo } from './styled';

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
            <BalanceBox color={balance > 0 ? 'green' : 'red'}>
                <Typography variant="h3">{ `${currency} ${balance}` }</Typography>
            </BalanceBox>
        </AccountIcon>
    </Header>
);

export default HeaderAccount;
