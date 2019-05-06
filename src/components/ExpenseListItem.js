import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';

// Export a stateless fuctional component
// destructuring으로 props을 - Descruption, amount, createdAt 으로
// 지정해서 받아서 사용!

const ExpenseListItem = ({ id, description, amount, createdAt }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h3>{description}</h3>
    </Link>
    <p>
      {amount} - {moment(createdAt).format('MMMM Do, YYYY')}
    </p>
  </div>
);

export default ExpenseListItem;
