import React from 'react';
import ReactDOM from 'react-dom';
//import react-redux provider
import { Provider } from 'react-redux';
import AppRouter from './routers/AppRouter';

import configureStore from './store/configureStore';
// node_module 에서 normalize.css import
//webpack에서 scss 설정을 css에서 적용되도록 중간에 '?' 추가 해줘야 함
import 'normalize.css/normalize.css';
import './styles/styles.scss';
import 'react-dates/lib/css/_datepicker.css';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';

const store = configureStore();

// const expenseOne = store.dispatch(
//   addExpense({ description: 'Water bill', amount: 4500 })
// );
// const expenseTwo = store.dispatch(
//   addExpense({ description: 'Gas bill', createdAt: 1000 })
// );
// const expenseThree = store.dispatch(
//   addExpense({ description: 'Rent', amount: 109500 })
// );

// setTimeout(() => {
//     store.dispatch(setTextFilter('bill'));
// }, 3000)

const state = store.getState();
const showCurrentState = getVisibleExpenses(state.expenses, state.filters);
console.log('from app.js', showCurrentState);

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
