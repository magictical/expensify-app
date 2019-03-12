import React from 'react';
import ExpenseDashboardPage from '../../components/ExpenseDashBoardPage';
// import ExpenseList from '../../components/ExpenseList';
// import ExpenseListFilter from '../../components/ExpenseListFilters'
import { shallow } from 'enzyme';
import expenses from '../fixture/expenses';

test('should render dashboard with filters and list', () => {
  const wrapper = shallow(<ExpenseDashboardPage />);
  expect(wrapper).toMatchSnapshot();
});
