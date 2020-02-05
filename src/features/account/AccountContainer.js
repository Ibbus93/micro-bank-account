import React, { useEffect } from 'react';
import { connect, useSelector } from 'react-redux';

import { CircularProgress } from '@material-ui/core';
import { Account } from './components';
import { Container } from './components/styled'

import { Selector } from '../../store/bank-account/reducer';
import { requestAccount } from '../../store/bank-account/actions';

const AccountContainer = ({ getAccount }) => {
    const { data, isLoading } = useSelector(Selector.getAccount);
    const id = '1';

    useEffect(() => {
        if (!data) {
            getAccount({ id });
        }
    }, [data]);

    return isLoading
        ? <CircularProgress />
        : (
            <Container>
                <Account { ...data } />
            </Container>
        );
};

const dispatchToProps = {
    getAccount: requestAccount
};

export default connect(null, dispatchToProps)(AccountContainer);
