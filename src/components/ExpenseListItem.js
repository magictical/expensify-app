import React from 'react';
import { connect } from "react-redux";

// Export a stateless fuctional component
// destructuring으로 props을 - Descruption, amount, createdAt 으로 
// 지정해서 받아서 사용!

const ExpenseItemList = ({ description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p></p>{amount} - {createdAt}
    </div>
)
    

export default ExpenseItemList;