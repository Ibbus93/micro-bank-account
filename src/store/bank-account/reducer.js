import { handleActions } from 'redux-actions';

import { requestAccount, receivedAccount, accountError } from './actions';

const defaultState = {
    isLoading: false,
    data: null
};

const reducer = handleActions({
    [requestAccount]: state => Object.assign({}, state, { isLoading: true }),
    [receivedAccount]: (state, { payload: { account: { data } } }) => (
        Object.assign({}, state, { data, isLoading: false})
    ),
    [accountError]: (state, { payload: { error }}) => ({ isLoading: false, error }),
}, defaultState);

const Selector = {
    getAccount: state => state.account
};

export default reducer;

export { Selector };
