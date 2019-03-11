import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

const ExpenseList = props => (
  <div>
    <h1>Expense List</h1>

    {//...expense로 현재 모든 값의 상태를 넘김 ExpenseListItem에서는
    //destructuring 으로 expense의 특정 값을 받아서 처리!
    props.expenses.map(expense => {
      return <ExpenseListItem key={expense.id} {...expense} />;
    })}
  </div>
);

// // ConnecteExpenseList의 object를 ExpenseList의
// //  props로 보낼 수 있다.
// const ConnectedExpenseList = connect((state) => {
//     return {
//         //이제 store랑 연결됨
//         expenses: state.expenses
//     };
// })(ExpenseList)

// // 보통 사용하는 패턴 - export default로 바로 지정
// export default  connect((state) => {
//     return {
//         //이제 store랑 연결됨
//         expenses: state.expenses
//     };
// })(ExpenseList)

// 또는 함수를 만들어서 그값을 connect로 보냄

const mapStateToProps = state => {
  return {
    expenses: selectExpenses(state.expenses, state.filters)
  };
};

// connect를 이용해서 특정 component가 store의 값을 사용할 수 있게됨.
export default connect(mapStateToProps)(ExpenseList);
