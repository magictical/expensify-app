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
    calendarFocused: false,
    error: ''
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
    //!amount 는 input값을 지웠을경우(false) input이 placeholder로 초기화되도록 함
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }))
    }
  }
  onDateChange = (createdAt) => {
    //prevent delete the date(colored UI) from user
    if(createdAt) {
      this.setState(() => ({ createdAt }));
    }    
  }
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  }
  onSubmit = (e) => {
    e.preventDefault();
    if(!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount' }));
    } else {
      this.setState(() => ({ error: ''}));
      console.log('submmited!');
    }
  }


    render() {
        return (
            <div>
            {this.state.error && <p>{this.state.error}</p>  }
                <form onSubmit={this.onSubmit}>
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