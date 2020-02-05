import account from './bank-account/reducer';
import { combineReducers } from 'redux';

const rootReducer = combineReducers({
    account
});

export default rootReducer;
