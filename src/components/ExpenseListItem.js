import React from 'react';
import { connect } from "react-redux";
import { removeExpense } from '../actions/expenses'
import { Link } from 'react-router-dom';

// Export a stateless fuctional component
// destructuring으로 props을 - Descruption, amount, createdAt 으로 
// 지정해서 받아서 사용!

const ExpenseListItem = ({ dispatch, id, description, amount, createdAt }) => (
    <div>
        <h3>{description}</h3>
        <p>{amount} - {createdAt}</p>
				<Link to= {`/edit/${id}`}>
					Edit Item
				</Link>
        <button onClick={() =>
            // dispatch 사용은 문법이라고 생각하자
            dispatch(removeExpense({ id }))
        }>Remove</button>
        {console.log()}
    </div>
)

    

export default connect()(ExpenseListItem);