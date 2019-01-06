import React from 'react';

export default class ExpenseForm extends React.Component {
  //local state for tracking the data in this page
  state = {
    description: '',
    note: ''
  }
  // tracking the input data from user in description <input>
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  }
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  }

    render() {
        return (
            <div>
                <form>
                  <input 
                    type="text"
                    placeholder="Description"
                    autoFocus
                    onChange={ this.onDescriptionChange }
                  />
                  <input
                    type="text"
                    placeholder="Amount"
                  />
                  <textarea
                    placeholder="Add a note for your expense(optional)"
                    onChange={this.onNoteChange}
                  />
                  <button>Add Expense</button>
                </form>
            </div>
        )
    }
}