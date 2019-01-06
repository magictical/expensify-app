import React from 'react';
import ExpenseForm from './ExpenseForm';
import { connect } from 'react-redux';
import { addExpense } from '../actions/expenses';

const AddExpensePage = (props) => (
    <div>
        <h1>Add Expense</h1>
				<ExpenseForm 
					//expense 빈박스를 보내서 ExpenseFrom에서 가공한후
					//dispatch로 store와 연결하면 이제 다른 component에도 사용가능!
          onSubmit={(expense) => {
						props.dispatch(addExpense(expense));
						//move to dashboard
						props.history.push('/');
						
					}}
        />
    </div>
);

export default connect()(AddExpensePage);