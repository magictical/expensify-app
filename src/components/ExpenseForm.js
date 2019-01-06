import React from 'react';

export default class ExpenseForm extends React.Component {
    render() {
        return (
            <div>
                <form>
                  <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                  />
                  <input
                    type="text"
                    placeholder="Amount"
                  />
                  <textarea
                    placeholder="Add a note for your expense(optional)"
                  />
                  <button>Add Expense</button>
                </form>
            </div>
        )
    }
}