import React from 'react';
import { connect } from 'react-redux';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            This is EditExpensePage compnent. 
            This access Id is {props.match.params.id}
        </div>
    )
};

const mapStateToProps = (state, props) => {
  return {
    // expenses array에서 현재 페이지의 expense id와 같은 id의 값을 찾아서 리턴
    expense: state.expenses.find((expense) => expense.id === props.match.params.id)
  };
};

export default connect(mapStateToProps)(EditExpensePage);