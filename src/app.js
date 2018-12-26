import React from 'react'
import ReactDOM from 'react-dom';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
// node_module 에서 normalize.css import
//webpack에서 scss 설정을 css에서 적용되도록 중간에 '?' 추가 해줘야 함
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';


const store = configureStore();

const expenseOne = store.dispatch(addExpense({ description: 'water bill', amount: 100, createdAt: 100}));
const expenseTwo = store.dispatch(addExpense({ description: 'gas bill', amount: 200, createdAt: 1000}));
store.dispatch(setTextFilter('water'));


const state = store.getState();
const showCurrentState = getVisibleExpenses(state.expenses, state.filters);
console.log(showCurrentState);






ReactDOM.render(<AppRouter />, document.getElementById('app'));