import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
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
    }, [data, getAccount]);

    return isLoading
        ? <CircularProgress />
        : (
            <Container>
                <Account { ...data } />
            </Container>
        );
};

AccountContainer.propTypes = {
    getAccount: PropTypes.func
};

AccountContainer.defaultProps = {
    getAccount: () => {}
};

const dispatchToProps = {
    getAccount: requestAccount
};

export default connect(null, dispatchToProps)(AccountContainer);
