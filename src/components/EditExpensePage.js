import React from 'react';
import { connect } from 'react-redux';
import ExpenseForm from './ExpenseForm';
import { editExpense, removeExpense } from '../actions/expenses';

// Refactor EditExpensePage to be a class based component
export class EditExpensePage extends React.Component {
  onSubmit = expense => {
    console.log('props', expense);
    this.props.editExpense(this.props.expense.id, expense);
    this.props.history.push('/');
  };
  onClick = () => {
    // dispatch 사용은 문법이라고 생각하자
    this.props.removeExpense({ id: this.props.expense.id });
    this.props.history.push('/');
  };
  render() {
    return (
      <div>
        <ExpenseForm expense={this.props.expense} onSubmit={this.onSubmit} />
        <button onClick={this.onClick}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    // expenses array(state)에서 현재 페이지의 expense id와 같은 id의 값을 찾아서 리턴
    expense: state.expenses.find(
      expense => expense.id === props.match.params.id
    )
  };
};

// Setup mapDispatchToProps EditExpense and removeExpense
const mapDispatchToProps = dispatch => ({
  editExpense: (id, expense) => {
    dispatch(editExpense(id, expense));
  },
  removeExpense: expense => {
    dispatch(removeExpense(expense));
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditExpensePage);
