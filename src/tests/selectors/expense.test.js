import selectExpenses from '../../selectors/expenses';
import momonet from 'moment';
const expenses = [{
  id:1,
  description: 'Gum',
  note:'',
  amount: 195,
  createdAt: 0
}, {
  id:2,
  description: 'Rent',
  note:'',
  amount: 109500,
  createdAt: -1000
}, {
  id:3,
  description: 'Creadit Card',
  note:'',
  amount: 4500,
  createdAt: 1000
}];

test('should filter by text value', () => {
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
  };
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual([expenses[2], expenses[1]]);
});

test('should filter by startDate', () =>{
  const filters = {
    text: 'e',
    sortBy: 'date',
    startDate: 0,
    endDate: undefined
  }
  const result = selectExpenses(expenses, filters);
  expect(result).toEqual(expenses[2]);
})