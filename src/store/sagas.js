import { all } from 'redux-saga/effects';

import accountSagas from './bank-account/saga';

function* rootSaga() {
    yield all([
        ...accountSagas
    ]);
}

export default rootSaga;
