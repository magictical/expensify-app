// combineReducers - 일종의 Reducer 트래커인듯?
import { createStore, combineReducers } from 'redux';

const demoState = {
    expenses: [{
        id: 'askldaks',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }]
}