import { createStore, combineReducers } from 'redux';
import expensesReducer from '../reducers/expenses';
import filterReducers from '../reducers/filters'

export default () => {
    // Store creattion
    const store = createStore(
        combineReducers({
            expenses: expensesReducer,
            filters: filterReducers
        })
    );
    return store
};

