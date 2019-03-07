import moment from 'moment';
import expensesReducer from '../../reducers/expenses';
import expenses from '../fixture/expenses';

test('default test', () => {
  const expense = expenses[0];
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(undefined, action);
  expect(state[0]).toBe(expenses[0]);
});
