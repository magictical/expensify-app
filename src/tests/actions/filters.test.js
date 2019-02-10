import moment from 'moment';
import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';

test('should generate set start date action object', () => {
  const action = setStartDate(moment(0));
  expect(action).toEqual({
    type: 'START_DATE',
    startDate: moment(0)
  });
});


test('should generate set end date action object', () => {
  const action = setEndDate(moment(0));
  expect(action).toEqual({ 
    type: 'END_DATE',
    endDate: moment(0)
  });
})

test('should generate set text filter action object', () => {
  const action = setTextFilter('new text filter');
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: 'new text filter'
  });
})


test('should generate set text filter action object with default value', () => {
  const action = setTextFilter();
  expect(action).toEqual({
    type: 'SET_TEXT_FILTER',
    text: ''
  });
})


// generator에서 리턴 값은 generator에 명시된 리턴값이다. 
// reducer의 리턴값이랑 헷갈리지 말자
test('should generate sort by amount action object', () => {
  const action = sortByAmount();
  expect(action).toEqual({
    type: 'SORT_BY_AMOUNT'
  });
})

test('should generate sort by date action object', () => {
  expect(sortByDate()).toEqual({ 
    type: 'SORT_BY_DATE'
  });
})