import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect, useSelector } from 'react-redux';

import { CircularProgress } from '@material-ui/core';
import { Account } from './components';
import { Container } from './components/styled'

import { Selector } from '../../store/bank-account/reducer';
import { requestAccount } from '../../store/bank-account/actions';

const AccountContainer = ({
    auth: {
        id,
        token
    },
    getAccount
}) => {
    const { data, isLoading } = useSelector(Selector.getAccount);

    useEffect(() => {
        if (!data) {
            getAccount({ id, token });
        }
    }, [data, getAccount, id, token]);

    return isLoading
        ? <CircularProgress />
        : (
            <Container>
                <Account { ...data } />
            </Container>
        );
};

AccountContainer.propTypes = {
    auth: PropTypes.shape({
        id: PropTypes.string,
        token: PropTypes.string
    }),
    getAccount: PropTypes.func
};

AccountContainer.defaultProps = {
    getAccount: () => {}
};

const dispatchToProps = {
    getAccount: requestAccount
};

export default connect(null, dispatchToProps)(AccountContainer);
