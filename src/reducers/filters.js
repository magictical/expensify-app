// Filter Reducer
// Filter Reducer default Array
const filterReducerDefaultState = {
    text: '',
    sortBy: 'date',
    startDate: undefined,
    endDate: undefined
}



export default (state = filterReducerDefaultState, action) => {
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