// combineReducers - 일종의 Reducer 트래커인듯?
import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';




// ADD_EXPENSE
const addExpense = (
    {
        description = '',
        note = '',
        amount = 0,
        createdAt = 0
    }
) => ({
    type: 'ADD_EXPENSE',
    expense: {
        id: uuid(),
        description,
        note,
        amount,
        createdAt
    },
});

// REMOVE_EXPENSE
const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

// EDIT_EXPENSE
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

// ADD_TEXT
const setTextFilter = (text ='')  => ({
    type: 'SET_TEXT_FILTER',
    text
});


// Expenses Reducer
const expenseReducerDefaultState = [];
// Reducer for expenses
const expensesReducer = (state = expenseReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE':
            return [
                //spread operator 사용 ...은 이전의 array를 불러오는것
                // 즉 이전 state array, action.expense를 이어서 붙이는것(삽입) 
                ...state, 
                action.expense
            ]
        //filter의 파라메터 id는 {}를 사용해서 desructuring 됨 즉 state의 천번째 
        //property인 id를 직적 지정한거임 이걸 action.id와 비교해서 참이면 통과
        //거짓이면 필터링 즉 state필터의 파라메터와 입력된 id값이 동일하면 filter의 
        //새로운 array에서 제외된다.
        case 'REMOVE_EXPENSE':
            return state.filter(({ id }) => id !== action.id )
        case 'EDIT_EXPENSE' :
            return state.map((expense) => {
                if(expense.id === action.id) {
                    return {
                        //read all the expense data from state
                        ...state,
                        //override updates data in expense
                        ...action.updates
                    };
                } else {
                    return expense;
                }
            });
        default:
            return state;
    }
};

// Filter Reducer
// Filter Reducer default Array
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}



const filterReducers = (state = filterReducerDefaultState, action) => {
    switch (action.type) {
        case 'SET_TEXT_FILTER' :
            return {
                ...state,
                text:action.text
            }
        default :
            return state;
    }
}

// Store creattion
const store = createStore(
    combineReducers({
        expenses: expensesReducer,
        filters: filterReducers
    })
);


// ADD subcribe
store.subscribe(() => {
    console.log(store.getState())
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100 }));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 3 }));

// remove coffee expense!
store.dispatch(removeExpense({ id: expenseOne.expense.id}));

// edit expense
store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// text filter
store.dispatch(setTextFilter('rent'));



const demoState = {
    expenses: [{
        id: 'askldaks',
        description: 'January Rent',
        note: 'This was the final payment for that address',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
}


const user = {
    name: 'Jen',
    age: 24
};

const updateUser = {...user,
    name: 'Ian',
    city: 'Busan',
    hoby: 'climbing'
}

//...object 문법을 사용하려면 object spread operator사용설정을
//.babelrc에서 해줘야한다. yarn에 설치하고 .babelrc의 plugin에도 추가해야함
console.log({
    updateUser,
    user
})