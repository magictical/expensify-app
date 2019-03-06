import filtersReducer from '../../reducers/filters';
import moment from 'moment';

test('should setup default values', () => {
  const state = filtersReducer(undefined, { type: '@@' });
  expect(state).toEqual({
    text: '',
    sortBy: 'date',
    startDate: moment().startOf('month'),
    endDate: moment().endOf('month')
  });
});

test('should setup sort by amount', () => {
  const state = filtersReducer(undefined, { type: 'SORT_BY_AMOUNT' });
  expect(state.sortBy).toBe('amount');
});

test('should set sort by date', () => {
  // default state
  const currentState = {
    text: '',
    sortBy: 'amount',
    startDate: undefined,
    endDate: undefined
  };
  // action for this test
  const action = { type: 'SORT_BY_DATE' };
  const state = filtersReducer(currentState, action);
  expect(state.sortBy).toBe('date');
});

// testing for text filter
test('sholud set text', () => {
  const text = 'check this text state';
  const action = {
    type: 'SET_TEXT_FILTER',
    text
  };
  const state = filtersReducer(undefined, action);
  expect(state.text).toBe(text);
});

// testing for start date filter
test('set start date filter', () => {
  const startDate = moment();
  const action = {
    type: 'START_DATE',
    startDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.startDate).toBe(startDate);
});

// testing for end date filter
test('set end date filter', () => {
  const endDate = moment();
  const action = {
    type: 'END_DATE',
    endDate
  };
  const state = filtersReducer(undefined, action);
  expect(state.endDate).toBe(endDate);
});
