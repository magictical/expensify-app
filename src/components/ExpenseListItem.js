import React from 'react';
import { connect } from "react-redux";

// Export a stateless fuctional component
// Descruption, amount, createdAt

const ExpenseItemList = ({ description, amount, createdAt}) => (
    <div>
        <h3>{description}</h3>
        <p></p>{amount} - {createdAt}
    </div>
)
    

export default ExpenseItemList;