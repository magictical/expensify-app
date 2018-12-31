import React from 'react';
import { connect } from 'react-redux';


const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.filters.text}
        {props.expenses.length}
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

const mapStateToProps = (state) => {
    return {
        expenses: state.expenses,
        filters: state.filters
    };
};

// connect를 이용해서 특정 component가 store의 값을 사용할 수 있게됨.
export default connect(mapStateToProps)(ExpenseList);