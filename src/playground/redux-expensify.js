// combineReducers - 일종의 Reducer 트래커인듯?
import { createStore, combineReducers } from 'redux';
import uuif from 'uuid';


// Expenses Reducer
const expenseReducerDefaultState = [];
// Reducer for expenses
const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// Filter Reducer
// Filter Reducer default Array
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}

const filterReducers = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        default :
            return state;
    }
}

// Store creattion
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducers
    })
);



console.log(store.getState());


const demoState = {
    expenses: [{
        id: 'askldaks',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}