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

// gernerator for sortByAmount
const sortByAmount = () => ({
    type: 'SORT_BY_AMOUNT'
})

// generator for sortByDate 
const sortByDate = () => ({
    type: 'SORT_BY_DATE'
})

// generator for startDate
const setStartDate = (startDate) => ({
    type: 'START_DATE',
    startDate
})

// generator for EndDate
const setEndDate = (endDate) => ({
    type: 'END_DATE',
    endDate
})


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
                //state 값을 가져옴
                ...state,
                //text 오브젝트의 값을 변경하고 return!
                text:action.text
            }
        // filter sortByAmount
        case 'SORT_BY_AMOUNT' :
        return {
                ...state,
                sortBy: 'amount'
        };

        case 'SORT_BY_DATE' : 
        return {
                ...state,
                sortBy: 'date'
        };

        case 'START_DATE' :
        return {
                ...state,
                startDate: action.startDate 
        };

        case 'END_DATE' :
        return {
            ...state,
            endDate: action.endDate
        };
        
        default :
            return state;
    }
};


// filter for expense
const getVisibleExpenses = (expenses, { text, sortBy, startDate, endDate }) => {
    return expenses.filter((expense) => {
        //리턴값에 항상 true를 전달하기 위해 어떤값을 입력받든 true가되는 식을만듬
        const startDateMatch = typeof startDate !== 'number' || expense.createdAt >= startDate;
        const endDateMatch = typeof endDate !== 'number' || expense.createdAt <= endDate;
        
        const textMatch =  expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;

    //check sort function in MDN https://developer.mozilla.org/ko/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
    }).sort((a, b) => {
        // 비교후 -1이면 a의 인덱스를 작은값으로 즉 a가 앞으로정렬 1이면 a인덱스를 큰값으로
        if(sortBy === 'date') {
            //최신 순으로 정렬
            return a.createdAt < b.createdAt ? 1 : -1
        }
        if(sortBy === 'amount') {
            // amount가 높은 순으로 정렬
            return a.amount > b.amount ? -1: 1
        }
    });
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
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 100, createdAt: -21000}));
const expenseTwo = store.dispatch(addExpense({ description: 'coffee', amount: 3, createdAt: -1000 }));

// // remove coffee expense!
// store.dispatch(removeExpense({ id: expenseOne.expense.id}));

// // edit expense
// store.dispatch(editExpense(expenseTwo.expense.id, {amount: 500}));

// // text filter
// store.dispatch(setTextFilter('rent'));

store.dispatch(sortByAmount());

// store.dispatch(sortByDate());

// store.dispatch(setStartDate(0));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(0));


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
// console.log({
//     updateUser,
//     user
// })