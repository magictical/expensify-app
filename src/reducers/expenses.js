// Expenses Reducer
const expenseReducerDefaultState = [];
// Reducer for expenses
export default (state = expenseReducerDefaultState, action) => {
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

