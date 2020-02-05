import { createActions } from 'redux-actions';

const DOMAIN = "@account";

const TYPES = {
    REQUEST_ACCOUNT: `${DOMAIN}/REQUEST_ACCOUNT`,
    RECEIVED_ACCOUNT: `${DOMAIN}/RECEIVED_ACCOUNT`,
    ACCOUNT_ERROR: `${DOMAIN}/ACCOUNT_ERROR`
};

const { requestAccount, receivedAccount, accountError } = createActions({
    [TYPES.REQUEST_ACCOUNT]: null,
    [TYPES.RECEIVED_ACCOUNT]: ({ account }) => ({ account }),
    [TYPES.ACCOUNT_ERROR]: ({ error }) => ({ error })
}).account;

export {
    TYPES,
    accountError,
    requestAccount,
    receivedAccount
};
