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

test('should remove expense by id', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: expenses[1].id
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense if id not found', () => {
  const action = {
    type: 'REMOVE_EXPENSE',
    id: '-1'
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});

test('should add an expense', () => {
  const expense = {
    id: 4,
    description: 'test',
    note: 'test',
    amount: 0,
    createdAt: undefined
  };
  const action = {
    type: 'ADD_EXPENSE',
    expense
  };
  const state = expensesReducer(expenses, action);
  expect(state[3]).toEqual(expense);
});

test('should edit an expense', () => {
  const updates = {
    amount: 1000,
    createdAt: 0,
    description: 'Gum',
    note: 'test'
  };
  const expectedResult = {
    id: 1,
    amount: 1000,
    createdAt: 0,
    description: 'Gum',
    note: 'test'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: expenses[0].id,
    updates
  };
  const state = expensesReducer(expenses, action);
  expect(state[0]).toEqual(expectedResult);
});

test('should not edit if not found id', () => {
  const expense = {
    amount: 2000,
    createdAt: 100000,
    description: 'Dooff',
    note: 'test'
  };
  const action = {
    type: 'EDIT_EXPENSE',
    id: '-1',
    updates: expense
  };
  const state = expensesReducer(expenses, action);
  expect(state).toEqual(expenses);
});
