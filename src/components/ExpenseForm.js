import React from 'react';

export default class ExpenseForm extends React.Component {
  //local state for tracking the data in this page
  state = {
    description: '',
    note: '',
    amount: ''
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
  onAmountChange = (e) => {
    const amount = e.target.value;
    //regex for number and decimal two point
    if(amount.match(/^\d*(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
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
                    value={this.state.amount}
                    onChange={ this.onAmountChange }
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