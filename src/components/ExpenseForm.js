import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';

const now = moment();

console.log(now.format('MMM Do, YYYY'));

export default class ExpenseForm extends React.Component {
  //local state for tracking the data in this page
  state = {
    description: '',
    note: '',
    amount: '',
    createdAt: moment(),
    calendarFocused: false
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
  onDateChange = (createdAt) => {
    this.setState(() => ({ createdAt }));
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
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
                  <SingleDatePicker 
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calendarFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
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