import { addExpense, editExpense, removeExpense } from '../../actions/expenses'

test('should setup remove expense action object', () => {
  const action = removeExpense({ id: '1234abcd' });
  expect(action).toEqual({
    type: 'REMOVE_EXPENSE',
    id: '1234abcd'
  })
})

test('should setup edit expense action object', () => {
  const action = editExpense(
    '123abc', 
    ({
        description: 'my bill',
        note: 'none',
        amount: 2500,
        createdAt: 0
    })    
  );
  expect(action).toEqual(
    {
      "type": "EDIT_EXPENSE",
      "id": '123abc', 
      "updates" :
        {
          description: "my bill",
          note: 'none',
          amount: 2500,
          createdAt: 0
        }
    });
})

test("should setup addExpense action object with expense data", () => {
  const expenseData = {
    description : "car price",
    note : 'nothing',
    amount : 9900,
    createdAt : 1000
  }
  const action = addExpense(expenseData)
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense : {
      ...expenseData,
      id: expect.any(String)
    }
  })
})

test('should setup addExpense action object with no data', () => {
  const expenseData = {};
  const action = addExpense(expenseData);
  expect(action).toEqual({
    type: "ADD_EXPENSE",
    expense : {
      description : "",
      note : '',
      amount : 0,
      createdAt : 0,
      id: expect.any(String)
    }
  })
})
