import { call, put, takeLatest } from 'redux-saga/effects';

import { TYPES, receivedAccount, accountError } from './actions';
import { getAccount } from '../../api';

function* fetchAccount({ payload: { id, token }}) {
    try {
        const account = yield call(getAccount, { id, token });

        yield put(receivedAccount({ account }));
    } catch (e) {
        console.error(e);
        yield put(accountError(e));
    }
}

const accountSagas = [
    takeLatest(TYPES.REQUEST_ACCOUNT, fetchAccount)
];

export default accountSagas;
